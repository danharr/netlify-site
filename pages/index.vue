<template>
 <v-app id="inspire">
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
    
      <v-card class="posts" v-for="x in posts" :key="x.link" >
        <div style="display:flex;">
        <v-card-title style="color:#1976d2 ;" class="headline">{{x.title}}</v-card-title>
        <v-spacer></v-spacer>
        <v-avatar style="margin:20px"> 
      <img :src="x.img" alt="avatar">
    </v-avatar>
        </div>
              
        <v-card-text>
          <p>{{x.summary}}</p>
          
        
 
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outline color="primary" flat nuxt :to="x.link">READ</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
 </v-app>
</template>




<script>
export default {
  name: 'home',
  data () {
    return {
      posts: [{ title: 'Nest Outdoor IQ Camera',
        summary: '1 month after purchase I review the Nest Outdoor IQ camera, £329 from John Lewis',
        link: '/nest-outdoor-iq-review',
        img: '/nest outdoor iq.png'
      },
      { title: 'PS4 Dreams Early Access Review ',
        summary: 'Dreams has been available on the PS4 for a few months now in the form of an Early Access release.  This post looks at the best creations in Dreams and the best creators to follow',
        link: '/dreams-ps4-early-access',
        img: '/dreams.jpg'
      },
      { title: 'My career timeline',
        summary: 'Where have I worked so far in my career.  We also look at how the timeline component in Vuetify works',
        link: '/career-vuetify-timeline-cv',
        img: '/v.png'
      },
      { title: 'First Post',
        summary: 'A quick summary explaining why I\'ve made this blog.  I\'ll explain my motivations as well as the technologies I\'m using to host & create the website',
        link: '/first-post',
        img: '/v.png'
      }
      ],
      dialog: false,
      page: 1,
      max: 20,
      id: '',
      name: '',
      desc: ''
    }
  }
}
</script>



<style>

.posts {

margin:15px;


}

</style>