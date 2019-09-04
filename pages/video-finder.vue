<template>



 <v-app
    id="inspire"
    dark
  >

      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">

    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Permanent+Marker|Rubik|Share+Tech|Material+Icons' rel="stylesheet">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <v-list dense>
        <v-subheader class="mt-3 grey--text text--darken-1">Favourites</v-subheader>
        <v-list>
          <v-list-tile style="cursor:pointer;" @click="showVid(item.id,item.text,item.desc)" v-for="item in items2" :key="item.text" avatar >
            <v-list-tile-avatar>
              <v-icon>{{item.logo}}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-title  v-text="item.text" ></v-list-tile-title>
          </v-list-tile>
        </v-list>
         <v-subheader class="mt-3 grey--text text--darken-1">Categories</v-subheader>
        <v-list-tile v-for="item in items" :key="item.text" @click="office=item.code">
          <!--<v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>-->
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
  
    
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="red"
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-icon class="mx-3">fas fa-video</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Video Finder</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          append-icon="search"
          color="white"
          hide-details
                     dark
            
            clearable
            v-model="search"
           @click:append="find(search)"
           @change="find(search)"
         
        ></v-text-field>
      </v-layout>
    </v-toolbar>
    <v-content style="background-color:white;">
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
        <div style="width:800px" class="tw"></div>







 
<div v-if="none" style="display:flex;justify-content:center;flex-wrap: wrap;width: 200px;margin:auto;">
<p>0 results found</p>
<br>
<v-btn small @click="reset" color="primary">Clear Search</v-btn>

</div>



            


  
<allvids :hacks="videos"/>



 <v-dialog
        v-model="dialog"
        max-width="600"
      >
        <v-card>
          <v-card-title class="headline">{{name}}</v-card-title>
  
    
  
  <iframe v-if="dialog" allowfullscreen :src="'https://drive.google.com/file/d/'+id+'/preview'" width="420" height="340"></iframe>
        <v-card-text>{{desc}}
          </v-card-text>
        </v-card>
      </v-dialog>







          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</v-app>
</template>
<script>
/* eslint-disable*/
import allvids from '~/components/allvids'
import axios from 'axios'
import Typewriter from 't-writer.js'

export default {
  name: 'App',
  layout: 'copy',
  data () {
    return {
      dialog: false,
      id: 'ID',
      name: 'Name',
      desc: 'Description',

drawer: null,
      items: [
        { icon: 'fas fa-globe', text: 'All Categories', code: ''},
        { icon: '', text: 'England', code: 'LO'},
        { icon: '', text: 'Germany', code: 'DE'},
        { icon: '', text: 'France', code: 'FR'},
      ],
      items2: [
      { logo: 'fas fa-user-friends', text: 'Example Video1', id: '0B0JMGMGgxp9WMEdWb1hyQUhlOWs', desc: 'Example description'},
      { logo: 'fas fa-piggy-bank', text: 'Example Video2', id: '0B0JMGMGgxp9WMEdWb1hyQUhlOWs', desc: 'Example description'},
      { logo: 'fas fa-robot', text: 'Example Video3', id: '0B0JMGMGgxp9WMEdWb1hyQUhlOWs', desc: 'Example description'},
      { logo: 'far fa-laugh-beam', text: 'Example Video4', id: '0B0JMGMGgxp9WMEdWb1hyQUhlOWs', desc: 'Example description'},
      { logo: 'fab fa-accessible-icon', text: 'Example Video5', id: '0B0JMGMGgxp9WMEdWb1hyQUhlOWs', desc: 'Example description'},
      { logo: 'fas fa-ghost', text: 'Example Video6', id: '0B0JMGMGgxp9WMEdWb1hyQUhlOWs', desc: 'Example description'}
      ],

      raw_videos: [],
      office: '',
      result: '',
      search: null,
      keyword: null,
      none: false
    }
  },
  components: {
    allvids
  },
  methods: {
    find (x) { this.keyword = x },
    reset () {
      this.keyword = ''
      this.search = ''
    },
    showVid (g, h, i) {
      this.dialog = true
      this.id = g
      this.name = h
      this.desc = i
    }
  },
  mounted () {
    axios
      .get('videos.json')
      .then(response => {
        console.log(response.data)

        this.raw_videos = response.data
      })

    const target = document.querySelector('.tw')
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'black',
      cursorColor: '#34ff6b'
    })

    writer
      .type('Find videos from across the Internet. Search for topics like: Alexa')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(5)
      .type('Football')
      .rest(500)
      .remove(8)
      .type('Shopping')
      .rest(500)
      .remove(8)
      .type('Politics')
      .rest(20000)
      .changeOps({ deleteSpeed: 1 })
      .clear()
      .start()
  },

  computed: {

    winner () {
      return this.raw_videos.filter(item => {
        return item.winner === true
      })
    },
    videos1 () {
      var y = this.office
      var z = this.result

      if (y === null) { y = '' }
      var city = this.raw_videos.filter(item => {
        return item.name.startsWith(y)
      })

      if (z === '') { return city }
      if (z === null) {
        return city
      } else {
        return city.filter(item => {
          return item.result === z
        })
      }
    },
    videos () {
      var k = this.keyword

      if (k === null) { k = '' }
      k = k.toUpperCase()

      var final = this.videos1.filter(item => {
        if (item.desc.toUpperCase().includes(k) || item.name.toUpperCase().includes(k) || item.lead.toUpperCase().includes(k)) { return item }
      })

      if (final.length === 0) { this.none = true } else { this.none = false }

      return final
    }
  }
}
</script>
<style>


#title{

  font-family:Rubik, arial;
  font-size:55px;
  text-align: center;
  margin:0px;

}

#sub{

  font-family:Rubik, arial;
  font-size:20px;
  text-align: center;
  

}

iframe{
display:block;
    border-style: none;
    margin:auto;
    opacity:1;
}

 h3 {

    margin:10px;
    font-family:'Share Tech', sans-serif;
}


.tw {

  font-size:22px;
    font-family:Rubik, arial;
}
</style>