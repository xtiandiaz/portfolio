<script setup lang="ts">
import { IconElement } from '.';

defineProps<{
  iconKey: string,
  color?: string
}>()
</script>

<template>
  <button class="icon-button">
    <label :style="{ 'background-color': color }">
      <IconElement :icon-key="iconKey" />
    </label>
  </button>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/functions';
@use '@/assets/styles/mixins';

button {
  @include mixins.size(2.5rem);
  position: relative;

  label {
    @include mixins.absolute-center;
    @include mixins.size(2rem);
    background-color: functions.color('foreground', 0.25);
    border-radius: 1.5rem;
    display: block;

    .icon {
      @include mixins.absolute-center;
      @include mixins.size(1.5rem);
    }
  }
}
</style>
