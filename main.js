window.onload = function() {

d3.csv("data.csv", function(healthData){

svg.selectAll("circle").data(csv).enter()
  .append("circle")
  .attr("cx"), function(d) {return x(0);})
  .attr("cy"), function(d) {return x(0);})
  .attr("r"), function(d) {return x(0);})


})

}