<template>
  <v-layout>
    <script src="https://d3js.org/d3-array.v2.min.js"></script>
    <v-flex >
      
      <h1>Alternative League Tables</h1>
     


      <div class="post">
      
     
      <p>The alternative league tables shown below (also known as <a href="https://canntables.com/">Cann Tables</a>, more see <a href="http://www.sportsvisualized.com/">here</a>) are a great way of showing the gaps 
      between teams in the league table.  Perhaps your team are in 6th place but they're 20 points off 5th place!  They're named after Jenny Cann and are often seen on social media, such as on Reddit's r/soccer subreddit.</p>
      <p>The table below gets the latest league standings from the football API <a href="football-data.org">football-data.org</a>.  I use d3 to find the maximum and minimum number of points at the moment in the league.  This helps me make an array which can make the table below.  We have a row for every point position from top to bottom.  In each row I add a chip for each team name.</p>
      


      <table>
  <tr>
    <th>Points</th>
    <th>Teams</th>
  </tr>
  <tr v-for="(x,i) in PL" :key="i">
    <td>{{x.points}}</td>
    <td>  <v-chip
      class="ma-2"
      color="red"
      v-for="p in x.teams" :key="p"
      label
      text-color="white"
    >
      
      {{p}}
    </v-chip></td>
  </tr>
  </table>
      

      
      
      </div>
</div>


    </v-flex>
  </v-layout>
</template>


<script>
/* eslint-disable*/

import axios from 'axios'

export default {
  head () {
    return {
      title: 'Alternative League Tables',
      meta: [
        { hid: 'description', name: 'description', content: 'Another way to visualise league tables' }
      ]
    }
  },
  data () {
    return {
     PL:null
    }
  },

  beforeCreate () {
    axios
      .get('https://api.football-data.org/v2/competitions/PL/standings', { headers: { 'X-Auth-Token': '1a69e76a83a148e8bf152ab165cf44f6' } })
      .then(response => {

 var t = response.data.standings[0].table;

var z = {};

var max = d3.max(t, function(d) { return +d.points;} );
var min = d3.min(t, function(d) { return +d.points;} );
var i;
for (i = min; i <= max; i++) { 
  z[i]=[];
};

t.forEach(function(d){z[d.points].push(d.team.name) });
var prem = [];
Object.keys(z).forEach(function(key,index) {
    prem.push({teams:z[key],points:key});
});

this.PL = prem.reverse();
  
      })



  },
  computed: {
    epl: function () {
      return 10
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
