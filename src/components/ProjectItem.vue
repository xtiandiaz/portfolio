<script setup lang="ts">
import { type ProjectItem } from '@/models/Project';
import { ProjectTags } from './';

const { project } = defineProps<{
  project: ProjectItem
}>()
</script>

<template>
  <section class="project-item" :style="{
    'aspect-ratio': project.aspectRatio,
    'background-color': project.palette.default
  }">
    <img :alt="`${project.name} preview`" :src="`/img/${project.id}/preview.png`" />
    <ProjectTags :tags="project.tags"></ProjectTags>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins';

.project-item {
  border-radius: 1rem;
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  overflow: hidden;
  position: relative;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .tags {
    $margin: 0.625rem;

    @include mixins.position(absolute, none, none, $margin, $margin);
  }
}
</style>
