<template>
  <v-layout>
    <v-flex >
      
      <h1>Topics to consider when building a new website</h1>
      <hr>
      <div class="post">
      


<p>There are many reasons why you might be considering creating your own website. You may wish to learn more about web development. You might wish to have a platform where you can share your thoughts and ideas. You may even have a product that you wish to sell online. Regardless of your motives you will have a vast number of options open to you. 
  Below I will list the various options you have to create a new site. Some are free, whilst some require some money. Some are simple whilst others will give you total freedom to change every aspect of your site.</p>

<p>I'll start with the most simple options that I know of as of Summer 2019.</p>
<h3>WordPress or Blogspot</h3> 
<p>Both these options allow you to start creating blog posts within minutes of signing up. There'll be no cost though, as was the case with WordPress, you may have to put up with adverts showing on your site.
WordPress had two versions, .org and .com. The .com version will allow you to make a free blog that will have a domain name of the sort yoursite.wordpress.com.
There will be a limited about of customisation available to you via WordPress plugins.  Google sites is another free option worth considering.</p>
<p>Moving away from CMS offerings such as WordPress might mean you consider options that will allow you to create a site locally on your machine before placing the finished product on some server somewhere.
One such option is using Amazon Web Services (AWS). I have made static sites in the past that reside in S3 buckets (imagine dropbox with a less friendly user interface). You can make the contents of your S3 bucket public and then people can access your site over the internet.  There is a cost associated with using AWS but they also have a free tier which differs by service which is often very generous.
If using AWS then you might also use Route 53. This service will allow you to setup up your own domain so users can access your website using a URL of your choosing.
DynamoDB then gives you the option to store data in document storage. You might track web transactions in here or feedback from users.
AWS Lambda then gives you the option to create microservices. I've used AWS Lambda in the past to take an image a user has uploaded then transform it using either a python library or Node.js before providing the outputs back to the user.</p>
<h3>Static or SPA</h3>
<p>If you're keen on getting good search rankings then you may prefer to have a server side rendered site (SSR) instead of a Single Page Application (SPA). Websites made with Vue.js are often (initially) SPAs. This means that they will be predominantly made via  JavaScript that renders the DOM once the user visits the page.
In contrast, an SSR site will be rendered on a server before the user visits the site. This means when Google scans your page they'll see more standard html content and will get a better impression of what the page content is.</p>
<h3>Continuous integration</h3>
<p>I'll finish by sharing my current setup. I write my website content on either my phone or laptop and commit my work to GitHub when it's ready. This triggers Netlify (where my site is hosted) to grab the repository's content and build the website using the new source code. This all happens for free and allows me to make edits to my production website whilst on the train if needed.</p>

</div>

<OtherPosts/>
    </v-flex>
  </v-layout>
</template>


<script>
import OtherPosts from '~/components/OtherPosts'

export default {
  components: {
    OtherPosts
  },
  head () {
    return {
      title: 'Topics to consider when building a new website',
      meta: [
        { hid: 'description', name: 'description', content: 'If you\'re making a new website you might want to consider these various options' }
      ]
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


</style>
