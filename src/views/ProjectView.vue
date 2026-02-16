<script setup lang="ts">
import { ContentRepo } from '@/services/ContentRepo';
import { AttributeTags } from '@/components';
import * as Color from '@/utils/color'
import router from '@/router';
import { onBeforeUnmount, onMounted } from 'vue';

const { id } = defineProps<{
  id: string,
}>()

const project = ContentRepo.instance.projects.find(p => p.id == id)

function close() {
  router.replace('/')
}

function handleClick(e: PointerEvent) {
  if ((e.target as HTMLElement)?.tagName.toLowerCase() == 'article') {
    close()
  }
}
function handleKeyDown(e: KeyboardEvent) {
  if (e.code === 'Escape') {
    close()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <main v-if="project" :key="project.id" @click="(e) => handleClick(e)">
    <div class="background" :style="{ 'background-color': Color.setOpacity(project.palette.darkest, 0.9) }">
    </div>
    <article>
      <section :style="{ 'background-color': project.palette.default }">
        <AttributeTags :tags="project.tags"></AttributeTags>
        <div>
          <div class="img" v-for="(image, index) of project.images" :alt="image.alt" :key="index" :style="{
            'aspect-ratio': image.size.w / image.size.h,
            'background-image': `url(/img/${project.id}_showcase_${index + 1}.png)`
          }">
          </div>
        </div>
      </section>
    </article>
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins';

@mixin first-and-last-border-radius($radius) {
  &:first-child {
    border-top-left-radius: $radius;
    border-top-right-radius: $radius;
  }

  &:last-child {
    border-bottom-left-radius: $radius;
    border-bottom-right-radius: $radius;
  }
}

.background {
  @include mixins.position(absolute, 0, 0, 0, 0);
  z-index: -10;
}

article {
  @include mixins.position(absolute, 0, 0, 0, 0);
  overflow: auto;
  padding: 2rem;
  z-index: 10;

  @include mixins.if-screen-width('s', 'max') {
    padding: 0rem;
  }
}

section {
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 auto;
  padding: 0.25em;
  pointer-events: all;
  position: relative;
  max-width: 1024px;

  .tags {
    $margin: 0.75rem;

    @include mixins.position(absolute, $margin, none, none, $margin);
  }

  .img {
    @include first-and-last-border-radius(1rem);
    background-size: cover;
    border-radius: 0.25rem;
    display: block;
    max-width: 100%;

    background-color: rgba(255 255 255 / 0.5);
  }

  @include mixins.if-screen-width('s', 'max') {
    border-radius: 0.5rem;

    .img {
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

  article {
    transition: all $duration cubic-bezier(0.19, 1, 0.22, 1);
  }
}

.v-enter-from,
.v-leave-to {

  .background,
  article {
    opacity: 0;
  }

  article {
    transform: translateY(5%) scale(0.95);
  }
}
</style>
