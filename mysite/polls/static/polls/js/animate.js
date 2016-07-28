
function animate_chart(proportions, labels) {
    // Define rectangle dimensions
    var bar_w = 100,
        bar_h = 250,
        bar_padding = 50;

    var text_h = 20;    

    var x = d3.scale.linear()
            .domain([0, 1])
            .range([0, bar_w + bar_padding]);

    var y = d3.scale.linear()
            .domain([0, d3.max(proportions)])
            .rangeRound([0, bar_h]);

    // Define chart dimensions
    var chart = d3.select("#chart").append("svg")
        .attr("class", "chart")
        .attr("width", (proportions.length * bar_w + (proportions.length - 1) * bar_padding))
        .attr("height", text_h + bar_h);

    chart.selectAll("rect")
     .data(proportions)
     .enter()
     .append("rect")
     .attr("x", function(d, i) { return x(i) - .5; })
     .attr("y", function(d) { return bar_h - .5; })
     .attr("width", bar_w)
     .transition()
     .duration(1000)
     .attr("height", function(d) { return y(d); })
     .attr("y", function(d) { return bar_h - y(d) - .5; });

    chart.selectAll("text")
     .data(labels)
     .enter()
     .append("text")
     .attr("width", bar_w)
     .attr("x", function(d, i) { return x(i) + bar_w/2; })
     .attr("y", bar_h + text_h - 1)
     .attr("text-anchor", "middle")
     .transition()
     .duration(1000)
     .text(function(d) { return d; });
}
