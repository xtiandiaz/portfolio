<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import { ContentRepo } from '@/services/ContentRepo';
import { TagElementSet, IconElement } from '@/components';
import * as Color from '@/utils/color'
import router from '@/router';

const { id } = defineProps<{
  id: string,
}>()

const project = ContentRepo.instance.projects.find(p => p.id == id)

function close() {
  router.replace('/')
}

function handleClick(e: PointerEvent) {
  if ((e.target as HTMLElement)?.tagName.toLowerCase() == 'main') {
    close()
  }
}
function handleKeyDown(e: KeyboardEvent) {
  if (e.code === 'Escape') {
    close()
  }
}

onMounted(() => {
  if (!project) {
    close()
    return
  }

  window.addEventListener('keydown', handleKeyDown)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div class="wrapper" v-if="project" :key="project.id" @click="(e) => handleClick(e)">
    <div class="background" :style="{ 'background-color': project.palette.darkest }">
    </div>

    <main>
      <article :style="{ 'background-color': Color.setOpacity(project.palette.default, 0.9) }">
        <div class="header">
          <TagElementSet class="larger" :tags="project.tags"></TagElementSet>
        </div>

        <section v-for="(image, index) of project.images" :alt="image.alt" :key="index" :style="{
          'aspect-ratio': image.aspectRatio,
          'background-image': `url(/img/${project.id}_showcase${index + 1}.png)`
        }">
        </section>
      </article>

      <div class="footnote" v-if="project.description">
        <IconElement :iconKey="`info`" :color="project.palette.default" />
        <p v-html="project.description"></p>
        <p class="date" v-if="project.date">{{ project.date }}</p>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/functions';
@use '@/assets/styles/mixins';

@mixin first-and-last-border-radius($radius) {
  &:first-of-type {
    border-top-left-radius: $radius;
    border-top-right-radius: $radius;
  }

  &:last-of-type {
    border-bottom-left-radius: $radius;
    border-bottom-right-radius: $radius;
  }
}

@mixin larger-tags {
  :deep(.tags) {
    gap: 0.5rem;

    .tag {
      font-size: 0.85rem;
      padding: 0.125rem 0.5rem;
    }
  }
}

.wrapper {
  @include mixins.position(absolute, 0, 0, 0, 0);

  .background {
    @include mixins.position(absolute, 0, 0, 0, 0);
    opacity: 0.95;
  }
}

main {
  @include mixins.position(absolute, 0, 0, 0, 0);
  @include mixins.safe-inset-padding(2rem, 2rem, 2rem, 2rem);
  overflow-y: auto;
  padding: 2rem;

  &>* {
    margin: 0 auto;
    max-width: functions.screen-width('l');
  }

  @include mixins.with-width('s') using ($s) {
    @media (width > $s) {
      @include larger-tags;
    }

    @media (width <=$s) {
      @include mixins.safe-inset-padding();

      .footnote {
        font-size: 0.75em;
      }
    }

  }
}

article {
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.25em;

  .header {
    display: flex;
    flex-flow: column wrap;
    gap: 0.75rem;
    padding: 0.5rem;
  }

  section {
    @include first-and-last-border-radius(0.75rem);
    background-size: cover;
    border-radius: 0.25rem;
    display: block;
    max-width: 100%;

    background-color: rgba(255, 255, 255, 0.5);
  }
}

.footnote {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem 1.5rem 1rem 1.5rem;
  pointer-events: none;

  * {
    margin: 0;
    text-align: center;
  }

  .icon {
    @include mixins.size(2rem);
  }

  .date {
    opacity: 0.5;
  }
}

.v-enter-active,
.v-leave-active {
  $duration: 0.35s;
  transition-duration: $duration;

  .background {
    transition: opacity calc($duration - 0.1s);
  }

  main {
    transition: all $duration cubic-bezier(0.19, 1, 0.22, 1);
  }
}

.v-enter-from,
.v-leave-to {

  .background,
  main {
    opacity: 0;
  }

  main {
    transform: translateY(5%) scale(0.95);
  }
}
</style>
