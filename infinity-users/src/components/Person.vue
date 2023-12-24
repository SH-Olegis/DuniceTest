<template>
  <div
    class="tr person"
    @click="onItemClick"
  >
    <div class="td person__index">
      {{ item.id }}
    </div>
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

const props = defineProps({
  item: {
    type: Object as () => PersonInterface,
    required: true,
  },
})

const emit = defineEmits(['itemClick'])

const onItemClick = () => {
  emit('itemClick', props.item);
}
</script>

<style scoped lang="scss">
.person {
  display: flex;
  align-items: center;
  cursor: pointer;

  padding: 8px 0;

  &:hover {
    background-color: #4fc08d;
    color: white;
  }

  &__index {
    color: rgba(0, 0, 0, .2);
    width: 55px;
    text-align: right;
    flex: auto 0 0;
  }

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
