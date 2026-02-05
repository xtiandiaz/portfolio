<script lang="ts" setup>
import type { Project } from '@/models/Project';
import { ProjectTag } from './'

defineProps<{ tags: Project.Tag[] }>()
</script>

<template>
  <div class="tags">
    <ProjectTag v-for="(tag, index) of tags" :key="index" :tag='tag' />
  </div>
</template>

<style lang="scss" scoped>
.tags {
  display: flex;
  gap: 0.125rem;
}
</style>
