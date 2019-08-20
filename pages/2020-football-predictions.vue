<template>
  <v-layout>
    <v-flex >
      
      <h1>2020 Football Season Predictions</h1>
      <hr>
      <div class="post">
      
<p>The Premier League kicked off again on Friday and the usual teams picked up 3 points with Man City thumping West Ham at the <a href="https://www.london-stadium.com/">London Stadium</a>  and Liverpool destroying Norwich at Anfield.</p>

<p>The title race will surely be between Man City and Liverpool again with both teams nearly getting 100 points in 2018-19 season.</p>

<p>With Chelsea's transfer ban and the strain of <a href="https://www.uefa.com/uefachampionsleague/">Champions League</a>  games I can only see them finishing 5th or 6th. The loss of David Luiz is only going to benefit them though as I've rarely seen him out in a good performance.</p>

<p>Spurs can never be dismissed and with a few new signings I can see them battling with Arsenal for 3rd place.</p>

<p>Man Utd started the season brightly with a 4 nil win over Frank Lampard's Chelsea but I think they'll only get 4th spot if Arsenal have another terrible end of season run like last year.</p>

<p>Everton, West Ham, Leicester and Wolves will yoyo back and forth in the middle of the pack. I can see Southampton doing better this year and maybe push one of those other 4 out and sneak a Europa League spot.</p>

<p>Villa made a good signing in Heaton from Burnley which makes me think they'll stay up.</p>

<p>The other promoted teams will slide back down to the Championship and could be joined by Brighton.  Brighton beat Watford on the opening day but I feel their manager won't be able to keep the momentum going beyond their inevitable annual home win against West Ham in their first home game.</p>

<p>Top scorer sound be either <a href="https://www.bbc.co.uk/sport/football/42859716">Aubameyang</a> , Sterling or Kane. Kane has the least competition for places and won't be rested much so provided he stays fit I reckon he'll score most.</p>

<p>
In Europe, I think PSG are ling overdue a good run.  With the money they've spent signing players like Neymar you have to expect them to reach the smei finals at least.  Overall I think English clubs will do well again and I expect Juventus to drop out earlier than most people would expect (I think they'll have more competion domestically this year with Inter Milan pushing them for the title and this will distract them from their Champions League campaign)
  </p>

  <p>Former England manager, Roy Hodgson is my pick for first manager to get the sack in the Premier League.  Many would choose Steve Bruce but I feel expectaions are low for Newcastle so even if they get off to a bad start they will keep Bruce in charge.

</p>
<h3>Current Standings vs my predictions below</h3>

<hr>

<table>
  <tr>
    <th>Crest</th>
    <th>Team</th>
    <th>Position</th>
    <th>My Prediction</th>
  </tr>
  <tr v-for="x in msg" :key="x.team">
    <td><img :src="x.crest" :alt="x.team" style="height:40px;align:center;"></td>
    <td>{{x.team}}</td>
    <td>{{x.pos}}</td>
    <td>{{x.pred}}</td>
  </tr>
  </table>

   <!-- <div class="comments">
    <vue-disqus shortname="https-danharrington-netlify-com" :identifier="page_id" url="http://example.com/path"></vue-disqus>
  </div> -->

</div>
<OtherPosts/>

    </v-flex>
  </v-layout>
</template>


<script>
import axios from 'axios'
import OtherPosts from '~/components/OtherPosts'

export default {
  components: {
    OtherPosts
  },
  head () {
    return {
      title: 'Predictions for the 2020 football season',
      meta: [
        { hid: 'description', name: 'description', content: 'Opinions and predictions for the new football season' }
      ]
    }
  },
  data () {
    return {
      msg: [{ 'team': 'Sheffield United FC', 'pos': 8, 'crest': 'https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg' }],
      preds: {
        'Manchester City FC': 1,
        'Manchester United FC': 5,
        'Liverpool FC': 2,
        'Burnley FC': 13,
        'Brighton & Hove Albion FC': 17,
        'Tottenham Hotspur FC': 3,
        'Arsenal FC': 4,
        'Sheffield United FC': 20,
        'AFC Bournemouth': 14,
        'Wolverhampton Wanderers FC': 10,
        'Everton FC': 7,
        'Leicester City FC': 8,
        'Crystal Palace FC': 16,
        'Newcastle United FC': 18,
        'Aston Villa FC': 15,
        'Norwich City FC': 19,
        'Southampton FC': 9,
        'Watford FC': 12,
        'Chelsea FC': 6,
        'West Ham United FC': 11
      },
      headers: [
        { text: ' ', value: 'crest' },
        { text: 'Team', value: 'team' },
        { text: 'Position', value: 'pos' }
      ]
    }
  },

  mounted () {
    axios
      .get('https://api.football-data.org/v2/competitions/PL/standings', { headers: { 'X-Auth-Token': '1a69e76a83a148e8bf152ab165cf44f6' } })
      .then(response => {
        var t = this.preds
        var y = []
        var x = response.data.standings[0].table
        x.forEach(function (d) { y.push({ team: d.team.name, pos: d.position, crest: d.team.crestUrl, pred: t[d.team.name] }) })
        console.log('y')
        console.log(y)
        // console.log(x)
        this.msg = y
      })
  }
}
</script>

<style>
hr {margin:20px;}
.post {margin-left:1pc;margin-right:1pc}
p {
font-size:18px;
}


table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
