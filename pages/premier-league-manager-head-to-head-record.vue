<template>
  <v-layout>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css">

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons">





    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.12.0/d3.min.js" integrity="sha256-+9Mf3cAVmxxudDsr1XwXUeRZFtvdWVYdq5/vcgiYyNU=" crossorigin="anonymous"></script>
    <v-flex >
      
      <h3>Manager Head to Heads - Premier League</h3>



      <div class="post">

<p>There have been {{manager_list.length}} managers in total in the Premier League (including caretakers).  The below app allows you to see the latest historical record between 2 managers.  Choose legends such as Alex Ferguson or Harry Redknapp.  Data updated after each game week (usually Tuesday)</p>


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


<div class="scores" v-for="(s,i) in matches" :key="i" >


<p class="date">{{s.dt}}</p>
<div style="display:flex;flex:no-wrap;"><div class="home">
  {{s.ht}}
</div>
<div class="score">{{s.hg}}</div>
<div class="score">{{s.ag}}</div>
<div class="away">{{s.at}}</div>
</div>


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


color:function(a){



if (a==='Draw') {

return 'grey'

}

else if (a===this.home_manager) {

return 'orange'

}

else {

return 'blue'

}



},

result:function(a){



if (a==='Draw') {

return 'Game drawn'

}

else if (a===this.home_manager) {

return `${this.home_manager} won`

}

else {

return `${this.away_manager} won`

}



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
font-size:14px;
}



.vs{

  font-family: 'Alatsi', sans-serif;
  font-size:22px;
  width:100px;
  text-align: center;
  color: aliceblue;
}


.vs2{

  font-family: 'Alatsi', sans-serif;
  font-size:24px;
  min-width:200px;
  text-align: center;
  color: aliceblue;
}

.stadium {

font-size: 80%;
color: aliceblue;

}


.teams{

  width:100px;
  font-size:90%;
  color: aliceblue;
}



#h2h {


  border-radius: 8px;
  padding:20px;
  margin-bottom: 30px;
  max-width:400px;
  margin:auto;


   background: #282537;

}

.home {

 width:40%;
overflow: hidden;
    text-overflow: ellipsis;
 text-align: right;
     line-height: 28px;
     white-space: nowrap;
     font-weight: bold !important;
     margin-right:2px;

}

.away {

 width:40%;
overflow: hidden;
    text-overflow: ellipsis;
 text-align: left;
     line-height: 28px;
     white-space: nowrap;
     font-weight: bold !important;
      margin-left:2px;

}

.score {

 width:20px;
     background-color: #ffd230;
 text-align: center;
     font-weight: bold !important;
         text-align: center;
    display: block;
    padding-top: 4px;
    padding-bottom: 4px;
    color: #121212;
    margin:1px;

}



.date{


  padding: 8px;
    line-height: 1rem;
    text-transform: uppercase;
    background-color: #f7f7f5;
}


.scores{

  margin-bottom:20px;
}

</style>
