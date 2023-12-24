<template>
  <teleport to="body">
    <div v-if="isOpen"
         class="modal"
         ref="modalRef"
    >
      <div class="modal-content"
           v-on-click-outside="onClickOutside"
      >
        <slot></slot>
        <button @click="onCloseBtnClick">Закрыть</button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { vOnClickOutside } from '@vueuse/components';
import { ref } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
})

const emit = defineEmits(['close'])

const modalRef = ref<HTMLDivElement | null>(null);

const closeModal = () => {
  if (props.isOpen) {
    emit('close');
  }
}

const onCloseBtnClick = () => {
  closeModal()
}

const onClickOutside = () => {
  closeModal()
}

</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
}
</style>
