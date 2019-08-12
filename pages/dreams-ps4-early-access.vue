<template>
  <v-layout>
    <v-flex >
      
      <h1>New blog</h1>
      <hr>
      <div class="post">
      <p>I've had many blogs/websites over the years.  The first were on Google's blogger covering what movies I liked.  Then I moved onto Wordpress and had some success with tips-for-excel.com.
        At it's height I had 2,000 unique visitors a month coming to get help with vlookups and sumif() formulas.</p>


        <p>More recently I launched table-plans.com.  This site seems an odd choice for me but it enabled me to use AWS a fair bit.  S3, Lambda and DynamoDB are the backbone of that website.
        </p>

        <p>I've been using github pages for free hosting for a few years without ever really giving it my full attention.  I initally used Hubpress to generate a static website. 
           I then learnt about <a href="https://gohugo.io/">Hugo</a> to make static websites that you can add new posts to using simple markdown.  This site is now built using Nuxt/Vue and is server side rendered.  This means that I build the website locally and push the site the gets built (various html files) to my github repository.
          The benefit of this approach is that the pages seen by google are full of html and content rather than just being a link to a series of javascript files.  This should lead to better SEO performance.
          </p>

          <p>In the near future I hope to share various posts such as reviews of products I've just bought (such as the Nest Outdoor IQ camera) as well as the usual data related posts I'm often thinking of writing (I work for PlayStation in their Business Intelligence department).  Another likely topic I'll cover is how data can be used to improve searching for making puchase decisions.  I'm often amazed at how hard websites make it for users to compare phones for example.  So I'll hopefully make a few web apps that let people compare the latest dash cameras for example
            </p>
</div>


    </v-flex>
  </v-layout>
</template>


<style>
hr {margin:20px;}


.post {margin-left:1pc;margin-right:1pc}


p {

font-size:18px;

}
</style>