<template>
  <div
      class="tr person"
  >
    <div class="td">
      <div class="person__info">
        <div class="person__img-wr">
          <img
              :key="item.avatar"
              :src="item.avatar"
              class="person__img"
          >
        </div>
        <div class="person__description">
          <span class="person__name">{{ item.name }}</span>
          <span class="person__email">{{ item.email }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PersonInterface } from '@/api/persons/interfaces';

defineProps({
  item: {
    type: Object as () => PersonInterface,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.person {
  display: flex;
  align-items: center;

  &__info {
    display: flex;
    align-items: center;
    height: 48px;
  }

  &__img {
    background: grey;

    width: 50px;
    height: 50px;
    margin-right: 12px;
  }

  &__description {
    display: flex;

    flex-direction: column;

    gap: 8px;
  }
}

.person .td:first-child {
  padding: 12px;
}
</style>
