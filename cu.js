var econ2 = [
    {
      "Category": "Arica y Parinacota",
      "Áreas verdes": 0.6,
      "Pob. Migrante": 2.1,
      "Viv. Colectivas": 2.3
    },
    {
      "Category": "Tarapacá",
      "Áreas verdes": 0.9,
      "Pob. Migrante": 5.0,
      "Viv. Colectivas": 2.8
  
    },
    {
      "Category": "Antofagasta",
      "Áreas verdes": 1.7,
      "Pob. Migrante": 7.3,
      "Viv. Colectivas": 9.2
  
    },
    {
      "Category": "Atacama",
      "Áreas verdes": 1.7,
      "Pob. Migrante": 0.3,
      "Viv. Colectivas": 0.2
    },
    {
      "Category": "Coquimbo",
      "Áreas verdes": 4.6,
      "Pob. Migrante": 2.4,
      "Viv. Colectivas": 6.0
  
    },
    {
      "Category": "Valparaíso",
      "Áreas verdes": 10.7,
      "Pob. Migrante": 6.8,
      "Viv. Colectivas": 11.6
  
    },
    {
      "Category": "Metropolitana",
      "Áreas verdes": 46.0,
      "Pob. Migrante": 62.3,
      "Viv. Colectivas": 18.1
  
    },
    {
      "Category": "O'Higgins",
      "Áreas verdes": 3.4,
      "Pob. Migrante": 2.9,
      "Viv. Colectivas": 4.5
  
    },
    {
      "Category": "Maule",
      "Áreas verdes": 4.6,
      "Pob. Migrante": 2.9,
      "Viv. Colectivas": 6.0
  
    },
    {
      "Category": "Bíobío",
      "Áreas verdes": 7.9,
      "Pob. Migrante": 2.2,
      "Viv. Colectivas": 9.0
  
    },
    {
      "Category": "Araucanía",
      "Áreas verdes": 0.1,
      "Pob. Migrante": 0.5,
      "Viv. Colectivas": 0.8
  
    },
    {
      "Category": "Los Ríos",
      "Áreas verdes": 6.7,
      "Pob. Migrante": 1.5,
      "Viv. Colectivas": 6.1
  
    },
    {
      "Category": "Los Lagos",
      "Áreas verdes": 5.4,
      "Pob. Migrante": 0.6,
      "Viv. Colectivas": 3.6
  
    },
    {
      "Category": "Aysén",
      "Áreas verdes": 1.2,
      "Pob. Migrante": 0.3,
      "Viv. Colectivas": 4.4
  
    },
    {
      "Category": "Magallanes",
      "Áreas verdes": 1.8,
      "Pob. Migrante": 0.7,
      "Viv. Colectivas": 4.8
  
    }
  ]
  
  //chart setup  editar grapppp
  var svg = d3.select("svg"),
      margin = {top: 75, right: 10, bottom: 80, left: 25},
      width = svg.attr("width") - margin.left - margin.right -350,
      height = svg.attr("height") - margin.top - margin.bottom,
      g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  //y position calculation function
  var y = d3.scaleLinear()
        .domain([0, 65])
        .range([height, 0]);
  
  var x0 = d3.scaleBand()  // domain defined below
        .rangeRound([0, width +350 ])
        .paddingInner(0.1)
        .paddingOuter(0.1);
  
  var x1 = d3.scaleBand()  // domain and range defined below
      .paddingOuter(0.3)
      .paddingInner(0.1);
  
  //blue, tan, red colors
  var z = d3.scaleOrdinal()
          .range(["green", "#ff674a", "#006acf"]);
  
  //reference to the y axis
  //axisLeft put labels on left side
  //ticks(n) refers to # of increment marks on the axis
  const yAxis = d3.axisLeft(y).ticks(16);
  
  //examine first object, retrieve the keys, and discard the first key
  //return resulting array of keys
  // [ "2017 Q1", "Pob. Migrante", "Viv. Colectivas"]
  var subCategories = Object.keys(econ2[0]).slice(1);
  
  //use new array from just the Category values for the bottom x-axis
  x0.domain(econ2.map( d =>  d.Category ));
  
  //array of quarterly value names, fitted in the available bottom categories (x0.bandwidth())
  x1.domain(subCategories).rangeRound([0, x0.bandwidth()])
  
  // Add bar chart
    var selection = g.selectAll("g")
      .data(econ2)
      .enter().append("g")
        .attr("transform", d => "translate(" + x0(d.Category) + ",0)" )
      selection.selectAll("rect")
      //Use map function with the subCategories array and the Econ2 array
       .data(function(d) { return subCategories.map(function(key) { return {key: key, value: d[key]}; }); })
        .enter().append("rect")
        .attr("x", d => x1(d.key) )
      //If the value is negative, put the top left corner of the rect bar on the zero line
        .attr("y", d => (d.value<0 ? y(0) : y(d.value)) )
        .attr("width", x1.bandwidth())
        .attr("height", d => Math.abs(y(d.value) - y(0)) )
        .attr("fill", d => z(d.key) )
      //can not nest the text element inside the rect element !
      selection.selectAll("text")
         .data(function(d) { return subCategories.map(function(key) { return {key: key, value: d[key]}; }); })
          .enter().append("text")
          .attr("x", d => x1(d.key) )
      //offset the position of the y value (positive / negative) to have the text over/under the rect bar
          .attr("y", d => d.value<=0 ? y(0) - (y(4) - (Math.abs(y(d.value) - y(0)) + 20)) : y(d.value) - 10)
          .style('fill', d => z(d.key))
          //tamaño numeros arriba
          .style('font-size', '0.75em')
      //make sure one just decimal place is displayed
          .text(d => Number.parseFloat(d.value).toFixed(1))
  
  //add the x-axis
  g.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x0))
      .selectAll(".tick text");
      //use wrap function to wrap long lines in labels
      
  
  //add the y-axis - notice it does not have css class 'axis'
  g.append('g')
  .call(yAxis)
  
  //idenitfy zero line on the y axis.
  g.append("line")
      .attr("y1", y(0))
      .attr("y2", y(0))
      .attr("x1", 0)
      .attr("x2", width + 350)
      .attr("stroke", "black");
  
  var legend = g.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 13)
        .attr("text-anchor", "end")
      .selectAll("g")
      .data(subCategories)
      .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * 24 + ")"; });
    legend.append("rect")
        .attr("x", width - 142)
        .attr("width", 8)
        .attr("height", 8)
        .attr("transform", "translate(330, -70)")
        .attr("fill", z);
    legend.append("text")
            .attr("x", d => d.length > 7 ? (width + 300) : (width - 8))
            .attr("y", -65)
            .attr("dy", "0.22em")
            .text(d => (d));