<template>
  <div class="page-content">
    <CNav variant="pills" layout="fill" class="achievements-tabs">
      <CNavLink
          :active="activeTabKey === 'available'"
          @click="() => updateActiveTab('available')"
          :disabled="!isAvailableAwardsActive"
      >
        available
      </CNavLink>
      <CNavLink
          :active="activeTabKey === 'claimed'"
          @click="() => updateActiveTab('claimed')"
      >
        claimed
      </CNavLink>
      <CNavLink
          :active="activeTabKey === 'instantWins'"
          @click="() => updateActiveTab('instantWins')"
      >
        Instant wins
      </CNavLink>
    </CNav>
    <AvailableAwardsSection v-if="activeTabKey === 'available'" @setIsAvailableAwards="setIsAvailableAwards" />
    <ClaimedAwardsSection v-if="activeTabKey === 'claimed'" />
    <InstantWinsSection v-if="activeTabKey === 'instantWins'" />
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { CNav, CNavLink } from '@coreui/vue';
import AvailableAwardsSection from '@/components/awards/AvailableAwardsSection.vue';
import ClaimedAwardsSection from '@/components/awards/ClaimedAwardsSection.vue';
import InstantWinsSection from '@/components/instant-wins/InstantWinsSection.vue';

const activeTabKey = ref('available');

const updateActiveTab = (val) => {
  activeTabKey.value = val;
};

const isAvailableAwardsActive = ref(true);
const setIsAvailableAwards = () => {
  isAvailableAwardsActive.value = false;
  activeTabKey.value = 'claimed'
}

</script>

<style lang="scss" scoped>

</style>