<template>
  <v-layout>
    <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans+SC&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.12.0/d3.min.js" integrity="sha256-+9Mf3cAVmxxudDsr1XwXUeRZFtvdWVYdq5/vcgiYyNU=" crossorigin="anonymous"></script>
    <v-flex >
      
      <h1>h2h</h1>



      <div class="post">

<p>There have been {{manager_list.length}} managers in total.</p>


   <v-select
            :items="manager_list"
            label="Home Manager"
            v-model="home_manager"
          ></v-select>
    
  
      
          <v-select
            :items="manager_list"
            label="Away Manager"
            v-model="away_manager"
          ></v-select>

    

  <p>{{home_manager}} vs {{away_manager}} has occured {{matches.length}} times</p>


      <div style="display:flex;justify-content:space-around;margin-bottom:20px;" >

<span class="vs">{{home_manager}}</span>
<span class="vs2">{{win1}}-{{draw}}-{{win2}}</span>
<span class="vs">{{away_manager}}</span>


</div>


  <div  v-for="(s,i) in matches" :key="i">

<div class="stadium" style="display:flex;justify-content:space-around" >
  {{s.g}}
  </div>
  <div class="stadium" style="display:flex;justify-content:space-around" >
  {{s.dt}}
  </div>


  <div style="display:flex;justify-content:space-around" >


  <p class="teams">{{s.ht}}</p><h2>{{s.hg}}-{{s.ag}}</h2> <p class="teams">{{s.at}}</p>



  </div>


<hr style="margin:2px;border: 0.5px solid grey;">


  </div>


  </div>
      
      
   


    <OtherPosts/>
    </v-flex>

  </v-layout>
</template>


<script>
/* eslint-disable*/

import OtherPosts from '~/components/OtherPosts'

import axios from 'axios'

export default {
    components: {
    OtherPosts
  },
  head () {
    return {
      title: 'h2h',
      meta: [
        { hid: 'description', name: 'description', content: 'h2h' }
      ]
    }
  },
  data () {
    return {
     home_manager:'Jürgen Klopp',
     away_manager:'Pep Guardiola',
     stats:[]
    }
  }


,


mounted() {

      axios
      .get('/head2head.json')
      //.get('https://danharrington.netlify.com/weight.json')
      .then(response => {
        var x = response.data





        this.stats = x






   })

}

,

methods:{


doSomething:function(){


console.log(1)

}


},

computed:{

manager_list:function(){

if(typeof d3 !== 'undefined') {var t1 = d3.map(this.stats, function(d){return d.hm;}).keys()
var t2 = d3.map(this.stats, function(d){return d.am;}).keys()

var y = t1.concat(t2)

return d3.map(y, function(d){return d;}).keys().sort()}

else {
return 1


}



},


matches:function(){


  if(typeof d3 !== 'undefined') {
var c = [];

var parseTime = d3.timeParse("%d-%b-%Y");


var c = this.stats.filter(d => `${d.hm}${d.am}` === `${this.home_manager}${this.away_manager}`  || `${d.am}${d.hm}` === `${this.home_manager}${this.away_manager}`)

return c.sort(function(x, y){
   return d3.descending(parseTime(x.dt), parseTime(y.dt));
})}


 else {

return [{
      "dt": "23-Nov-2019",
      "s": "2019/20",
      "g": "Vitality Stadium",
      "hm": "Eddie Howe",
      "am": "Nuno Espírito Santo",
      "hg": 1,
      "ag": 2,
      "ht": "AFC Bournemouth",
      "at": "Wolverhampton Wanderers",
      "wm": "Nuno Espírito Santo"
    },
    {
      "dt": "24-Nov-2019",
      "s": "2019/20",
      "g": "Bramall Lane",
      "hm": "Chris Wilder",
      "am": "Ole Gunnar Solskjær",
      "hg": 3,
      "ag": 3,
      "ht": "Sheffield United",
      "at": "Manchester United",
      "wm": "Draw"
    }]

 } 





}

,

win1:function(){

var g = this.matches;

var wins = g.filter(d => d.wm === this.home_manager)


return wins.length

},

win2:function(){

var g = this.matches;

var wins = g.filter(d => d.wm === this.away_manager)


return wins.length

},

draw:function(){

var g = this.matches;

var draws = g.filter(d => d.wm === 'Draw')


return draws.length

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



.vs{

  font-family: 'Alegreya Sans SC', sans-serif, 'Arial';
  font-size:28px;
  width:100px;
  text-align: center;
}


.vs2{

  font-family: 'Alegreya Sans SC', sans-serif, 'Arial';
  font-size:44px;
  width:100px;
  text-align: center;
}

.stadium {

font-size: 80%;
color: cadetblue;

}


.teams{

  width:100px;
  font-size:90%;
}

</style>
