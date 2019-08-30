<template>
  <v-layout>
    <v-flex >
      
      <h1>Fantasy Football Predictions</h1>
      <h2>Live standings</h2>
      <table>
  <tr>
    <!-- <th style="width:20px;"> </th>
    <th>Pos</th> -->
    <th>Name</th>
    <th>Fee</th>
    <th>Points</th>

  </tr>
  <tr v-for="x in standings" :key="x.Name">
    <!-- <td     style="text-align: center;"><img :src="x.crest" :alt="x.team" style="height:20px;margin:auto;"></td>
    <td>{{x.pos}}</td> -->
    <td>{{x.Name}}</td>
        <td>
    <v-chip
    class="ma-1"
      :color="x.Fee=='$35' ? 'blue' : 'purple'"
      label
      text-color="white"
      x-small
    >
      
      {{x.Fee}}
    </v-chip></td>
    <td>{{x.Points}}</td>
  </tr>
  </table>

      <div class="post">
      
     
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
     <h2>EPL Finishing Positions</h2>
          <v-radio-group row v-model="finishing" >
      <v-radio label="1st" value="1"></v-radio>
      <v-radio label="2nd" value="2"></v-radio>
      <v-radio label="3rd" value="3"></v-radio>
      <v-radio label="4th" value="4"></v-radio>
      <v-radio label="5th" value="5"></v-radio>
      <v-radio label="18th" value="18"></v-radio>
      <v-radio label="19th" value="19"></v-radio>
      <v-radio label="20th" value="20"></v-radio>


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
    <td>{{x.team.replace(' FC', '')}}</td>
    <td>
    <v-chip
    class="ma-1"
      :color="x.pos==finishing ? 'green' : 'red'" v-for="p in x.pred" :key="p"
      label
      text-color="white"
      x-small
    >
      
      {{p}}
    </v-chip></td>
  </tr>
  </table>
<hr>
<h2>Top Goalscorer</h2>

