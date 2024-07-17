// Set dimensions and margins for the chart
const margin = { top: 70, right: 30, bottom: 40, left: 80 };
const width = 1200 - margin.left - margin.right;
const height = 550 - margin.top - margin.bottom;

// Set up the x and y scales
const x = d3.scaleTime()
  .range([0, width]);

const y = d3.scaleLinear()
  .range([height, 0]);

// Create the SVG element and append it to the chart container
const svg = d3.select("#chart-container")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Add a title to the chart
svg.append("text")
  .attr("x", (width / 2))
  .attr("y", 0 - (margin.top / 2))
  .attr("text-anchor", "middle")
  .style("font-size", "32px")
  //.style("font-weight", "bold")
  .style("font-family", "Garamond, serif")
  .text("Títulos do Festival Folclórico de Parintins");

// Create a fake dataset
const titulos_garantido = [
  { date: new Date("1966"), value: 1, imagem: "figs/g_logo.png" },
  { date: new Date("1967"), value: 2, imagem: "figs/g_logo.png" },
  { date: new Date("1968"), value: 3, imagem: "figs/g_logo.png" },
  { date: new Date("1969"), value: 3, imagem: "figs/g_logo.png" },
  { date: new Date("1970"), value: 4, imagem: "figs/g_logo.png" },
  { date: new Date("1971"), value: 5, imagem: "figs/g_logo.png" },
  { date: new Date("1972"), value: 5, imagem: "figs/g_logo.png" },
  { date: new Date("1973"), value: 6, imagem: "figs/g_logo.png" },
  { date: new Date("1974"), value: 6, imagem: "figs/g_logo.png" },
  { date: new Date("1975"), value: 7, imagem: "figs/g_logo.png" },
  { date: new Date("1976"), value: 7, imagem: "figs/g_logo.png" },
  { date: new Date("1977"), value: 7, imagem: "figs/g_logo.png" },
  { date: new Date("1978"), value: 8, imagem: "figs/g_logo.png" },
  { date: new Date("1979"), value: 8, imagem: "figs/g_logo.png" },
  { date: new Date("1980"), value: 9, imagem: "figs/g_logo.png" },
  { date: new Date("1981"), value: 10, imagem: "figs/g_logo.png" },
  { date: new Date("1982"), value: 11, imagem: "figs/g_logo.png" },
  { date: new Date("1983"), value: 12, imagem: "figs/g_logo.png" },
  { date: new Date("1984"), value: 13, imagem: "figs/g_logo.png" },
  { date: new Date("1985"), value: 13, imagem: "figs/g_logo.png" },
  { date: new Date("1986"), value: 14, imagem: "figs/g_logo.png" },
  { date: new Date("1987"), value: 14, imagem: "figs/g_logo.png" },
  { date: new Date("1988"), value: 15, imagem: "figs/g_logo.png" },
  { date: new Date("1989"), value: 16, imagem: "figs/g_1989.png" },
  { date: new Date("1990"), value: 16, imagem: "figs/g_1990.png" },
  { date: new Date("1991"), value: 17, imagem: "figs/g_1991.png" },
  { date: new Date("1992"), value: 17, imagem: "figs/g_1992.png" },
  { date: new Date("1993"), value: 18, imagem: "figs/g_1993.png" },
  { date: new Date("1994"), value: 18, imagem: "figs/g_1994.png" },
  { date: new Date("1995"), value: 18, imagem: "figs/g_1995.png" },
  { date: new Date("1996"), value: 18, imagem: "figs/g_1996.png" },
  { date: new Date("1997"), value: 19, imagem: "figs/g_1997.png" },
  { date: new Date("1998"), value: 19, imagem: "figs/g_1998.png" },
  { date: new Date("1999"), value: 20, imagem: "figs/g_1999.png" },
  { date: new Date("2000"), value: 21, imagem: "figs/g_2000.png" },
  { date: new Date("2001"), value: 22, imagem: "figs/g_2001.png" },
  { date: new Date("2002"), value: 23, imagem: "figs/g_2002.png" },
  { date: new Date("2003"), value: 23, imagem: "figs/g_2003.png" },
  { date: new Date("2004"), value: 24, imagem: "figs/g_2004.png" },
  { date: new Date("2005"), value: 25, imagem: "figs/g_2005.png" },
  { date: new Date("2006"), value: 26, imagem: "figs/g_2006.png" },
  { date: new Date("2007"), value: 26, imagem: "figs/g_2007.png" },
  { date: new Date("2008"), value: 26, imagem: "figs/g_2008.png" },
  { date: new Date("2009"), value: 27, imagem: "figs/g_2009.png" },
  { date: new Date("2010"), value: 27, imagem: "figs/g_2010.png" },
  { date: new Date("2011"), value: 28, imagem: "figs/g_2011.png" },
  { date: new Date("2012"), value: 28, imagem: "figs/g_2012.png" },
  { date: new Date("2013"), value: 29, imagem: "figs/g_2013.png" },
  { date: new Date("2014"), value: 30, imagem: "figs/g_2014.png" },
  { date: new Date("2015"), value: 30, imagem: "figs/g_2015.png" },
  { date: new Date("2016"), value: 31, imagem: "figs/g_2016.png" },
  { date: new Date("2017"), value: 31, imagem: "figs/g_2017.png" },
  { date: new Date("2018"), value: 31, imagem: "figs/g_2018.png" },
  { date: new Date("2019"), value: 32, imagem: "figs/g_2019.png" },
  { date: new Date("2020"), value: 32, imagem: "figs/g_2020.png" },
  { date: new Date("2021"), value: 32, imagem: "figs/g_2021.png" },
  { date: new Date("2022"), value: 32, imagem: "figs/g_2022.png" },
  { date: new Date("2023"), value: 32, imagem: "figs/g_2023.png" },
  { date: new Date("2024"), value: 32, imagem: "figs/g_2024.png" }
];

