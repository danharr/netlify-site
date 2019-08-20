<template>
  <v-layout>
    <v-flex >
      
      <h1>Publishing to my Nuxt powered site on Netlify from my phone</h1>
      <hr>
      <div class="post">
      <p>A quick test of webhooks to enable continuous deployment.  I made this post from my mobile phone (Android).  I didn't need to use my PC.  I haven't used the terminal in order to 'build' the website and therefore I haven't
        needed to commit the contents of any 'dist' or 'public' folder where websites often get built.
      </p>


      <p>
I was able to do this by hosting my site on <a href="https://www.netlify.com">Netlify</a>.  When I commit my source code to github a trigger is sent to Netlify's servers and they run the build command (npm run generate) that builds out my Nuxt powered blog.  Anything in the dist
folder is what you see on this site.  One side
effect to this new approach is that it seems like I'll need to create sitemaps dynamically.  I had intended to just drop a fresh sitemap every now and then onto the web server but this new approach wipes out any additional files I add to the dist folder of my Nuxt project.  
I therefore have used the Nuxt Sitemap plugin to help automate this process.

      </p>

      <p>My next challenge will be to see which options I have to blog on the move from my phone.  I'm often sat on a train for 2 hours each day so I could put this time to good use if I had an easy way to add to my site from my mobile.  'Old fashioned' blogs
        that work off wordpress make this easy for you as their CMS approach allows for mobile blogging with their offical app.  The only HTML android editors I've used so far haven't been easy to use so I'll have to continue researching this area.
      </p>
</div>
<OtherPosts/>

    </v-flex>
  </v-layout>
</template>

<script>
import OtherPosts from '~/components/OtherPosts'

export default {
  components: {
    OtherPosts
  },
  head () {
    return {
      title: 'How to automatically deploy a Nuxt powered website to Netlify',
      meta: [
        { hid: 'description', name: 'description', content: 'Deploying a static website powered by Nuxt to Netifly' }
      ]
    }
  }
}
</script>

<style>
hr {margin:20px;}


.post {margin-left:1pc;margin-right:1pc}


p {

font-size:18px;

}
</style>