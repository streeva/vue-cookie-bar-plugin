<template>
  <div id="app">
    <HelloWorld msg="Vue Cookie Bar Plugin" />
    <CookieBar>
      <template v-slot:title>🍪 Can we use optional cookies?</template>
      <template v-slot:text>
        These cookies help us keep our website safe and give you a better
        experience. We won’t turn them on unless you accept. Want to know more
        or adjust your preferences? Here's our
        <a href="https://www.example.co.uk/legal/cookies/">cookie policy</a>
      </template>
    </CookieBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
