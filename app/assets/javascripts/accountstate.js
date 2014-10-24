// Terrible graph plot

var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var parseDate = d3.time.format("%d-%b-%y").parse;

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .x(function(d) { return x(d.x); })
    .y(function(d) { return y(d.y); });

var svg = d3.select("#graph").append("svg")
    .attr("width", $("#graph").width())
    .attr("height", $("#graph").height())
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Make some fake data that decreases randomly
var data = [];
var prev = 100 + Math.random() * 20
for (var i = 0; i < 150; i++) {
    var newNumber = prev + Math.random() * 20 - 10;
    data.push({
      x: i,
      y: newNumber
    });
    prev = newNumber;
}

// Set extents
x.domain(d3.extent(data, function(d) { return d.x; }));
y.domain(d3.extent(data, function(d) { return d.y; }));

// x-axis
// svg.append("g")
//     .attr("class", "x axis")
//     .attr("transform", "translate(0," + height + ")")
//     .call(xAxis);

// Add line to graph
svg.append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", line);