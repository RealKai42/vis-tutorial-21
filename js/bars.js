function bars(data) {
  const width = 600,
    height = 400;
  const margin = { top: 20, right: 0, bottom: 30, left: 40 };

  const svg = d3
    .select("#bar")
    .attr("viewBox", [0, 0, width, height])
    .style("background", "white");

  const x = d3
    .scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.left, width - margin.left - margin.right])
    .padding(0.2);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const xAxis = g =>
    g
      .attr("transform", `translate(${0}, ${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0));

  const yAxis = g =>
    g
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y))
      .call(g => g.select(".domain").remove());

  svg
    .append("g")
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => x(d.name))
    .attr("y", d => y(d.value))
    .attr("width", x.bandwidth())
    .attr("height", d => y(0) - y(d.value))
    .attr("fill", "steelblue")
    .style("cursor", "pointer")
    .on("mouseenter", function(){
      this.setAttribute("fill", "orange")
    })
    .on("mouseleave", function(){
      this.setAttribute("fill", "steelblue")
    })

  svg
    .append("g")
    .call(xAxis)
    .call(g =>
      g.selectAll("text").attr("transform", "translate(-10, 5) rotate(-45)")
    );

  svg.append("g").call(yAxis);
}
