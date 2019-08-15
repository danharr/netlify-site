<template>
  <v-layout>
    <v-flex >
      
      <h1>12 month old sleep schedule</h1>
      <hr>
      <div class="post">
      <p>Disclaimer: I'm not a doctor or a child care expert. All I am is a new Dad who had a cold who wouldn't sleep more than 2 hours a night in one go but who now sleeps from 8pm to 7am every night (nearly)</p>

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

    <p>

All children are different so don't expect to get the same results. The above just shares 1 schedule that works well for us


    </p>
</div>


    </v-flex>
  </v-layout>
</template>



<script>
export default {
  name: 'baby',
  data () {
    return {
      years: [
        {
          color: 'cyan',
          year: '7am',
          company: 'Wake up',
          site: 'http://data2decisions.com/',
          about: 'Daughter wakes at 7am normally. A bottle of warm milk starts the day and nappy gets changed. Pyjamas stay on until after breakfast'
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
