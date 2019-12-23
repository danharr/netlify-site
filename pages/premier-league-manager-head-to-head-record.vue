<template>
  <v-layout>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css">

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons">





    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.12.0/d3.min.js" integrity="sha256-+9Mf3cAVmxxudDsr1XwXUeRZFtvdWVYdq5/vcgiYyNU=" crossorigin="anonymous"></script>
    <v-flex >
      
      <h3>Manager vs Manager over time</h3>
<p>I've collected all results in the Premier League since inception and used it to make a tool that shows manager vs manager records.  I have used Tableau Public to make the visuals.
  Choose such famous rivals as Arsene Wenger vs Alex Ferguson, or Jose Mourinho vs Pep Guardiola.
</p>


      <div class="post">


<div class='tableauPlaceholder' id='viz1577105686883' style='position: relative'>
    <noscript>
        <a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ma&#47;ManagervsManager&#47;Sheet1&#47;1_rss.png' style='border: none' /></a>
    </noscript>
    <object class='tableauViz' style='display:none;'>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value='ManagervsManager&#47;Sheet1' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='yes' />
        <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ma&#47;ManagervsManager&#47;Sheet1&#47;1.png' />
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='yes' />
        <param name='filter' value='publish=yes' />
    </object>
</div>
<script type='text/javascript'>
    var divElement = document.getElementById('viz1577105686883')
    var vizElement = divElement.getElementsByTagName('object')[0]
    vizElement.style.width = '100%'
    vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px'
    var scriptElement = document.createElement('script')
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'
    vizElement.parentNode.insertBefore(scriptElement, vizElement)
</script>



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
 
}
</script>

<style>
hr {margin:20px;}
.post {margin-left:1pc;margin-right:1pc}
p {
font-size:14px;
}




</style>
