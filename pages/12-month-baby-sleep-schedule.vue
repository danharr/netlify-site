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
    head () {
    return {
      title: '12 month sleep schedule',
      meta: [
        { hid: 'description', name: 'description', content: 'An example 1 year sleep schedule' }
      ]
    }
  },
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
          company: 'Play time',
          site: 'https://www.mindshareworld.com/uk/',
          about: 'Play in the garden if weather permits it. Want to build up an appetite for breakfast at 9am'
        },
        {
          color: 'pink',
          year: '9am',
          company: 'Breakfast',
          site: 'https://havasmedia.com/',
          about: 'Baby is fully weaned so this consists of eggs, Portuguese tarts, fruit etc'
        },
        {
          color: 'red',
          year: '9:30-Noon',
          company: 'Play time',
          site: 'https://www.royalmail.com/',
          about: 'Go to a baby club or visit relatives. Avoid pushchair so baby doesn\'t take a cheeky early nap'
        },
        {
          color: 'blue',
          year: 'Noon',
          company: 'Sleep',
          site: 'https://www.royalmail.com/',
          about: 'Baby hopefully tired enough now to sleep for 2 hours in her cot'
        },
        {
          color: 'red',
          year: '2pm',
          company: 'Lunch',
          site: 'https://www.royalmail.com/',
          about: 'Hopefully nap lasts 2 hours. Lunch follows straight away then it\'s play time until bath time'
        },
        {
          color: 'blue',
          year: '2:30pm-5pm',
          company: 'Play time',
          site: 'https://www.royalmail.com/',
          about: 'Playtime. This might be a trip into town or a trip to the swings'
        },
        {
          color: 'purple',
          year: '5pm',
          company: 'Dinner',
          site: 'https://www.royalmail.com/',
          about: 'A good dinner should follow as a few hours have passed since lunch.  Dinner might be smaller if they\'ve snacked often since lunch'
        },
        {
          color: 'green',
          year: '6pm',
          company: 'Bath time',
          site: 'https://www.royalmail.com/',
          about: 'A 37 degree bath followed by dressing in pyjamas for bed. A story in a low lit room will help send signals that bedtime is near'
        },
        {
          color: 'orange',
          year: '7:30pm',
          company: 'Bed time',
          site: 'https://www.royalmail.com/',
          about: 'A warm bottle of milk (optional) as baby falls asleep in arms before being laid down in cot for the night'
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
