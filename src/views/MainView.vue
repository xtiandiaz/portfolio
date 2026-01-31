<script setup lang="ts">
import { Project } from '@/models/Project';
import projectsData from '@/assets/json/projects.json'
import { ProjectItem } from '@/components';

const projects = projectsData as Project[]
</script>

<template>
  <header>xd</header>
  <main>
    <ProjectItem v-for="(project, index) of projects" :key="index" :project="project" />
  </main>
</template>

<style scoped lang="scss">
main {
  $gap: 1rem;

  columns: 3;
  column-gap: $gap;
  font-size: 0;
  margin: 0 auto;
  max-width: 960px;

  .project-item {
    margin-bottom: $gap;
  }
}
</style>
