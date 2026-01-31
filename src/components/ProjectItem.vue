<script setup lang="ts">
import { Project } from '@/models/Project';
import { ProjectTag } from './'

const { project } = defineProps<{
  project: Project
}>()

const projectKey = Project.key(project)

</script>

<template>
  <article class="project-item" :style="{
    'aspect-ratio': Project.aspectRatioValue(project.aspectRatio),
    'background-color': project.colors.background
  }">
    <img :alt="`${project.name} preview`" :src="`img/${projectKey}/preview.png`" />
    <div class="tags">
      <ProjectTag v-for="(tag, index) of Project.tags(project)" :key="index" :project-key="projectKey"
        :is-primary="index == 0">
        {{ tag }}
      </ProjectTag>
    </div>
  </article>
</template>

<style scoped lang="scss">
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
    bottom: $margin;
    left: $margin;
    position: absolute;
    display: flex;
    gap: 0.125rem;
  }
}
</style>
