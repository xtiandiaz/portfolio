<script setup lang="ts">
const { projectKey, isPrimary } = defineProps<{
  projectKey: string
  isPrimary: boolean
}>()

const colorVar = `--color-${projectKey}-${isPrimary ? 'darker' : 'lighter'}`
</script>

<template>
  <span class="tag" :class="{ 'primary': isPrimary }"
    :style="{ 'background-color': `hsl(from var(${colorVar}) h s l / 50%)` }">
    <slot></slot>
  </span>
</template>

<style scoped lang="scss">
.tag {
  border-radius: 0.5rem;
  color: var(--color-body);
  display: inline-block;
  font-family: 'Inter Medium', sans-serif;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;

  &.primary {
    font-family: 'Inter SemiBold', sans-serif;
  }
}
</style>
