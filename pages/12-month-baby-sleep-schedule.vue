Schedule 

<template>
  <v-layout>
    <v-flex >
      
      <h1>12 month old sleep schedule</h1>
      <hr>
      <div class="post">
      <p>Disclaimer: I'm not a doctor or a child care expert. All I am is a new Dad who had a child who wouldn't sleep more than 2 hours a night in one go but who now sleeps from 8pm to 7am every night (nearly)</p>

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
          year: '7-9am',
          company: 'Playtime',
          site: 'https://www.mindshareworld.com/uk/',
          about: 'Play in the garden if weather permits it. Want to build up an appetite for breakfast at 9am'
        },
        {
          color: 'pink',
          year: '9am',
          company: 'Breakfast Contacts',
          site: 'https://havasmedia.com/',
          about: 'Baby is fully weaned so this consists of eggs, Portuguese tarts, fruit etc'
        },
        {
          color: 'red',
          year: '9:30-Noon',
          company: 'Playtime',
          site: 'https://www.royalmail.com/',
          about: 'Go to a baby club or visit relatives. Avoid pushchair so baby doesn/'t take a cheeky early nap'
        },
        {
          color: 'blue',
          year: 'Noon',
          company: 'Midday Nap',
          site: 'https://www.royalmail.com/',
          about: 'Baby hopefully tired enough now to sleep for 2 hours in her cot'
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
