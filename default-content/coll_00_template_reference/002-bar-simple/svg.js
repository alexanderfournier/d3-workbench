(function() {

    var cv = d3wb.initConfig()
        .attr("width", 800)
        .attr("margin", {
            top: 10,
            right: 10,
            bottom: 40,
            left: 40
        })
        .attr("debug", false)
        .data("data.csv")
        .initCanvas()

    d3.csv(cv.config.data(), function(error, data) {
        var col = d3wb.colorCategory()
        d3wb.plotBarChart(data, cv, {
            xSelector: "space",
            ySelector: "votes",
            xLabel: "Storage space",
            yLabel: "Votes",
        });
    })
})()