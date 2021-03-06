$(document).ready(function () {
  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    size: 600,
    innerRadius: 600 / 3.5,
    radiusMin: 50,

    data: {
      items: [
        {text: "Atacama", count: "1"},
        {text: "Los Lagos", count: "2"},
        {text: "Los Ríos", count: "1"},
        {text: "Maule", count: "1"},
        {text: "Valparaíso", count: "2"},
        {text: "Coquimbo", count: "1"},
        {text: "Magallanes", count: "1"},
        {text: "Araucanía", count: "1"},
        {text: "Metropolitana", count: "7"},
      ],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [

      {
        name: "lines",
        options: {
          format: [
            {
              textField: "count",
              classed: {count: true},
              style: {
                "font-size": "28px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "14px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "20px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {
              style: {"font-size": "50px"},
              attr: {}
            },
            {
              style: {"font-size": "30px"},
              attr: {dy: "40px"}
            }
          ]
        }
      }]
  });
});