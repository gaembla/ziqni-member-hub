<template>
  <div class="t-card">
    <div class="t-card-image">
      <img :src="cardImage" alt="">
    </div>
    <div class="t-info">
      <div class="tournament-name">{{ cardItem.name }}</div>
      <TournamentDataRow
          :icon="expiresInIcon"
          :label="'Ends'"
          :value="cardItem.scheduledEndDate"
          :is-date="true"
      />
      <TournamentDataRow
          :icon="prizeIcon"
          :label="'prize'"
          :value="cardItem.rewardValue"
      />
      <div class="see-more-btn-wrapper" >
        <button class="see-more-btn" @click="goToTournamentsDetailsPage">See more</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import cardImage from '@/assets/images/tournaments/tournament.png';
import TournamentDataRow from './TournamentDataRow';
import prizeIcon from '@/assets/icons/tournament/prize.png';
import expiresInIcon from '@/assets/icons/tournament/expires-in.png';

const props = defineProps({
  card: Object
});

const cardItem = props.card;

const router = useRouter();

const goToTournamentsDetailsPage = () => {
  router.push({
    name: 'TournamentDetails',
    params: {
      id: cardItem.id,
    }
  });
};

</script>

<style lang="scss">
@import '../../assets/scss/_variables';

.t-card {
  background-color: $light-grey;
  font-family: $semi-bold;

  .t-card-image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .t-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 12px 13px;

    .tournament-name {
      font-size: 16px;
      color: $text-color-white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 24px;
    }

    .t-data {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, minmax(0, 1fr));
    }


    .see-more-btn-wrapper {
      width: 100%;
      margin-top: auto;

      .see-more-btn {
        width: 100%;
        margin-top: 18px;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 57px;

        background: $btn-gradient-color;
        border-radius: $border-radius;
        border: 1px solid $border-dark;

        font-size: 16px;
        color: $text-color-white;
      }
    }

  }
}

@media screen and (max-width: $tableWidth) {
  .t-card {
    .t-card-image > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .t-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 8px 8px 13px;

      .tournament-name {
        font-size: 16px;
        color: $text-color-white;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 24px;
      }

      .t-data {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, minmax(0, 1fr));
      }

      .see-more-btn-wrapper {
        .see-more-btn {
          margin-top: 0;

          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px;

          background: $purple;
          border-radius: $border-radius;
          border: 1px solid $border-dark;

          font-size: 12px;
          color: $text-color-white;
        }
      }

    }
  }
}
</style>