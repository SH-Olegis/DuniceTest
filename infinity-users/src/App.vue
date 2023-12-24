<template>
  <InfinityScroller
      v-if="allItems.length"
      class="content"
      :items="allItems"
      :item-size="50"
      :height-container="600"
      @on-infinity-scroll="onLoadMore"
  >
    <template #default="{ item }">
      <Person
          :item="item"
          @item-click="onListElementClick"
      />
    </template>
  </InfinityScroller>
  <div v-else>
    Loading...
  </div>
  <ModalWindow
      :is-open="isModalOpen"
      @close="isModalOpen = false"
  >
    <PersonModal
        :item="selectedItem"
    />
  </ModalWindow>
</template>

<script setup lang="ts">
import { onMounted, type Ref, ref } from 'vue'
import { getPersons } from '@/api/persons'
import Person from '@/components/Person.vue'
import InfinityScroller from '@/components/InfinityScroller.vue'
import ModalWindow from '@/components/ModalWindow.vue'
import PersonModal from '@/components/PersonModal.vue'
import type { PersonInterface } from '@/api/persons/interfaces';

const isModalOpen: Ref<boolean> = ref(false)
const selectedItem: Ref<PersonInterface | null> = ref(null)
const allItems: Ref<PersonInterface[]> = ref([])
const isLoading: Ref<boolean> = ref(false)

onMounted(async () => {
  allItems.value = await getPersons()
})

const onLoadMore = async () => {
  if (isLoading.value) {
    return
  }

  isLoading.value = true

  try {
    allItems.value.push(...await getPersons())
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

const openModal = (item: PersonInterface): void => {
  selectedItem.value = item
  isModalOpen.value = true
}

const onListElementClick = (item: PersonInterface): void => {
  openModal(item)
}

</script>

<style>
body {
  font-size: 16px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}

.content {
  border: solid 1px #42b983;
  position: relative;
}
</style>
