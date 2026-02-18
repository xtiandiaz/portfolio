<script lang="ts" setup>
import type { Tag } from '@/models/Tag';
import { TagElement } from '.'

defineProps<{ tags: Tag[] }>()
</script>

<template>
  <div class="tags">
    <TagElement v-for="(tag, index) of tags" :key="index" :tag="tag" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/functions';
@use '@/assets/styles/mixins';

.tags {
  display: flex;
  flex-flow: row wrap;
  gap: 0.375rem;
}
</style>
