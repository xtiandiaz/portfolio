<script setup lang="ts">
import { type ProjectItem } from '@/models/Project';
import { TagElementSet } from '.';

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

    <TagElementSet :tags="project.tags.slice(0, 1)"></TagElementSet>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins';

section {
  background-color: rgba(0 0 0 / 0.25);
  background-size: cover;
  border-radius: 1rem;
  display: inline-block;
  position: relative;
  width: 100%;

  a {
    @include mixins.position(absolute, 0, 0, 0, 0);
    display: block;
  }

  .tags {
    @include mixins.position(absolute, none, none, 0.625rem, 0.625rem);
    pointer-events: none;
  }

  // HACK to ignore Safari cuz these effects render awfully only there
  @supports not (font: -apple-system-body) {
    box-shadow: 0 0 1.5rem rgba(0 0 0 / 0.25);
    transition: transform 0.25s ease-in-out;

    &:hover {
      transform: scale(1.025);
    }
  }
}
</style>
