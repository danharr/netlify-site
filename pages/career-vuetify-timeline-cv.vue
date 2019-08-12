<template>
  <v-layout>
    <v-flex >
      
      <h1>Vuetify Timeline Component for CVs</h1>
      <hr>
      <div class="post">
      <p>Below I'm using vuetify's timeline component to show my career visually.  </p>

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
          <h2 :class="`headline font-weight-bold mb-4 ${year.color}--text`">{{year.company}}</h2>
          <div>
            {{year.about}}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
</div>


    </v-flex>
  </v-layout>
</template>



<script>
export default {
  name: 'cv',
  data () {
    return {
      years: [
        {
          color: 'cyan',
          year: '2006',
          company: 'Carat',
          about: 'Joined as a Data Planner.  Mainly worked on the Royal Mail & British Gas accounts.  Highlights included doing some market mix modelling (i.e. do newspaper adverts lead to more calls to the call centre)'
        },
        {
          color: 'green',
          year: '2008',
          company: 'Mindshare',
          about: 'Joined as an Analyst.  HElped automate all the digital reporting for teams working on clients such as Three & Ford'
        },
        {
          color: 'pink',
          year: '2009',
          company: 'Media Contacts',
          about: 'Later known as Havas Media.  Joined as a Data Analyst, left as Head of Data Visualisation.  I managed a team of 5 analysts'
        },
        {
          color: 'red',
          year: '2014',
          company: 'Royal Mail',
          about: 'Joined a new team of Data Scientists as a Data Visualisation Expert.  Using d3.js and/or Qlikview/Tableau I was making data more accesible'
        },
        {
          color: 'blue',
          year: '2015',
          company: 'PlayStation',
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