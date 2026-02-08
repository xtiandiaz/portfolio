<script lang="ts" setup>
import type { Tag } from '@/models/Tag';
import { AttributeTag } from './'

defineProps<{ tags: Tag[] }>()
</script>

<template>
  <div class="tags">
    <AttributeTag v-for="(tag, index) of tags" :key="index" :tag="tag" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/functions';

.tags {
  display: flex;
  gap: 0.125rem;
}

.tag {
  border: none;

  &.primary {
    color: functions.color('foreground');
  }
}
</style>
