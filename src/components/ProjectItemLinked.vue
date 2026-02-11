<script setup lang="ts">
import type { ProjectItem } from '@/models/Project';
import { ProjectItem as ProjectItemComponent } from '../components';

const { project } = defineProps<{
  project: ProjectItem
}>()
</script>

<template>
  <a v-if="project.link" :href="project.link" target="_blank">
    <ProjectItemComponent :project="project" />
  </a>
  <RouterLink v-else :to="`/project/${project.id}`">
    <ProjectItemComponent :project="project" />
  </RouterLink>
</template>
