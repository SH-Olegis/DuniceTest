<template>
  <div v-bind="containerProps"
       :style="{'height': `${heightContainer}px`}"
  >
    <div v-bind="wrapperProps">
      <div v-for="item in list"
           :key="item[keyField]"
           :style="{ 'height': itemSize }"
      >
        <slot :item="item.data" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInfiniteScroll, useVirtualList } from '@vueuse/core';

const props = defineProps({
  itemSize: {
    type: Number,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  keyField: {
    type: String,
    default: 'id'
  },
  heightContainer: {
    type: Number,
    required: true,
  }
})

const emit = defineEmits(['onInfinityScroll'])

const { list, containerProps, wrapperProps } = useVirtualList(
    props.items,
    {
      itemHeight: props.itemSize,
    },
)

useInfiniteScroll(containerProps.ref,
    () => {
      emit('onInfinityScroll')
    }, { distance: 50 })


</script>