const titulos_caprichoso = [
  { date: new Date("1966"), value: 0, imagem: "figs/c_logo.png" },
  { date: new Date("1967"), value: 0, imagem: "figs/c_logo.png" },
  { date: new Date("1968"), value: 0, imagem: "figs/c_logo.png" },
  { date: new Date("1969"), value: 1, imagem: "figs/c_logo.png" },
  { date: new Date("1970"), value: 1, imagem: "figs/c_logo.png" },
  { date: new Date("1971"), value: 1, imagem: "figs/c_logo.png" },
  { date: new Date("1972"), value: 2, imagem: "figs/c_logo.png" },
  { date: new Date("1973"), value: 2, imagem: "figs/c_logo.png" },
  { date: new Date("1974"), value: 3, imagem: "figs/c_logo.png" },
  { date: new Date("1975"), value: 3, imagem: "figs/c_logo.png" },
  { date: new Date("1976"), value: 4, imagem: "figs/c_logo.png" },
  { date: new Date("1977"), value: 5, imagem: "figs/c_logo.png" },
  { date: new Date("1978"), value: 5, imagem: "figs/c_logo.png" },
  { date: new Date("1979"), value: 6, imagem: "figs/c_logo.png" },
  { date: new Date("1980"), value: 6, imagem: "figs/c_logo.png" },
  { date: new Date("1981"), value: 6, imagem: "figs/c_logo.png" },
  { date: new Date("1982"), value: 6, imagem: "figs/c_logo.png" },
  { date: new Date("1983"), value: 6, imagem: "figs/c_logo.png" },
  { date: new Date("1984"), value: 6, imagem: "figs/c_logo.png" },
  { date: new Date("1985"), value: 7, imagem: "figs/c_logo.png" },
  { date: new Date("1986"), value: 7, imagem: "figs/c_1986.png" },
  { date: new Date("1987"), value: 8, imagem: "figs/c_1987.png" },
  { date: new Date("1988"), value: 8, imagem: "figs/c_1988.png" },
  { date: new Date("1989"), value: 8, imagem: "figs/c_1989.png" },
  { date: new Date("1990"), value: 9, imagem: "figs/c_1990.png" },
  { date: new Date("1991"), value: 9, imagem: "figs/c_1991.png" },
  { date: new Date("1992"), value: 10, imagem: "figs/c_1992.png" },
  { date: new Date("1993"), value: 10, imagem: "figs/c_1993.png" },
  { date: new Date("1994"), value: 11, imagem: "figs/c_1994.png" },
  { date: new Date("1995"), value: 12, imagem: "figs/c_1995.png" },
  { date: new Date("1996"), value: 13, imagem: "figs/c_1996.png" },
  { date: new Date("1997"), value: 13, imagem: "figs/c_1997.png" },
  { date: new Date("1998"), value: 14, imagem: "figs/c_1998.png" },
  { date: new Date("1999"), value: 14, imagem: "figs/c_1999.png" },
  { date: new Date("2000"), value: 15, imagem: "figs/c_2000.png" },
  { date: new Date("2001"), value: 15, imagem: "figs/c_2001.png" },
  { date: new Date("2002"), value: 15, imagem: "figs/c_2002.png" },
  { date: new Date("2003"), value: 16, imagem: "figs/c_2003.png" },
  { date: new Date("2004"), value: 16, imagem: "figs/c_2004.png" },
  { date: new Date("2005"), value: 16, imagem: "figs/c_2005.png" },
  { date: new Date("2006"), value: 16, imagem: "figs/c_2006.png" },
  { date: new Date("2007"), value: 17, imagem: "figs/c_2007.png" },
  { date: new Date("2008"), value: 18, imagem: "figs/c_2008.png" },
  { date: new Date("2009"), value: 18, imagem: "figs/c_2009.png" },
  { date: new Date("2010"), value: 19, imagem: "figs/c_2010.png" },
  { date: new Date("2011"), value: 19, imagem: "figs/c_2011.png" },
  { date: new Date("2012"), value: 20, imagem: "figs/c_2012.png" },
  { date: new Date("2013"), value: 20, imagem: "figs/c_2013.png" },
  { date: new Date("2014"), value: 20, imagem: "figs/c_2014.png" },
  { date: new Date("2015"), value: 21, imagem: "figs/c_2015.png" },
  { date: new Date("2016"), value: 21, imagem: "figs/c_2016.png" },
  { date: new Date("2017"), value: 22, imagem: "figs/c_2017.png" },
  { date: new Date("2018"), value: 23, imagem: "figs/c_2018.png" },
  { date: new Date("2019"), value: 23, imagem: "figs/c_2019.png" },
  { date: new Date("2020"), value: 23, imagem: "figs/c_2020.png" },
  { date: new Date("2021"), value: 23, imagem: "figs/c_2021.png" },
  { date: new Date("2022"), value: 24, imagem: "figs/c_2022.png" },
  { date: new Date("2023"), value: 25, imagem: "figs/c_2023.png" },
  { date: new Date("2024"), value: 26, imagem: "figs/c_2024.png" }
];

