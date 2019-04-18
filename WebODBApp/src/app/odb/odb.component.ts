import { Component, OnInit } from '@angular/core';

import { Odb } from '../../odb';
import { ODBDataService } from '../odbdata.service';
import * as CanvasJS from '../../canvasjs.min';
import * as $ from 'jquery';

@Component({
  selector: 'app-odb',
  templateUrl: './odb.component.html',
  styleUrls: ['./odb.component.css']
})
export class OdbComponent implements OnInit {
  /*gaugeType = this.getGaugeType("semi");
  gaugeValue = this.getANumber();//this.getANumber();
  gaugeLabel = this.getGaugeLabel("Speed");
  gaugeAppendText = this.getGaugeAppededtext("km/hr");
  gaugeColor = "rgba(236, 29, 14)";
  gaugeColor2 = "rgba(0, 221, 166)";
  gaugeAnimate = "true";
  gaugeBackColor = "rgba(255, 255, 255)";
  */

	constructor() { 
	}
	ngOnInit() {

		let chart = new CanvasJS.Chart("chartContainer", {
			animationEnabled: true,
			exportEnabled: true,
			title: {
				text: "Basic Column Chart in Angular"
			},
			data: [{
				type: "column",
				dataPoints: [
					{ y: 71, label: "Apple" },
					{ y: 55, label: "Mango" },
					{ y: 50, label: "Orange" },
					{ y: 65, label: "Banana" },
					{ y: 95, label: "Pineapple" },
					{ y: 68, label: "Pears" },
					{ y: 28, label: "Grapes" },
					{ y: 34, label: "Lychee" },
					{ y: 14, label: "Jackfruit" }
				]
			}]
		});
		chart.render();

		let dataPoints = [];
		let y = 0;		
		for ( var i = 0; i < 10000; i++ ) {		  
			y += Math.round(5 + Math.random() * (-5 - 5));	
			dataPoints.push({ y: y});
		}

		let chart2 = new CanvasJS.Chart("chartContainer2", {
			zoomEnabled: true,
			animationEnabled: true,
			exportEnabled: true,
			title: {
				text: "Performance Demo - 10000 DataPoints"
			},
			subtitles:[{
				text: "Try Zooming and Panning"
			}],
			data: [
			{
				type: "line",                
				dataPoints: dataPoints
			}]
		});
			
		chart2.render();
		
		let chart3 = new CanvasJS.Chart("chartContainer3", {
			theme: "light2",
			animationEnabled: true,
			exportEnabled: true,
			title:{
				text: "Monthly Expense"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
				indexLabel: "{name} - #percent%",
				dataPoints: [
					{ y: 450, name: "Food" },
					{ y: 120, name: "Insurance" },
					{ y: 300, name: "Traveling" },
					{ y: 800, name: "Housing" },
					{ y: 150, name: "Education" },
					{ y: 150, name: "Shopping"},
					{ y: 250, name: "Others" }
				]
			}]
		});
			
		chart3.render();


		let dataPoints2 = [];
		let dpsLength = 0;
		let chart4 = new CanvasJS.Chart("chartContainer4",{
			exportEnabled: true,
			title:{
				text:"Live Chart with Data-Points from External JSON"
			},
			data: [{
				type: "spline",
				dataPoints : dataPoints2,
			}]
		});
		
		$.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=25&length=20&type=json&callback=?", function(data) {  
			$.each(data, function(key, value){
				dataPoints2.push({x: value[0], y: parseInt(value[1])});
			});
			dpsLength = dataPoints2.length;
			chart4.render();
			updateChart();
		});
		function updateChart() {	
			$.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + (dpsLength + 1) + "&ystart=" + (dataPoints2[dataPoints.length - 1].y) + "&length=1&type=json&callback=?", function(data) {
				$.each(data, function(key, value) {
					dataPoints2.push({
					x: parseInt(value[0]),
					y: parseInt(value[1])
					});
					dpsLength++;
				});
				
				if (dataPoints2.length >  20 ) {
							dataPoints2.shift();				
						}
				chart4.render();
				setTimeout(function(){updateChart()}, 1000);
			});
		}
	}

  odb: Odb = {
    gaugeType: this.getGaugeType("semi"),
    gaugeValue: this.getGaugeValue("speedInKMHR"),
    gaugeLabel: this.getGaugeLabel("Speed"),
    gaugeAppendText: this.getGaugeAppededtext("km/hr"),
    gaugeColor2: "rgba(236, 29, 14)",
    gaugeColor: "rgba(0, 221, 166)",
    gaugeAnimate: "true",
    gaugeBackColor: "rgba(128, 128, 150)",
    gaugeCap: "round",
    gaugeThickness: "9",
    gaugeDuration: "3500",
    gaugeSize: "300",
    gaugePrepend: "p",
  };

  getGaugeType(type){
    return type;
  }

  getGaugeLabel(label){
    return label;
  }

  getGaugeAppededtext(text){
    return text;
  }

  getRandomNumber(maxValue) {
    return Math.floor(Math.random() * Math.floor(maxValue));
  }

  getGaugeValue(theValueToGet) : any {
    theValueToGet = "";
    let i = 11;
    let val = 61;
    return val + this.getRandomNumber(i) + 10;
	}
	
}
