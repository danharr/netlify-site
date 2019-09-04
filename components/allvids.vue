<template>
  
<div style="margin:10px;">












    
    <div style="color:black;" class="text-xs-center">
      <v-pagination
        v-model="page"
        :length="Math.ceil(hacks.length/max)"
        :total-visible="10"
        light
      ></v-pagination>
      </div>


  <div id="gallery">


  




  <v-card width=250 light class="videos" v-for="(vid,i) in hacks.slice((page-1)*max,max*page)" :key="i">
        <v-img style="cursor:pointer" @click="showVid(vid.id,vid.name,vid.desc)"
          class="white--text"
        
          src="https://sourcey.com/images/logos/google-drive-704x344.png"
        >
    
        </v-img>
        <v-card-title>
                
          <div style="height:150px;overflow:hidden;" >
               <span  class="blue--text">{{vid.lead}}</span><br>
            <span  class="grey--text">{{vid.name.split('_').join(' ')}}</span><br>
           
            <span>{{vid.desc}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn @click="showVid(vid.id,vid.name,vid.desc)" flat color="orange">View</v-btn>
     
        </v-card-actions>
      </v-card>
    

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

    
 </div>


</div>
</template>

<script>
/* eslint-disable*/

export default {
  name: 'allvids',
  props:['hacks'],
  data() {
    return {
      dialog:false,
      page:1,
      max:10,
      id:'',
      name:'',
      desc:''
    };
  },
  methods:{
showVid(g,h,i){

this.dialog=true
this.id = g;
this.name=h;
this.desc=i;
}

    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#gallery{

    display:flex;
flex-wrap:wrap;

}


.videos{
margin:5px;


 
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

p {
margin:10px;

}
</style>
