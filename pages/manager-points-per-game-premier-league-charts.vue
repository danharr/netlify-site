<template>
  <v-layout>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
<script type="text/javascript" src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css">

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons">





    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.12.0/d3.min.js" integrity="sha256-+9Mf3cAVmxxudDsr1XwXUeRZFtvdWVYdq5/vcgiYyNU=" crossorigin="anonymous"></script>
    <v-flex >
      <div class="summary">
      <h3>Manager Points Per Game Stats</h3>
<p>I've collected all results in the Premier League since its inception and used it to make a tool that shows points per game records by season.  I have used Tableau Public to make the visuals.
</p>
</div>

      <div class="post">

<iframe frameBorder="0"  src="https://public.tableau.com/views/ManagervsManager/PointsPerGame?:showVizHome=no&:embed=yes&:toolbar=no&:tooltip=no&:highdpi=true&:tabs=no"
 width="355" height="800"></iframe>


  </div>
      
      
   


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
      title: 'Premier League Point Per Game stats',
      meta: [
        { hid: 'description', name: 'Premier League Points Per Game Charts', content: 'Premier League Points Per Game Table and Charts' }
      ]
    }
  },
  data () {
    return {
     hurl: "http://public.tableau.com/views/RegionalSampleWorkbook/Storms",
                    options: {
                        hideTabs: true
                    }
    }
  }
 
}
</script>

<style>
hr {margin:20px;}

p {
font-size:14px;
}

.container {


  padding:0px;
}


.summary{

  padding:16px;
}


</style>
