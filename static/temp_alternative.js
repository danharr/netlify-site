var t = f.standings[0].table;

z = {};

var max = d3.max(t, function(d) { return +d.points;} );

var i;
for (i = min; i <= max; i++) { 
  z[i]=[];
};

t.forEach(function(d){z[d.points].push(d.team.name) });
var prem = [];
Object.keys(z).forEach(function(key,index) {
    prem.push({teams:z[key],points:key});
    // key: the name of the object key
    // index: the ordinal position of the key within the object 
});

