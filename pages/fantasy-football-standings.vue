<template>
  <v-layout>
    <v-flex >
      
      <h1>Fantasy Football Predictions</h1>
      <hr>
      <div class="post">
      
      <h2>EPL Finishing Positions</h2>
<table>
  <tr>
    <!-- <th style="width:20px;"> </th>
    <th>Pos</th> -->
    <th>Team</th>
    <th>Winners</th>
  </tr>
  <tr v-for="x in msg.slice(0,6)" :key="x.team">
    <!-- <td     style="text-align: center;"><img :src="x.crest" :alt="x.team" style="height:20px;margin:auto;"></td>
    <td>{{x.pos}}</td> -->
    <td>{{x.team}}</td>
    <td>
    <v-chip
      class="ma-2"
      :color="x.pos==1 ? 'green' : 'red'" v-for="p in x.pred" :key="p"
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
      msg: [{ 'team': 'Sheffield United FC', 'pos': 8, 'crest': 'https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg' }],
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
      headers: [
        { text: ' ', value: 'crest' },
        { text: 'Team', value: 'team' },
        { text: 'Position', value: 'pos' }
      ]
    }
  },

  mounted () {
    axios
      .get('https://api.football-data.org/v2/competitions/PL/standings', { headers: { 'X-Auth-Token': '1a69e76a83a148e8bf152ab165cf44f6' } })
      .then(response => {
        var t = this.preds
        var y = []
        var x = response.data.standings[0].table
        x.forEach(function (d) { y.push({ team: d.team.name, pos: d.position, crest: d.team.crestUrl, pred: t[d.team.name] }) })
        console.log('y')
        console.log(y)
        // console.log(x)
        this.msg = y
      })
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
