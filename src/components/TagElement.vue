<script setup lang="ts">
import type { Tag } from '@/models/Tag';

defineProps<{
  tag: Tag
}>()
</script>

<template>
  <span class="tag" :class="[tag.type, { 'primary': (tag.priority ?? 0) > 0 }]"
    :style="{ 'background-color': tag.color, 'border-color': tag.color }">
    {{ tag.name }}
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
  padding: 0.125rem 0.375rem;

  &.tool {
    border-radius: 2rem;

    &.primary {
      color: functions.color('background');
    }
  }

  &.primary {
    @include mixins.font('semibold');
    background-color: functions.color('foreground', 0.6);
    border-color: functions.color('foreground', 0.25);
  }
}
</style>
