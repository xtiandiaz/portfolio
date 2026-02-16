<script setup lang="ts"></script>

<template>
  <RouterView name="default" v-slot="{ Component }">
    <component :is="Component" />

    <RouterView name="modal" v-slot="{ Component }">
      <Transition>
        <component :is="Component" />
      </Transition>
    </RouterView>

  </RouterView>

  <div id="spotlight"></div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins';

#spotlight {
  @include mixins.position(fixed, none, none, 0, 50%);
  background-image: url('/public/img/shared/background_spotlight.png');
  height: 512px;
  width: 1280px;
  transform: translateX(-50%);
  z-index: -100;
}
</style>
