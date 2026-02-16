<script setup lang="ts">
import { ContentRepo } from '@/services/ContentRepo';
import { ProjectItemLinked, AttributeTag } from '@/components';

const repo = ContentRepo.instance
</script>

<template>
  <main>
    <article>
      <div class="project-items">
        <ProjectItemLinked v-for="(project, index) of repo.items" :key="index" :project="project" />
      </div>
    </article>
    <footer>
      <div id="signature" src="/public/img/shared/signature.png" alt="Cristian Díaz – personal signature"></div>
      <h1 id="heading">
        Creative and meticulous <strong>Web & Game Developer</strong> + <strong>UI & Graphic Designer</strong>
      </h1>
      <div id="skills">
        <div class="languages">
          <AttributeTag v-for="(tag, index) of repo.skills.languages" :key="index" :tag="tag" />
        </div>
        <div>
          <AttributeTag v-for="(tag, index) of repo.skills.techs" :key="index" :tag="tag" />
        </div>
      </div>
      <div id="links">
        <a class="icon github" href="https://github.com/xtiandiaz" target="_blank"></a>
      </div>
      <span class="caption">
        Made with <a href="https://github.com/xtiandiaz/portfolio" target="_blank">Vue + SASS</a>
      </span>
    </footer>
  </main>

  <div id="spotlight"></div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/functions';
@use '@/assets/styles/mixins';

main {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  overflow: auto;
  padding: 2rem 1rem 1rem 1rem;
}

.project-items {
  $gap: 1rem;

  column-gap: $gap;
  columns: 4;
  font-size: 0;
  max-width: functions.screen-width('xl');

  a {
    display: block;
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

footer {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 1rem;
  max-width: functions.screen-width('m');
  position: relative;
  text-align: center;

  a.icon {
    @include mixins.size(48px, 48px);
    display: inline-block;

    &.github {
      background-image: url('/public/img/shared/icons/github.png');
      background-size: cover;
    }
  }

  .caption {
    opacity: 0.75;
  }
}

#signature {
  aspect-ratio: 136 / 43;
  background-image: url('/public/img/shared/signature.png');
  background-size: cover;
  max-width: 320px;
  width: 90%;
}

#heading {
  @include mixins.font('light');
}

#skills {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  >div {
    display: flex;
    flex-flow: row wrap;
    gap: 0.375rem;
    justify-content: center;

    &.languages {
      .tag {
        border-radius: 2em;
      }
    }
  }
}

#links {
  line-height: 0;
}

#spotlight {
  @include mixins.position(fixed, none, none, 0, 50%);
  background-image: url('/public/img/shared/background_spotlight.png');
  height: 512px;
  width: 1280px;
  transform: translateX(-50%);
  z-index: -100;
}
</style>