<table>
  <tr>
    <!-- <th style="width:20px;"> </th>
    <th>Pos</th> -->
    <th>Player</th>
    <th>Goals</th>
    <th>Predictions</th>
  </tr>
  <tr v-for="(x,i) in top_scorer.slice(0,10)" :key="x.player.name">
    <!-- <td     style="text-align: center;"><img :src="x.crest" :alt="x.team" style="height:20px;margin:auto;"></td>
    <td>{{x.pos}}</td> -->
    <td>{{x.player}}</td>
    <td>{{x.goals}}</td>
        <td>
    <v-chip
      class="ma-2"
      :color="i==0 ? 'green' : 'red'" v-for="p in x.pred" :key="p"
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
      standings: [],
      top_scorer: [{ 'player': { 'id': 24121, 'name': 'Teemu Pukki', 'firstName': 'Teemu', 'lastName': null, 'dateOfBirth': '1990-03-29', 'countryOfBirth': 'Finland', 'nationality': 'Finland', 'position': 'Attacker', 'shirtNumber': 22, 'lastUpdated': '2019-08-22T03:15:37Z' }, 'team': { 'id': 68, 'name': 'Norwich City FC' }, 'numberOfGoals': 4 }],
      finishing: '1',
      runners_up: [{ 'team': 'Sheffield United FC', 'pos': 8, 'crest': 'https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg' }],
      winners: [{ 'team': 'Sheffield United FC', 'pos': 8, 'crest': 'https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg' }],
      scorer: {
        'Harry Kane': ['Al Hapgood',
          'Alex Czopowyj',
          'Andy Emery ',
          'Andy Harrington ',
          'Brunel Woods',
          'Dan Harrington',
          'Jon Carolan',
          'Mark Millen',
          'Russ Coombes',
          'Steve Ambrose'],
        'Mohamed Salah': ['Chris Ambrose',
          'Keir Novesky',
          'Lauren Smith',
          'Matt Millen',
          'Paul Simmons',
          'Ping Chen'],
        'Pierre-Emerick Aubameyang': ['Dan Mahony',
          'Dave Groves',
          'Jason Dawkins',
          'Kieran Mackelden',
          'Sam Crowhurst',
          'Shayan Sichani'],
        'Raheem Sterling': ['Dylan Unger',
          'Samuel Dawkins'],
        'Sergio Aguero': ['Dennis Ong',
          'Joe Sutton',
          'Luke Randall',
          'Tony Smith',
          'Tyler Logiudice']
      },
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
      preds4: {
        'Arsenal FC': ['Al Hapgood',
          'Alex Czopowyj',
          'Andy Harrington ',
          'Dan Mahony',
          'Dylan Unger',
          'Jason Dawkins',
          'Jon Carolan',
          'Mark Millen',
          'Paul Simmons',
          'Russ Coombes',
          'Tyler Logiudice'],
        'Manchester United FC': ['Samuel Dawkins'],
        'Tottenham Hotspur FC': ['Andy Emery ',
          'Chris Ambrose',
          'Dan Harrington',
          'Dave Groves',
          'Joe Sutton',
          'Kieran Mackelden',
          'Shayan Sichani',
          'Tony Smith'],
        'Wolverhampton Wanderers FC': ['Sam Crowhurst'],
        'Chelsea FC': ['Brunel Woods',
          'Dennis Ong',
          'Keir Novesky',
          'Lauren Smith',
          'Luke Randall',
          'Matt Millen',
          'Ping Chen',
          'Steve Ambrose']
      },
      preds5: {
        'Arsenal FC': ['Dennis Ong',
          'Joe Sutton',
          'Keir Novesky',
          'Luke Randall',
          'Sam Crowhurst',
          'Samuel Dawkins'],
        'Chelsea FC': ['Alex Czopowyj',
          'Andy Harrington ',
          'Chris Ambrose',
          'Dan Harrington',
          'Dylan Unger',
          'Jon Carolan',
          'Mark Millen',
          'Paul Simmons',
          'Shayan Sichani',
          'Tony Smith'],
        'Leicester City FC': ['Al Hapgood',
          'Dave Groves'],
        'Manchester United FC': ['Andy Emery ',
          'Brunel Woods',
          'Dan Mahony',
          'Kieran Mackelden',
          'Lauren Smith',
          'Matt Millen',
          'Ping Chen',
          'Russ Coombes',
          'Tyler Logiudice'],
        'Tottenham Hotspur FC': ['Steve Ambrose'],
        'Southampton FC': ['Jason Dawkins']
      },
      preds18: {
        'Aston Villa FC': ['Alex Czopowyj',
          'Matt Millen'],
        'Brighton & Hove Albion FC': ['Andy Harrington ',
          'Dan Mahony',
          'Joe Sutton',
          'Keir Novesky',
          'Kieran Mackelden',
          'Russ Coombes',
          'Samuel Dawkins',
          'Tyler Logiudice'],
        'Burnley FC': ['Andy Emery ',
          'Lauren Smith',
          'Mark Millen'],
        'Crystal Palace FC': ['Dave Groves'],
        'Newcastle United FC': ['Al Hapgood',
          'Brunel Woods',
          'Dennis Ong',
          'Jon Carolan',
          'Luke Randall',
          'Shayan Sichani'],
        'Norwich City FC': ['Chris Ambrose',
          'Dylan Unger',
          'Jason Dawkins',
          'Ping Chen',
          'Sam Crowhurst'],
        'Sheffield United FC': ['Dan Harrington',
          'Paul Simmons',
          'Steve Ambrose'],
        'Southampton FC': ['Tony Smith']
      },
      preds19: {
        'Aston Villa FC': ['Dan Mahony',
          'Ping Chen'],
        'Brighton & Hove Albion FC': ['Dennis Ong',
          'Dylan Unger',
          'Mark Millen',
          'Matt Millen',
          'Shayan Sichani',
          'Steve Ambrose'],
        'Burnley FC': ['Chris Ambrose',
          'Dan Harrington',
          'Jason Dawkins',
          'Sam Crowhurst'],
        'Norwich City FC': ['Andy Emery ',
          'Andy Harrington ',
          'Joe Sutton',
          'Kieran Mackelden',
          'Paul Simmons',
          'Tony Smith'],
        'Sheffield United FC': ['Al Hapgood',
          'Alex Czopowyj',
          'Brunel Woods',
          'Dave Groves',
          'Jon Carolan',
          'Keir Novesky',
          'Lauren Smith',
          'Luke Randall',
          'Russ Coombes',
          'Samuel Dawkins',
          'Tyler Logiudice']
      },
      preds20: {
        'Aston Villa FC': ['Brunel Woods',
          'Jason Dawkins'],
        'Brighton & Hove Albion FC': ['Al Hapgood',
          'Dan Harrington'],
        'Burnley FC': ['Paul Simmons'],
        'Newcastle United FC': ['Alex Czopowyj',
          'Jon Carolan',
          'Lauren Smith'],
        'Norwich City FC': ['Dave Groves',
          'Keir Novesky',
          'Luke Randall',
          'Russ Coombes',
          'Samuel Dawkins',
          'Steve Ambrose',
          'Tyler Logiudice'],
        'Sheffield United FC': ['Andy Emery ',
          'Andy Harrington ',
          'Chris Ambrose',
          'Dan Mahony',
          'Dennis Ong',
          'Dylan Unger',
          'Joe Sutton',
          'Kieran Mackelden',
          'Mark Millen',
          'Matt Millen',
          'Ping Chen',
          'Sam Crowhurst',
          'Shayan Sichani',
          'Tony Smith']
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
        var t4 = this.preds4
        var t5 = this.preds5
        var t18 = this.preds18
        var t19 = this.preds19
        var t20 = this.preds20
        var y = []
        var y2 = []
        var y3 = []
        var y4 = []
        var y5 = []
        var y18 = []
        var y19 = []
        var y20 = []
        var x = response.data.standings[0].table
        x.forEach(function (d) { y.push({ team: d.team.name, pos: d.position, crest: d.team.crestUrl, pred: t[d.team.name] }) })
        x.forEach(function (d) { y2.push({ team: d.team.name, pos: d.position, crest: d.team.crestUrl, pred: t2[d.team.name] }) })
        x.forEach(function (d) { y3.push({ team: d.team.name, pos: d.position, crest: d.team.crestUrl, pred: t3[d.team.name] }) })
        x.forEach(function (d) { y4.push({ team: d.team.name, pos: d.position, crest: d.team.crestUrl, pred: t4[d.team.name] }) })
        x.forEach(function (d) { y5.push({ team: d.team.name, pos: d.position, crest: d.team.crestUrl, pred: t5[d.team.name] }) })
        x.forEach(function (d) { y18.push({ team: d.team.name, pos: d.position, crest: d.team.crestUrl, pred: t18[d.team.name] }) })
        x.forEach(function (d) { y19.push({ team: d.team.name, pos: d.position, crest: d.team.crestUrl, pred: t19[d.team.name] }) })
        x.forEach(function (d) { y20.push({ team: d.team.name, pos: d.position, crest: d.team.crestUrl, pred: t20[d.team.name] }) })
        this.winners = y
        this.runners_up = y2
        this.third = y3
        this.fourth = y4
        this.fifth = y5
        this.r18 = y18
        this.r19 = y19
        this.r20 = y20
      })

    axios
      .get('https://api.football-data.org/v2/competitions/PL/scorers', { headers: { 'X-Auth-Token': '1a69e76a83a148e8bf152ab165cf44f6' } })
      .then(response => {
        var y = []
        var t = this.scorer
        response.data.scorers.forEach(function (d) { y.push({ player: d.player.name, goals: d.numberOfGoals, pred: t[d.player.name] }) })
        this.top_scorer = y
      })

    axios
      .get('standings.json')
      .then(response => {
        this.standings = response.data
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
      } else if (this.finishing === '4') {
        return this.fourth
      } else if (this.finishing === '5') {
        return this.fifth
      } else if (this.finishing === '18') {
        return this.r18
      } else if (this.finishing === '19') {
        return this.r19
      } else if (this.finishing === '20') {
        return this.r20
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
  font-size: 12px;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 3px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
