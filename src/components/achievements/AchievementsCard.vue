<template>
  <div class="achievements-card" @click="goToAchievementDetails">
    <div class="top-section">
      <div class="left-section">
        <div class="icon">
          <img :src="achievementIconLink" alt="">
        </div>
      </div>
      <div class="right-section">
        <div class="title">
          {{ achievement.name }}
        </div>
        <div class="achievements-progress">
          <div class="progress">
            <div class="progress-bar" :style="{ width: achievement.percentageComplete + '%' }"></div>
          </div>
          <div class="progress-value">
            {{ achievement.percentageComplete }}%
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-section">
      <div class="btn prize">
        <img :src="rewardIcon" alt="">
        {{ achievement.rewardValue }}
      </div>
      <button
        class="btn leave-button"
        :class="{'join-btn': !isEntrant}"
        @click.stop="isEntrant ? openModal() : join()"
      >
        {{ isEntrant ? 'Leave' : 'Join' }}
      </button>
    </div>
  </div>
  <Modal
    :modalShow="leaveModal"
    :messageGeneral="'Are you sure you want to leave this achievement?'"
    :title="'Leave the achievement'"
    :successBtnLabel="'Leave'"
    @doFunction="leave"
    @closeModal="closeModal"
    v-on:toggle-modal="leaveModal = false"
  />
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';

import Modal from '@/shared/components/Modal.vue';
import defaultIcon from '@/assets/icons/achievements/book.svg'
import router from '@/router';
import diamondIcon from '@/assets/icons/achievements/diamond.png';


const props = defineProps({
  achievement: { type: Object, required: true }
});

const achievementIconLink = computed(() => {
  return props.achievement && props.achievement.iconLink
      ? props.achievement.iconLink
      : defaultIcon
});

const rewardIcon = computed(() => {
  return props.achievement && props.achievement.rewardIconLink
      ? props.achievement.rewardIconLink
      : diamondIcon
})

const store = useStore();

const emit = defineEmits(['joinAchievement', 'leaveAchievement']);

let leaveModal = ref(false);

const achievement = props.achievement;
const entrantStatus = ref('');

const isEntrant = computed(() => entrantStatus.value === 'Entrant' || entrantStatus.value === 'Entering');

watch(() => store.getters.getAchievements, (newValue) => {
  const newArr = newValue.filter(item => item.id === achievement.id);
  entrantStatus.value = newArr[0].entrantStatus;
}, { immediate: true });

const openModal = () => {
  leaveModal.value = true;
};

const closeModal = () => {
  leaveModal.value = false;
};


const join = () => {
  emit('joinAchievement', { id: achievement.id, name: achievement.name });
};

const leave = () => {
  emit('leaveAchievement', { id: achievement.id, name: achievement.name });
  leaveModal.value = false;
};

const goToAchievementDetails = () => {

  router.push({
    name: 'AchievementDetails',
    params: {
      id: achievement.id,
    }
  })
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables';

.achievements-card {
  width: 100%;
  background-color: $light-grey;
  border-radius: $border-radius;
  padding: 10px 16px 14px;

  cursor: pointer;

  .top-section {
    display: flex;
    border-bottom: 1px solid $btn-border-grey;
    padding-bottom: 14px;
  }

  .left-section {
    width: 20%;

    .icon {
      width: 74px;
      height: 74px;
      border-radius: $border-radius-round;
      border: 1px solid $btn-border-grey;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        background: radial-gradient(50% 50% at 50% 50%, #38ACCF 0%, rgba(56, 172, 207, 0) 100%);
        opacity: 0.5;
        filter: blur(37.5px);
      }

      > img {
        width: 100%;
        height: 100%;
        border-radius: $border-radius-round;
        object-fit: contain;
      }
    }
  }

  .right-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 0 0 20px;

    .title {
      font-family: $semi-bold;
      font-size: 16px;
      color: $text-color-white;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .achievements-progress {
      display: flex;
      margin-top: 10px;
      width: 100%;

      .progress {
        width: 90%;
        height: 4px;
        background-color: $dark-blue;
        margin: 10px 0;

        .progress-bar {
          height: 100%;
          background: $purple-gradient;
          border-radius: $border-radius-sm;
        }
      }

      .progress-value {
        margin-left: 5px;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: $text-color-white;
      }
    }
  }

  .bottom-section {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    .btn {
      width: 108px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: $border-radius;

      font-size: 16px;
      font-family: $semi-bold;
      color: $text-color-white;

      > img {
        margin-right: 5px;
      }
    }

    .leave-button {
      background: $btn-grey;
    }

    .join-btn {
      background: $btn-gradient-color;
    }

    .prize {
      color: $body-text-color;
      background-color: $dark-grey;
      cursor: default;
      border: none;

      > img {
        max-width: 36px;
        height: 18px;
      }
    }

    .go-button {
      border: 1px solid $purple;
      color: $text-color-white;
    }
  }
}
@media screen and (max-width: $tableWidth) {
  .achievements-card {

    .bottom-section {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      .btn {
        font-size: 12px;

        > img {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>