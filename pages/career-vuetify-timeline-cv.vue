<template>
  <v-layout>
    <v-flex >
      
      <h1>Vuetify Timeline Component for CVs</h1>
      <hr>
      <div class="post">
      <p>Below I'm using <a href="https://vuetifyjs.com/en/components/timelines">vuetify's timeline component</a>  to show my career visually.</p>

      <v-timeline >
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-light ${year.color}--text`"
            v-text="year.year"
          ></span>
        </template>
        <div class="py-4">
          <a :href="year.site" style="text-decoration:none;"><h2 :class="`headline font-weight-bold mb-4 ${year.color}--text`">{{year.company}}</h2></a>
          <div>
            {{year.about}}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>

    <p>

With just a few lines of code I am able to show my career path in a more visually pleasing way compared to the old fashioned bullet point approach often seen in CVs.  
I am also able to modify the template I stole from the Vuetify example and have the company name link to their website.  The other options I have to edit the look and feel of the timeline include a dark theme, 
changing dot size, including icons on the dots and much more.  Recruitment agenst love standardised CVs they can share via PDF but I expect to see more and more interactive CVs in the near future as they are a great way to showcase technical ability and they tell a better story.


    </p>
</div>
<OtherPosts/>

    </v-flex>
  </v-layout>
</template>



<script>
import OtherPosts from '~/components/OtherPosts'

export default {
  name: 'cv',
  components: {
    OtherPosts
  },
  data () {
    return {
      years: [
        {
          color: 'cyan',
          year: '2006',
          company: 'Carat',
          site: 'http://data2decisions.com/',
          about: 'Joined as a Data Planner.  Mainly worked on the Royal Mail & British Gas accounts.  Highlights included doing some market mix modelling (i.e. do newspaper adverts lead to more calls to the call centre)'
        },
        {
          color: 'green',
          year: '2008',
          company: 'Mindshare',
          site: 'https://www.mindshareworld.com/uk/',
          about: 'Joined as an Analyst.  HElped automate all the digital reporting for teams working on clients such as Three & Ford'
        },
        {
          color: 'pink',
          year: '2009',
          company: 'Media Contacts',
          site: 'https://havasmedia.com/',
          about: 'Later known as Havas Media.  Joined as a Data Analyst, left as Head of Data Visualisation.  I managed a team of 5 analysts'
        },
        {
          color: 'red',
          year: '2014',
          company: 'Royal Mail',
          site: 'https://www.royalmail.com/',
          about: 'Joined a new team of Data Scientists as a Data Visualisation Expert.  Using d3.js and/or Qlikview/Tableau I was making data more accesible'
        },
        {
          color: 'blue',
          year: '2015',
          company: 'PlayStation',
          site: 'https://www.royalmail.com/',
          about: 'Currrently working as Senior Software Engineer.  I use MicroStrategy, Tableau, node.js and many other tools'
        }
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