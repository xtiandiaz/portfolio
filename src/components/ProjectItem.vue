<script setup lang="ts">
import { type ProjectItem } from '@/models/Project';
import { AttributeTags } from './';

const { project } = defineProps<{
  project: ProjectItem
}>()
</script>

<template>
  <section class="project-item" :style="{
    'aspect-ratio': project.aspectRatio,
    'background-image': `url(/img/${project.id}_preview.png)`
  }">
    <a v-if="project.link" :href="project.link" target="_blank"></a>
    <RouterLink v-else :to="`/project/${project.id}`" />

    <AttributeTags :tags="project.tags"></AttributeTags>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins';

section {
  background-color: rgba(0 0 0 / 0.25);
  background-size: cover;
  border-radius: 1rem;
  // box-shadow: 0 0 1.5rem rgba(0 0 0 / 0.25);
  display: inline-block;
  position: relative;
  // transition: transform 0.25s ease-in-out;
  width: 100%;

  &:hover {
    // transform: scale(1.025);
  }

  .tags {
    $margin: 0.625rem;

    @include mixins.position(absolute, none, none, $margin, $margin);
  }
}

a {
  @include mixins.position(absolute, 0, 0, 0, 0);
  // border: 1px solid white;
  display: block;
}
</style>
