<script setup lang="ts">
import type { Project } from '@/models/Project';

defineProps<{
  tag: Project.Tag
}>()
</script>

<template>
  <span class="tag" :class="{ 'primary': tag.priority > 0 }" :style="{ 'background-color': tag.backgroundColor }">
    {{ tag.label }}
  </span>
</template>

<style scoped lang="scss">
.tag {
  border-radius: 0.5rem;
  color: white;
  display: inline-block;
  font-family: 'Inter Medium', sans-serif;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;

  &.primary {
    font-family: 'Inter SemiBold', sans-serif;
  }
}
</style>
