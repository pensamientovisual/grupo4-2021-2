
var width = 650
    height = 450
    margin = 40

var radius = Math.min(width, height) / 2 - margin

var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


var data = {"Cumplen: 15%": 18, "No cumplen: 85%": 99}


var color = d3.scaleOrdinal()
  .domain(["Cumplen: 15%", "No cumplen: 85%"])
  .range(d3.schemeDark2);


var pie = d3.pie()
  .sort(null) 
  .value(function(d) {return d.value; })
var data_ready = pie(d3.entries(data))


var arc = d3.arc()
  .innerRadius(radius * 0.5)        
  .outerRadius(radius * 0.8)


var outerArc = d3.arc()
  .innerRadius(radius * 0.9)
  .outerRadius(radius * 0.9)


svg
  .selectAll('allSlices')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', arc)
  .attr('fill', function(d){ return(color(d.data.key)) })
  .attr("stroke", "white")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)


svg
  .selectAll('allPolylines')
  .data(data_ready)
  .enter()
  .append('polyline')
    .attr("stroke", "black")
    .style("fill", "none")
    .attr("stroke-width", 1)
    .attr('points', function(d) {
      var posA = arc.centroid(d) 
      var posB = outerArc.centroid(d) 
      var posC = outerArc.centroid(d); 
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 
      posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); 
      return [posA, posB, posC]
    })


svg
  .selectAll('allLabels')
  .data(data_ready)
  .enter()
  .append('text')
    .text( function(d) { console.log(d.data.key) ; return d.data.key } )
    .attr('transform', function(d) {
        var pos = outerArc.centroid(d);
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
        return 'translate(' + pos + ')';
    })
    .style('text-anchor', function(d) {
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        return (midangle < Math.PI ? 'start' : 'end')
    })

