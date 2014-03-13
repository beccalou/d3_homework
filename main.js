//load the script when the brower window opens
window.onload = function() {

//tells d3 to use the csv file named data
d3.csv("data.csv", function(csv){

//defines two different colors
var color_women = 'red';
var color_men = 'pink';


var svg = d3.select("body") //defines svg, tells d3 to select the body element
  .data(csv) //tells d3 that the data is in the csv file
.enter().append("circle") //tells d3 to iterate over the data and add a circle for each element in the array
  .attr("r", 40) //defines the radius of each circle as 40
  .attr("cx", 50) //defines the x coordinates for the center of the circle
  .attr("cy", 50) //defines the y coordinates for the center of the circle
  .style("stroke-width", function(d) { return d.Women })//tells d3 to give all of the circles a stoke width the same size as the value given in the women column
.selectAll("circle") //tells d3 to select all of the circles
  .style("stroke", color_women) //tells d3 to give all of the circles a red stroke
  .style("fill", color_men) //tells d3 to give all of the circles a pink fill
  
  svg.append("text") //tells d3 to select the add the text from the csv file
  .text(function(d) {return d.disease;});//tells d3 to add the text from the disease column in the csv file
  .attr("y" function(d, index {return index * 10 }))//tells d3 to insert the text on the y axis * 10
})

}
