<template>
  <v-layout>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
<script type="text/javascript" src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css">

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons">





    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.12.0/d3.min.js" integrity="sha256-+9Mf3cAVmxxudDsr1XwXUeRZFtvdWVYdq5/vcgiYyNU=" crossorigin="anonymous"></script>
    <v-flex >
      
      <h3>Manager vs Manager over time</h3>
<p>I've collected all results in the Premier League since its inception and used it to make a tool that shows manager vs manager records.  I have used Tableau Public to make the visuals.
  Choose such famous rivals as Arsene Wenger vs Alex Ferguson, or Jose Mourinho vs Pep Guardiola.
</p>


      <div class="post">

<iframe frameBorder="0"  src="https://public.tableau.com/views/ManagervsManager/Dashboard1?:showVizHome=no&:embed=yes&:toolbar=no&:tooltip=no"
 width="1245" height="955"></iframe>


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
      title: 'h2h',
      meta: [
        { hid: 'description', name: 'Head to Head records for every Premier League manager', content: 'Premier League Manager Head to Head records' }
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
.post {margin-left:1pc;margin-right:1pc}
p {
font-size:14px;
}




</style>
