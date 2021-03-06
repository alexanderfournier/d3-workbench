(function() {
    let cv = d3wb.config()
        .attr('margin', '50 50 50 50')
        .attr('debug', true)
        .data(['data.csv'])
        .toCanvas();

    d3.queue()
        .defer(d3.csv, cv.data[0])
        .await(function(error, data) {
            let rand = Math.random();
            let size = (cv.wid / 3)*rand;
            let colors = d3.schemeCategory20c;
            let color = colors[Math.floor(colors.length*rand, 0)];

            cv.selectAll('rect')
                .data(data).enter().append('rect')
                .attr('x', cv.wid / 2 - size / 2)
                .attr('y', cv.hei / 2 - size / 2 )
                .attr('fill', color)
                .attr('width', size)
                .attr('height', size);
        });
})();
