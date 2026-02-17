<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import { ContentRepo } from '@/services/ContentRepo';
import { AttributeTags } from '@/components';
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
    <div class="background" :style="{ 'background-color': Color.setOpacity(project.palette.darkest, 0.9) }">
    </div>

    <main>
      <article :style="{ 'background-color': project.palette.default }">
        <AttributeTags :tags="project.tags"></AttributeTags>

        <section v-for="(image, index) of project.images" :alt="image.alt" :key="index" :style="{
          'aspect-ratio': image.aspectRatio,
          'background-image': `url(/img/${project.id}_showcase${index + 1}.png)`
        }">
        </section>
      </article>
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

.wrapper {
  @include mixins.position(absolute, 0, 0, 0, 0);

  .background {
    @include mixins.position(absolute, 0, 0, 0, 0);
  }
}

main {
  @include mixins.position(absolute, 0, 0, 0, 0);
  @include mixins.safe-inset-padding(2rem, 2rem, 2rem, 2rem);
  overflow-y: auto;
  padding: 2rem;

  @media (width <=functions.screen-width('s')) {
    @include mixins.safe-inset-padding();
  }
}

article {
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0 auto;
  max-width: functions.screen-width('l');
  padding: 0.25em;
  pointer-events: all;
  position: relative;

  .tags {
    $margin: 0.75rem;

    @include mixins.position(absolute, $margin, none, none, $margin);
  }

  section {
    @include first-and-last-border-radius(0.75rem);
    background-size: cover;
    border-radius: 0.25rem;
    display: block;
    max-width: 100%;

    background-color: rgba(255 255 255 / 0.5);
  }

  @media (width <=functions.screen-width('s')) {
    border-radius: 0.5rem;

    section {
      @include first-and-last-border-radius(0.25rem);
    }
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
