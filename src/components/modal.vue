<template>
  <teleport to="#modal">
    <div class="modal">
      모달 제목
      <slot />
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'Modal'
};
</script>
