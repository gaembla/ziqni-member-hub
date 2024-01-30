<template>
  <div class="default-layout" v-if="!isMobile">
    <div class="content">
      <div id="main-block">
        <div v-if="isClientConnected" class="main-block_content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
  <div v-if="isMobile" id="mobile-layout">

    <div id="mobile-layout-main-block">
      <div v-if="isClientConnected">
        <router-view />
      </div>
    </div>

    <UserProfileMobile
        v-if="isClientConnected"
        @closeProfileInfo="closeProfileInfo"
        @logOut="logOut"
        :class="{ open: isProfileInfo }"
        :isProfileInfo="isProfileInfo"
    />
  </div>
</template>

<script setup>

import { ApiClientStomp, MemberRequest, MembersApiWs } from '@ziqni-tech/member-api-client';
import { useRouter } from 'vue-router';

import TheSidebar from '../components/sidebar/TheSidebar';
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { useStore } from 'vuex';
import MobileNav from '@/components/sidebar/MobileNav';
import ToggleTheme from '@/shared/components/ToggleTheme';
import useMobileDevice from '@/hooks/useMobileDevice';
import UserProfileMobile from '@/components/user-profile/UserProfileMobile.vue';
import BlazzioMobileNav from "@/components/sidebar/BlazzioMobileNav.vue";
import {getTokenByMemberRefId} from "@/utils/authHelper";

const router = useRouter();
const store = useStore();

const isClientConnected = computed(() => store.getters.getIsConnectedClient);
const currentMember = reactive({});

const { isMobile } = useMobileDevice();

const isGoBackBtn = computed(() => {
  const pathLength = router.currentRoute.value.path.split('/').length;

  return !!(router.currentRoute.value.params.id || pathLength > 2);
});

const isProfileInfo = ref(false);

const openProfileInfo = () => {
  isProfileInfo.value = true;
}

const closeProfileInfo = () => {
  isProfileInfo.value = false;
}

onMounted(async () => {
  ApiClientStomp.instance.client.debug = () => {};
  const memberRefId = store.getters.getMemberRefId;
  const token = getTokenByMemberRefId(memberRefId);
  await ApiClientStomp.instance.connect({ token: token });
  await store.dispatch('setIsConnectedClient', true);
});

const getMemberRequest = async () => {
  const memberRequest = MemberRequest.constructFromObject(
      {
        'includeFields': [],
        'includeCustomFields': [],
        'includeMetaDataFields': []
      },
      null);

  const memberApiWsClient = new MembersApiWs(ApiClientStomp.instance);

  memberApiWsClient.getMember(memberRequest, async (data) => {
    currentMember.value = await data.data;
    await store.dispatch('setMemberAction', data.data);
  });
};

watch(isClientConnected, (value) => {
  if (value) getMemberRequest();
});


const logOut = async () => {
  await ApiClientStomp.instance.disconnect();
  localStorage.removeItem('token');
  await router.push({ path: '/login' });
};
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/_variables';

.default-layout {
  display: grid;
  grid-template-columns: 0 100%;
  grid-template-areas: "nav main";
  height: 100vh;

  #nav-block {
    grid-area: nav;
    background-color: $light-grey;
    position: fixed;
    height: 100%;
    overflow: auto;
    width: 15%;
  }

  .content {
    grid-area: main;

    #main-block {
      padding: 0 0 0 20px;
      background-color: $dark-grey;
      overflow: auto;
      height: 100%;

      .main-block_content {
        width: 100%;
        height: 100%;
      }

      &::-webkit-scrollbar {
        width: 0;
      }
    }
  }
}
</style>
