<template>
  <v-layout>
    <script src="https://d3js.org/d3-array.v2.min.js"></script>
    <v-flex >
      
      <h1>ALternative League Tables</h1>
     


      <div class="post">
      
     
      <p>content goes here</p>
      <div v-for="x in PL" ><p>{{x.points}}</p> <p v-for="t in x.teams">{{t}}</p> </div>
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
