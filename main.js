window.onload = function() {

d3.csv("data.csv", function(csv){

var svg = d3.select("body")
  .data(csv)
.enter().append("circle")
  .attr("r", 40)
  .attr("cx", function(d) {return d.Women})
  .attr("cy", function(d) {return d.Men})
.selectAll("circle")
  .style("fill", 'steelblue')
  .style("stroke", 'orange')

  .append("title")
  .text(function(d) {return d.disease;})

})

}
