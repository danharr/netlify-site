<template>
  <v-app >
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Home', to: '/' },
          { icon: 'bubble_chart', title: 'About Me', to: '/about' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Dan Harrington\'s Blog'
      }
    }
  }
</script>
