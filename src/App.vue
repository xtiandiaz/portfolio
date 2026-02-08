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

<style lang="scss" scoped></style>
