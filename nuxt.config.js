
const routes = [
  {
    url: '/',
    changefreq: 'daily',
    priority: 1,
    lastmodISO: '2019-08-11T13:30:00.000Z'
  },
  {
    url: '/about/',
    changefreq: 'weekly',
    priority: 0.8,
    lastmodISO: '2019-08-11T13:30:00.000Z'
  },
  {
    url: '/nest-outdoor-iq-review//',
    changefreq: 'weekly',
    priority: 0.8,
    lastmodISO: '2019-08-11T13:30:00.000Z'
  }
]




module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Dan Harrington Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: ['~/assets/style/app.styl'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
,
generate: {
  routes: routes
},
  modules: [
    // Simple usage
    ['@nuxtjs/google-analytics', {
      id: 'UA-82193514-1'
    }],
    ['@nuxtjs/sitemap', {
      path: '/sitemap.xml',
      generate: true,
      routes: routes
    }]
 ]
}
