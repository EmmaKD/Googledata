/**
 * @author
 */

// The following are the project steps

//I will set up document ready
//And load Google chart package
//I will then load the data
//And then render the chart

//Mygoogledat is the local name of the json file I just loaded
	function dataLoaded(Mygoogledat) {
		
		
	
	console.log("google visuals");


//I am trying to construct an array of arrays
	var myDataArray = [];

//Thsese are my headers
	
	var headerArray = ["Date", "value"];
	
		
	myDataArray.push(headerArray);
	
	var myObsData = Mygoogledat.observations;
	
		//specify starting point and ending point
	for (var i = 0; i < myObsData.length; i++) {
	
	var dataLoaded = myObsData[i];
	var newArray = [dataLoaded.date, Number(dataLoaded.value)];
	myDataArray.push(newArray);
	
	var myDataTable = google.visualization.arrayToDataTable(myDataArray);
	var options = {
          title: 'Unemployment rate'
        };
	}
//console.log(myDataArray);


function googleVizLoaded(){
	
google.load("visualization", "1", {packages:["corechart"],callback : "googleVizLoaded"});


function dataLoaded() {

	console.log(Mygoogledat);

	
}
	

	
		//create reference to current object in list
		var currObj = myObsData[i]

		var currArray = [currObj.date, Number(currObj.value)];

		myDataArray.push(currArray);

		//end for loop
	}
	
	console.log(myDataArray);
	
	
	//feed data to visualization library
	//create options object to actually customize the look if the chart
	
	

	
	//tell it to create a line chart, and give it the 
	var myChart = new google.visualization.ColumnChart(document.getElementById("myChartDiv"));
	myChart.draw(myDataTable);
}

function googleLoaded() {
	
	console.log("googleLoaded");
	
	$.get("Mygoogledat.json", dataLoaded, "json");
	
}

console.log("google loaded");

function pageLoad() {

	console.log("go to page loaded");

	//load the google visualization library
	google.load("visualization", '1', {
		packages : ["corechart"],
		callback : "googleLoaded"
	}); 
	

	//

	

}


$(document).ready(pageLoad);

