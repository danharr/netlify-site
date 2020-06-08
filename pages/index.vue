<template>
 <v-app id='inspire'>
  <v-layout column justify-center align-center>
    <div id='blog'>
      <v-card class='posts' v-for='x in posts' :key='x.link' >
        <div style='display:flex;'>
        <h2 class='postName'><a style='text-decoration: none;' :href='x.link'>{{x.title}}</a></h2>
        <v-spacer></v-spacer>
       
      <img :src='x.img' alt='avatar' style="height:70px;width: auto;padding:5px;">
    
        </div>
              
        <v-card-text>
          <div style="height:100px;">
          <p>{{x.summary}}</p>
          
        </div>
 
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outline color='primary' flat nuxt :to='x.link'>READ</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-layout>
 </v-app>
</template>




<script>
/* eslint-disable*/
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      posts:[     { 'title': 'Premier League Teams Points Per Game',
    'summary': 'A dataviz showing the history of points per game by season',
    'link': '/manager-points-per-game-premier-league-charts/',
    'img': '/football.png'
  },
        { 'title': 'Premier League Managers - Head to Head',
    'summary': 'A dataviz showing the history of managers competing against each other',
    'link': '/premier-league-manager-head-to-head-record/',
    'img': '/football.png'
  },
  { 'title': 'Charts tracking my weight',
    'summary': 'How has embracing a \'whole foods plant based\' diet changed my weight?',
    'link': '/tracking-personal-weight/',
    'img': '/scales.png'
  },
  { 'title': 'Alternative Premier League Table',
  'summary': 'Also known as Cann tables, these tables are a great way of seeing just how points are distributed across a league.',
  'link': '/alternative-league-tables/',
  'img': '/football.png'
},
{ 'title': 'Latest Fantasy Football Standings',
  'summary': 'A private league - standings visualised',
  'link': '/fantasy-football-standings/',
  'img': '/football.png'
},{ 'title': 'Build your own sensory board',
    'summary': 'How we saved money building our own sensory board (aka busy board)',
    'link': '/build-sensory-busy-board/',
    'img': '/sensory.png'
  }, { 'title': 'An example sleep schedule for 12 month old baby',
    'summary': 'A timeline showing an example sleep schedule for a 12 month old baby',
    'link': '/12-month-baby-sleep-schedule/',
    'img': '/baby.png'
  }, { 'title': 'Things to consider when creating a new website',
    'summary': 'There are many options to choose from when creating a new website or blog.  In this article I cover some options I\'ve used in the past',
    'link': '/creating-new-website-things-to-consider/',
    'img': '/website.png'
  }, { 'title': '2019/20 Football Season Predictions',
    'summary': 'My thoughts on the upcoming football season',
    'link': '/2020-football-predictions',
    'img': '/football.png'
  },
  { 'title': 'Nest Outdoor IQ Camera',
    'summary': '1 month after purchase I review the Nest Outdoor IQ camera, £329 from John Lewis',
    'link': '/nest-outdoor-iq-review',
    'img': '/camera.png'
  },
  { 'title': 'My career timeline',
    'summary': 'Where have I worked so far in my career.  We also look at how the timeline component in Vuetify works',
    'link': '/career-vuetify-timeline-cv',
    'img': '/career.png'
  },
  { 'title': 'Continuous Deployment',
    'summary': 'A little test of github webhooks',
    'link': '/continuous-deployment',
    'img': '/website.png'
  },
  { 'title': 'New blog',
    'summary': 'A short introduction to this new blog of mine',
    'link': '/first-post',
    'img': '/website.png'
  }
  ],
      dialog: false,
      page: 1,
      max: 20,
      id: '',
      name: '',
      desc: ''
    }
  },

  beforeMount () {
    axios
      .get('https://danharrington.netlify.com/posts.json')
      .then(response => {
        var x = response.data
        this.posts = x
      })
  }
}
</script>



<style>

.posts {

margin:15px;
width:360px;

}


#blog {


  display:flex;
  flex-wrap: wrap;
}

.postName {

margin:10px;

}


</style>
