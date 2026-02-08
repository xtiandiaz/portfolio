<script setup lang="ts">
import type { Tag } from '@/models/Tag';

defineProps<{
  tag: Tag
}>()
</script>

<template>
  <span class="tag" :class="{ 'primary': (tag.priority ?? 0) > 0 }"
    :style="{ 'background-color': tag.backgroundColor }">
    {{ tag.label }}
  </span>
</template>

<style scoped lang="scss">
@use '@/assets/styles/functions';
@use '@/assets/styles/mixins';

.tag {
  background-color: functions.color('foreground', 0.1);
  border: 1px solid functions.color('foreground', 0.1);
  border-radius: 0.375rem;
  color: functions.color('foreground');
  display: inline-block;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;

  &.primary {
    @include mixins.font('semibold');
    background-color: functions.color('foreground', 0.6);
    border-color: functions.color('foreground', 0.25);
    color: functions.color('background');
  }
}
</style>
