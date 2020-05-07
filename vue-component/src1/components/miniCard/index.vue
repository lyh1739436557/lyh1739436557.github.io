<template>
  <div class="g-mini-card">
    <div class="g-mini-card-title flex-row justify-between" v-if="$slots.title || title">
      <div class="">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="">
        <slot name="title-right"></slot>
      </div>
    </div>
    <div class="g-mini-card-body">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gMiniCard',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.g-mini-card {
  &-title {
    padding: 16px;
    line-height: 1em;
  }
  &-body {
    padding: 0 16px;
  }
}
</style>