// Define the x and y domains
x.domain([new Date("1966"), new Date("2025")]);
//x.domain([d3.min(titulos_garantido, d => d.date), d3.max(titulos_garantido, d => d.date)]);
y.domain([0, d3.max(titulos_garantido, d => d.value)]);

// Add the x-gridlines
svg.append("g")
  .attr("class", "grid")
  .attr("transform", `translate(0,${height})`)
  .call(d3.axisBottom(x)
    .ticks(d3.timeYear.every(1))
    .tickSize(-height) // Tamanho das linhas do grid
    .tickFormat(""));

// Add the y-gridlines
svg.append("g")
  .attr("class", "grid")
  .call(d3.axisLeft(y)
    .ticks(31) // Ajuste conforme necessário
    .tickSize(-width) // Tamanho das linhas do grid
    .tickFormat(""));

// Styling for the gridlines
svg.selectAll(".grid line")
  .style("stroke", "lightgray") // Cor das linhas do grid
  .style("stroke-opacity", 0.7) // Opacidade das linhas do grid
  .style("shape-rendering", "crispEdges"); // Renderização nítida das linhas do grid

// Add the x-axis
svg.append("g")
  .attr("transform", `translate(0,${height})`)
  .call(d3.axisBottom(x)
    .ticks(d3.timeYear.every(1))
    .tickFormat(d => {
      const year = d.getFullYear();
      return year.toString();
    }))
  .selectAll("text")
  .attr("y", 0) // Posiciona o texto inicialmente em y = 0
  .attr("x", -9) // Ajusta a posição x para alinhar ao eixo
  .attr("dy", ".35em") // Ajusta o deslocamento vertical
  .attr("transform", "rotate(-90)") // Rotaciona o texto
  .style("text-anchor", "end"); // Ajusta o alinhamento

