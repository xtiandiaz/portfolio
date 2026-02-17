<script setup lang="ts">
import { ContentRepo } from '@/services/ContentRepo';
import { ProjectItem, AttributeTag } from '@/components';

const repo = ContentRepo.instance
</script>

<template>
  <main>
    <article>
      <ProjectItem v-for="(project, index) of repo.items" :key="index" :project="project" />
    </article>

    <aside>
      <div id="signature" src="/public/img/shared/signature.png" alt="Cristian Díaz – personal signature"></div>
      <h1 id="heading">
        Creative and meticulous <strong class="role">Web & Game Developer</strong> + <strong class="role">UI & Graphic
          Designer</strong>
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
        © 2026 — Made with <a href="https://github.com/xtiandiaz/portfolio" target="_blank">Vue + SASS</a>
      </span>
    </aside>
  </main>
</template>

<style scoped lang="scss">
@use '@/assets/styles/functions';
@use '@/assets/styles/mixins';

main {
  @include mixins.safe-inset-padding(1rem, 1rem, 1rem, 1rem);
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 100%;
  overflow: auto;
}

article {
  $gap: 1rem;

  column-count: 4;
  column-gap: $gap;
  font-size: 0; // to prevent extra gap between sections
  max-width: functions.screen-width('xl');
  width: 100%;

  :deep(section) {
    margin-bottom: $gap;
  }

  @media (width <=functions.screen-width('l')) {
    column-count: 3;
  }

  @media (width <=functions.screen-width('m')) {
    column-count: 2;
  }

  @media (width <=functions.screen-width('s')) {
    column-count: 1;
  }
}

aside {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: functions.screen-width('m');
  position: relative;
  text-align: center;

  .role {
    white-space: nowrap;
  }

  .icon {
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
  }

  .languages {
    .tag {
      border-radius: 2em;
    }
  }
}

#links {
  line-height: 0;
}
</style>
