<template>
 <v-app id="inspire">
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
    
      <v-card class="posts" v-for="x in posts" :key="x.link" >
        <div style="display:flex;">
        <v-card-title style="color:#1976d2 ;" class="headline"><a style="text-decoration: none;" :href="x.link">{{x.title}}</a></v-card-title>
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
      posts: [{ title: 'Things to consider when creating a new website',
        summary: 'There are many options to choose from when creating a new website or blog.  In this article I cover some options I\'ve used in the past',
        link: '/creating-new-website-things-to-consider',
        img: '/v.png'
      },{ title: '2019/20 Football Season Predictions',
        summary: 'My thoughts on the upcoming football season',
        link: '/2020-football-predictions',
        img: '/v.png'
      },
      { title: 'Nest Outdoor IQ Camera',
        summary: '1 month after purchase I review the Nest Outdoor IQ camera, £329 from John Lewis',
        link: '/nest-outdoor-iq-review',
        img: '/nest outdoor iq.png'
      },
      { title: 'My career timeline',
        summary: 'Where have I worked so far in my career.  We also look at how the timeline component in Vuetify works',
        link: '/career-vuetify-timeline-cv',
        img: '/v.png'
      },
      { title: 'Continuous Deployment',
        summary: 'A little test of github webhooks',
        link: '/continuous-deployment',
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
