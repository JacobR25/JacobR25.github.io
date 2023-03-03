import { PieChart } from 'react-minimal-pie-chart';
// function AppTester() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <p>
//             my big test.
//           </p>
//         </header>
//       </div>
//     );
//   }
  
  //export default AppTester;

  /* ADD THIS TO HTML
<!DOCTYPE html>
<html>
  <head>
      <title>JavaScript Pie Chart</title>
      <script src="https://cdn.anychart.com/releases/8.0.1/js/anychart-core.min.js"></script>
      <script src="https://cdn.anychart.com/releases/8.0.1/js/anychart-pie.min.js"></script>
  </head>
  <body>
    <div id="container" style="width: 100%; height: 100%"></div>
    <script>
        <!-- chart code will be here -->
    </script>
  </body>
</html>
*/


function topRentCalc(price){
    return price * .011
}
function btmRentCalc(price){
    return price * .008
}
function rentRangeGivenHouseCost(price){
    return "$" + (price * .008) + " - $" + (price * .011)
}
function percentBudgetReturn(monthlyIncome, percent){
    return monthlyIncome * percent
}
function fullBudget(monthlyIncome){
    //not sure if needed
}
function whatHouseCanIAfford(monthlyRentBudget){
    
}

function makeChart(){
    // set the data
    var rent = 1000; //later will be grabbed from what the user wants
    
    //just doing budget to map, make it fully customizable
    //here we will get the percentages that they want
    var rentPercent = .10; //will actually get from input box
    var transportationPercent = .10; //will actually get from input box
    var foodPercent = .20;
    var utilitiesPercent = .10;
    var insurancePercent = .20;
    var savingsPercent = .30;
    var entertainmentPercent = .5;
    var otherPercent = .5;
    var monthlyIncome = 10000; //will actually come from client side
    return(
        <div>
            <PieChart
        data={[
            // { title: 'One', value:10, color: '#E38627'},
            // { title: 'Two', value:15, color: '#F23427'},
            // { title: 'Three', value:5, color: '#E38999'},
            {title: "Rent", value: percentBudgetReturn(monthlyIncome, rentPercent), color: '#E38627'},
            {title: "Transportation", value: percentBudgetReturn(monthlyIncome, transportationPercent), color: '#C38627'},
            {title: "Food", value: percentBudgetReturn(monthlyIncome, foodPercent), color: '#D38627'},
            {title: "Utilities", value: percentBudgetReturn(monthlyIncome, utilitiesPercent), color: '#E98627'},
            {title: "Insurance", value: percentBudgetReturn(monthlyIncome, insurancePercent), color: '#D98627'},
            {title: "Savings", value: percentBudgetReturn(monthlyIncome, savingsPercent), color: '#C38627'},
            {title: "Entertainment", value: percentBudgetReturn(monthlyIncome, entertainmentPercent),color: '#E08627'},
            {title: "Other", value: percentBudgetReturn(monthlyIncome, otherPercent), color: '#B98627'},
        ]}
    />
        </div>
    );
}

export default makeChart;

// anychart.onDocumentReady(function() {

//     // set the data
//     var rent = 1000; //later will be grabbed from what the user wants
    
//     //just doing budget to map, make it fully customizable
//     //here we will get the percentages that they want
//     var rentPercent = .10; //will actually get from input box
//     var transportationPercent = .10; //will actually get from input box
//     var foodPercent = .20;
//     var utilitiesPercent = .10;
//     var insurancePercent = .20;
//     var savingsPercent = .30;
//     var entertainmentPercent = .5;
//     var otherPercent = .5;
//     var monthlyIncome = 10000; //will actually come from client side
//     var data = [
//         {x: "Rent", value: percentBudgetReturn(monthlyIncome, rentPercent)},
//         {x: "Transportation", value: percentBudgetReturn(monthlyIncome, transportationPercent)},
//         {x: "Food", value: percentBudgetReturn(monthlyIncome, foodPercent)},
//         {x: "Utilities", value: percentBudgetReturn(monthlyIncome, utilitiesPercent)},
//         {x: "Insurance", value: percentBudgetReturn(monthlyIncome, insurancePercent)},
//         {x: "Savings", value: percentBudgetReturn(monthlyIncome, savingsPercent)},
//         {x: "Entertainment", value: percentBudgetReturn(monthlyIncome, entertainmentPercent)},
//         {x: "Other", value: percentBudgetReturn(monthlyIncome, otherPercent)}
//     ];
  
//     // create the chart
//     var chart = anychart.pie();
  
//     // set the chart title
//     chart.title("Population by Race for the United States: 2010 Census");
  
//     // add the data
//     chart.data(data);
  
//     // display the chart in the container
//     chart.container('container');
//     chart.draw();
  
//   });