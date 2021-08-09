<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <hr />
      <h2>Cookie preferences</h2>
      <div id="cookie-preferences"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
}
</script>

<style scoped lang="scss">
.container {
  max-width: 500px;
  margin: auto;
  text-align: left;
}
</style>
