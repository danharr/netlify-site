<template>
  <v-layout>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.12.0/d3.min.js" integrity="sha256-+9Mf3cAVmxxudDsr1XwXUeRZFtvdWVYdq5/vcgiYyNU=" crossorigin="anonymous"></script>
    <v-flex >
      
      <h1>Tracking Personal Weight</h1>

          <v-radio-group v-model="metric" row @change="upd_yaxis">
      <v-radio label="Pounds" value="lbs"></v-radio>
      <v-radio label="Lean Pounds" value="lean"></v-radio>
    </v-radio-group>
     
      <v-slider
          v-model="yaxis"
          label="y axis minimum"
          @change="upd_yaxis"
          min=0
          max=160
          step=5
        ></v-slider>

      <div class="post">

{{metric}}      

<div id="viz" width="100%">


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
      title: 'Nokia WiFi Scales',
      meta: [
        { hid: 'description', name: 'description', content: 'Tracking my weight using Withings / Nokia scales' }
      ]
    }
  },
  data () {
    return {
      metric:'lbs',
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      yaxis:2,
      myAutoDraw: false,
     stats:[   {
    "Date": "09-Nov-2019",
    "pounds": 178.14,
    "kg": 80.8,
    "leanlb": 147.58,
    "leankg": 66.94,
    "fatlb": 30.56,
    "fatkg": 13.86,
    "fatpercent": 17.15
  },
  {
    "Date": "15-Nov-2019",
    "pounds": 178.05,
    "kg": 80.76,
    "leanlb": 146.56,
    "leankg": 66.48,
    "fatlb": 31.49,
    "fatkg": 14.28,
    "fatpercent": 17.69
  },
  {
    "Date": "15-Nov-2019",
    "pounds": 177.99,
    "kg": 80.73,
    "leanlb": 146.35,
    "leankg": 66.39,
    "fatlb": 31.63,
    "fatkg": 14.35,
    "fatpercent": 17.77
  },
  {
    "Date": "15-Nov-2019",
    "pounds": 177.92,
    "kg": 80.7,
    "leanlb": 146.15,
    "leankg": 66.29,
    "fatlb": 31.77,
    "fatkg": 14.41,
    "fatpercent": 17.86
  },
  {
    "Date": "15-Nov-2019",
    "pounds": 173.3,
    "kg": 78.61,
    "leanlb": 144.57,
    "leankg": 65.57,
    "fatlb": 28.74,
    "fatkg": 13.03,
    "fatpercent": 16.58
  }],
    }
  }


,


mounted() {

      axios
      .get('/weight.json')
      //.get('https://danharrington.netlify.com/weight.json')
      .then(response => {
        var x = response.data





        this.stats = x




var parseTime = d3.timeParse("%d-%b-%Y");



var margin = {top: 20, right: 15, bottom: 25, left: 25};


var dWidth = +d3.select('#viz').style('width').slice(0, -2);


var width =     dWidth - margin.left - margin.right;
var height =    600 - margin.top - margin.bottom;

var svg = d3.select('#viz').append("svg")
  .attr("width",  width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");





var xScale = d3.scaleTime().range([0, width]);
xScale.domain(d3.extent(this.stats, function(d) { return parseTime(d.Date); }));




var yScale = d3.scaleLinear().range([height, 0]);


yScale.domain([0,220]);

console.log(yScale(50))



var valueline = d3.line()
        .x(function(d) { return xScale(parseTime(d.Date)); })
        .y(function(d) { return yScale(d.pounds);  })
        .curve(d3.curveMonotoneX);



svg.append("path")
    .data([this.stats]) 
    .attr("class", "line")  
    .attr("d", valueline); 


 var xAxis_woy = d3.axisBottom(xScale);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis_woy);

//  Add the Y Axis
  svg.append("g").attr("class", "y axis").call(d3.axisLeft(yScale));


   })

}

,

methods:{


upd_yaxis:function(){
var parseTime = d3.timeParse("%d-%b-%Y");
  
var margin = {top: 20, right: 15, bottom: 25, left: 25};
var dWidth = +d3.select('#viz').style('width').slice(0, -2);
var width =     dWidth - margin.left - margin.right;
var height =    600 - margin.top - margin.bottom;

var yScale = d3.scaleLinear().range([height, 0]);


yScale.domain([this.yaxis,220]);


d3.selectAll(".y.axis")
      .transition().duration(1500)
      .call(d3.axisLeft(yScale));

var xScale = d3.scaleTime().range([0, width]);
xScale.domain(d3.extent(this.stats, function(d) { return parseTime(d.Date); }));

var series = '';

if (this.metric === 'lbs') {series = 'pounds'}
if (this.metric === 'lean') {series = 'leanlb'}


      var valueline = d3.line()
        .x(function(d) { return xScale(parseTime(d.Date)); })
        .y(function(d) { return yScale(d[series]);  })
        .curve(d3.curveMonotoneX);



d3.select("path")
    .data([this.stats])  
    .transition().duration(1500)
    .attr("d", valueline); 

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


.line {
    fill: none;
    stroke: #ffab00;
    stroke-width: 3;
}



.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}
.axis text {
  font-size: 10px;
}
</style>
