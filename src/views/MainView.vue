<script setup lang="ts">
import { ProjectItem } from '@/components';
import { ProjectRepo } from '@/services/ProjectRepo';

const repo = ProjectRepo.instance
</script>

<template>
  <main>
    <article>
      <div class="project-items">
        <ProjectItem v-for="(project, index) of repo.items" :key="index" :project="project"
          @click="$router.push(`/project/${project.id}`)" />
      </div>
    </article>
  </main>
  <footer>xd</footer>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins';

.project-items {
  $gap: 1rem;

  column-gap: $gap;
  columns: 4;
  font-size: 0;
  margin: 0 auto;
  max-width: 1280px;

  .project-item {
    margin-bottom: $gap;
  }

  @include mixins.if-screen-width('l', 'max') {
    columns: 3;
  }

  @include mixins.if-screen-width('m', 'max') {
    columns: 2;
  }

  @include mixins.if-screen-width('s', 'max') {
    columns: 1;
  }
}
</style>
