// from data.js
var tableData = data;

// YOUR CODE HERE!

// log table within html file

var tbody = d3.select("tbody");

console.log(tableData);

tableData.forEach((ufo_info) => {
    var row = tbody.append("tr");
    Object.entries(ufo_info).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
// // filter data based on buttom input

// var inputElement = d3.select("#datetime");
// var inputValue = inputElement.property("value");

// if (tableData.inputValue.length !== 0) {
//   populate(filterData);
// }
//   else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0))){
//     populate(filterCity) || populate(filterDate);

//   }
//   else {
//     tbody.append("tr").append("td").text("No results found!"); 
//   }
// })




//   // // Select the button
//   // var button = d3.select("#button");

//   // // // Select the form
//   // // var form = d3.select("li");

//   // // Create event handlers 
//   // button.on("click", runEnter);
//   // // form.on("submit",runEnter);

//   // // Complete the event handler function for the form
//   // function runEnter() {

//   //   // Prevent the page from refreshing
//   //   d3.event.preventDefault();
    
//   //   // Select the input element and get the raw HTML node
//   //   var inputElement = d3.select("#datetime");

//   //   // Get the value property of the input element
//   //   var inputValue = inputElement.property("value");

//   //   console.log(inputValue);
//   //   console.log(tableData);

//   //   var filteredData = tableData.filter(person => person.bloodType == inputValue);

//   //   console.log(filteredData);