// Add the y-axis
svg.append("g")
  .call(d3.axisLeft(y)
    .ticks(d3.max(titulos_garantido, d => d.value)));

// Create the line generator
const line = d3.line()
  .x(d => x(d.date))
  .y(d => y(d.value));

const line2 = d3.line()
  .x(d => x(d.date))
  .y(d => y(d.value));

// Add the line path to the SVG element
svg.append("path")
  .datum(titulos_garantido)
  .attr("fill", "none")
  .attr("stroke", "red")
  .attr("stroke-width", 1)
  .attr("d", line);

svg.append("path")
  .datum(titulos_caprichoso)
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 1)
  .attr("d", line2);

// Adicione um elemento de tooltip
const tooltip = d3.select("#chart-container")
  .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("background-color", "white")
    .style("padding", "10px")
    .style("border", "1px solid #ddd")
    .style("border-radius", "5px")
    .style("pointer-events", "none"); // Evita que o tooltip interfira com eventos de mouse

// Adicione círculos para titulos_garantido
svg.selectAll(".circle-garantido")
  .data(titulos_garantido)
  .enter().append("circle")
    .attr("class", "circle-garantido")
    .attr("cx", d => x(d.date))
    .attr("cy", d => y(d.value))
    .attr("r", 5) // Raio do círculo
    .attr("fill", "red") // Cor do círculo
    .attr("data-imagem", d => d.imagem) // Armazena o caminho da imagem como um atributo de dados
    .on("mouseover", function(event, d) {
      tooltip.style("display", "inline-block")
             .html(`<img src="${d.imagem}" width="180" height="180"> <br> <center> Tema ${d.date.getFullYear()+1}`)
             .style("left", (event.pageX + 10) + "px")
             .style("top", (event.pageY - 15) + "px");
    })
    .on("mouseout", function() {
      tooltip.style("display", "none");
    });

// Adicione círculos para titulos_caprichoso
svg.selectAll(".circle-caprichoso")
  .data(titulos_caprichoso)
  .enter().append("circle")
    .attr("class", "circle-caprichoso")
    .attr("cx", d => x(d.date))
    .attr("cy", d => y(d.value))
    .attr("r", 5) // Raio do círculo
    .attr("fill", "steelblue") // Cor do círculo
    .attr("data-imagem", d => d.imagem) // Armazena o caminho da imagem como um atributo de dados
    .on("mouseover", function(event, d) {
      tooltip.style("display", "inline-block")
             .html(`<img src="${d.imagem}" width="180" height="180"> <br> <center> Tema ${d.date.getFullYear()+1}`)
             .style("left", (event.pageX + 10) + "px")
             .style("top", (event.pageY - 15) + "px");
    })
    .on("mouseout", function() {
      tooltip.style("display", "none");
    });

// Dados da legenda
const legendData = [
  { label: "Garantido", color: "red" },
  { label: "Caprichoso", color: "steelblue" }
];

// Adicionar legenda ao SVG
const legend = svg.selectAll(".legend")
  .data(legendData)
  .enter().append("g")
    .attr("class", "legend")
    .attr("transform", function(d, i) { 
      return `translate(${i * 100}, ${margin.left-75})`; // Reposicione a legenda abaixo do gráfico
    });

// Adicionar retângulos coloridos para representar as séries
legend.append("rect")
  .attr("x", 0)
  .attr("width", 18)
  .attr("height", 18)
  .style("fill", d => d.color);

// Adicionar texto da legenda
legend.append("text")
  .attr("x", 24)
  .attr("y", 9)
  .attr("dy", ".35em")
  .text(d => d.label);
