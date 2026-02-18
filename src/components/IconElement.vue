<script setup lang="ts">
import { onMounted, ref } from 'vue';

const { iconKey } = defineProps<{
  iconKey: string,
  color?: string
}>()

const icon = ref<string>()

onMounted(async () => {
  icon.value = (await import(`@/assets/icons/${iconKey}.svg?raw`)).default
})
</script>

<template>
  <span class="icon" v-html="icon" :style="{ 'color': color }"></span>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/functions';
@use '@/assets/styles/mixins';

.icon {
  @include mixins.min-size(1.5em);
  color: functions.color('foreground');
  display: inline-block;
}
</style>
