<template>
  <v-layout>
    <v-flex >
      
      <h1>Fantasy Football Predictions</h1>
      <hr>
      <div class="post">
      
      <h2>EPL Finishing Positions</h2>
          <v-chip
      class="ma-2"
      color="green"
      label
      text-color="white"
    >
      
      Correct
    </v-chip>
     <v-chip
      class="ma-2"
      color="red"
      label
      text-color="white"
    >
      
      Wrong
    </v-chip>
          <v-radio-group row v-model="finishing" >
      <v-radio label="Winners" value="1"></v-radio>
      <v-radio label="Second Place" value="2"></v-radio>
      <v-radio label="Third Place" value="3"></v-radio>
      <v-radio label="Fourth Place" value="4"></v-radio>
      <v-radio label="Fifth Place" value="5"></v-radio>
    </v-radio-group>
<table>
  <tr>
    <!-- <th style="width:20px;"> </th>
    <th>Pos</th> -->
    <th>Team</th>
    <th>Predictions</th>
  </tr>
  <tr v-for="x in epl.slice(0,60)" :key="x.team">
    <!-- <td     style="text-align: center;"><img :src="x.crest" :alt="x.team" style="height:20px;margin:auto;"></td>
    <td>{{x.pos}}</td> -->
    <td>{{x.team}}</td>
    <td>
    <v-chip
      class="ma-2"
      :color="x.pos==finishing ? 'green' : 'red'" v-for="p in x.pred" :key="p"
      label
      text-color="white"
    >
      
      {{p}}
    </v-chip></td>
  </tr>
  </table>

</div>


    </v-flex>
  </v-layout>
</template>


<script>
import axios from 'axios'

export default {
  head () {
    return {
      title: 'Current Fantasy Football Standings - Private League',
      meta: [
        { hid: 'description', name: 'description', content: 'Matt\'s private league visualised' }
      ]
    }
  },
  data () {
    return {
      finishing: '1',
      runners_up: [{ 'team': 'Sheffield United FC', 'pos': 8, 'crest': 'https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg' }],
      winners: [{ 'team': 'Sheffield United FC', 'pos': 8, 'crest': 'https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg' }],
      preds: {
        'Manchester City FC': ['Al Hapgood',
          'Joe Sutton',
          'Jason Dawkins',
          'Kieran Mackelden',
          'Dan Harrington',
          'Luke Randall',
          'Dave Groves',
          'Jon Carolan',
          'Dennis Ong',
          'Andy Harrington ',
          'Tony Smith',
          'Steve Ambrose',
          'Chris Ambrose',
          'Dan Mahony',
          'Tyler Logiudice',
          'Samuel Dawkins',
          'Matt Millen',
          'Shayan Sichani',
          'Russ Coombes',
          'Alex Czopowyj',
          'Lauren Smith',
          'Sam Crowhurst',
          'Andy Emery '],
        'Liverpool FC': ['Keir Novesky',
          'Ping Chen',
          'Paul Simmons',
          'Dylan Unger',
          'Brunel Woods',
          'Mark Millen']
      },
      preds2: {
        'Manchester City FC': ['Brunel Woods',
          'Dylan Unger',
          'Keir Novesky',
          'Mark Millen',
          'Paul Simmons',
          'Ping Chen'],
        'Liverpool FC': ['Al Hapgood',
          'Alex Czopowyj',
          'Andy Emery ',
          'Andy Harrington ',
          'Chris Ambrose',
          'Dan Harrington',
          'Dan Mahony',
          'Dave Groves',
          'Dennis Ong',
          'Jason Dawkins',
          'Joe Sutton',
          'Jon Carolan',
          'Kieran Mackelden',
          'Lauren Smith',
          'Matt Millen',
          'Russ Coombes',
          'Sam Crowhurst',
          'Samuel Dawkins',
          'Shayan Sichani',
          'Tony Smith',
          'Tyler Logiudice'],
        'Manchester United FC': ['Steve Ambrose'],
        'Tottenham Hotspur FC': ['Luke Randall']
      },
      preds3: {
        'Liverpool FC': ['Luke Randall',
          'Steve Ambrose'],
        'Manchester United FC': ['Chris Ambrose',
          'Joe Sutton',
          'Keir Novesky'],
        'Tottenham Hotspur FC': ['Al Hapgood',
          'Alex Czopowyj',
          'Andy Harrington ',
          'Brunel Woods',
          'Dan Mahony',
          'Dennis Ong',
          'Dylan Unger',
          'Jon Carolan',
          'Lauren Smith',
          'Mark Millen',
          'Matt Millen',
          'Paul Simmons',
          'Ping Chen',
          'Russ Coombes',
          'Sam Crowhurst'],
        'Arsenal FC': ['Chris Ambrose',
          'Joe Sutton',
          'Keir Novesky'],
        'Chelsea FC': ['Jason Dawkins',
          'Samuel Dawkins',
          'Tyler Logiudice']
      },
      headers: [
        { text: ' ', value: 'crest' },
        { text: 'Team', value: 'team' },
        { text: 'Position', value: 'pos' }
      ]
    }
  },

  beforeCreate () {
    axios
      .get('https://api.football-data.org/v2/competitions/PL/standings', { headers: { 'X-Auth-Token': '1a69e76a83a148e8bf152ab165cf44f6' } })
      .then(response => {
        var t = this.preds
        var t2 = this.preds2
        var t3 = this.preds3
        var y = []
        var y2 = []
        var y3 = []
        var x = response.data.standings[0].table
        x.forEach(function (d) { y.push({ team: d.team.name, pos: d.position, crest: d.team.crestUrl, pred: t[d.team.name] }) })
        x.forEach(function (d) { y2.push({ team: d.team.name, pos: d.position, crest: d.team.crestUrl, pred: t2[d.team.name] }) })
        x.forEach(function (d) { y3.push({ team: d.team.name, pos: d.position, crest: d.team.crestUrl, pred: t3[d.team.name] }) })
        console.log('y')
        console.log(y)
        // console.log(x)
        this.winners = y
        this.runners_up = y2
        this.third = y3
      })
  },
  computed: {
    epl: function () {
      if (this.finishing === '1') {
        return this.winners
      } else if (this.finishing === '2') {
        return this.runners_up
      } else if (this.finishing === '3') {
        return this.third
      } else {
        return this.winners
      }
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


table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
