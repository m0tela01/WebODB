import { Component, OnInit } from '@angular/core';

import { Odb, OdbGauge, ObdInterface } from '../../odb';
import { ODBDataService } from '../odbdata.service';
import * as CanvasJS from '../../canvasjs.min';
import * as $ from 'jquery';

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of, observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
//import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireDatabase } from 'angularfire2/database'
import { tap, map, switchMap, first } from 'rxjs/operators';
import { getLocaleDateFormat } from '@angular/common';
import { element } from '@angular/core/src/render3';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api

//import { getHeapStatistics } from 'v8';

export interface Item { name: string; }

const firebaseConfig = {
	apiKey: "AIzaSyCJV79IhlSdhtAOBLJz9H5dAGxfzjSau4Y",
	authDomain: "webobdbase.firebaseapp.com",
	databaseURL: "https://webobdbase.firebaseio.com",
	projectId: "webobdbase",
	storageBucket: "webobdbase.appspot.com",
	messagingSenderId: "184771792235"
};	

 firebase.initializeApp(firebaseConfig);
 
@Component({
  selector: 'app-odb',
  templateUrl: './odb.component.html',
  styleUrls: ['./odb.component.css'],
})
export class OdbComponent implements OnInit {
	gaugeValueCoolant: any;
	gaugeValueLoad: any;
	gaugeValueRPM: any;
	gaugeValueThrottle: any;
	
	gaugeColor= "rgba(0, 221, 166)"
	obd2: any;

	constructor(private db: AngularFireDatabase){
	}


	public innerWidth: any;
	ngOnInit() {

		var dog = [];
		var fromDataBase = this.db.list('/')
		.snapshotChanges().subscribe(
			item => {
				setTimeout(() => {
					this.obd2 = item.map(e =>e.payload.toJSON())
					console.log(this.obd2)
					
					this.gaugeValueCoolant = this.obd2[0]["CoolantTemp"];
					this.gaugeValueLoad = this.obd2[0]["EngineLoad"];
					this.gaugeValueRPM = this.obd2[0]["RPM"]
					this.gaugeValueThrottle = this.obd2[0]["ThrottlePosition"]
				}, 100);

			}
			
		)
		

		this.innerWidth = window.innerWidth;

		


		let chart = new CanvasJS.Chart("chartContainer", {
			animationEnabled: true,
			exportEnabled: true,
			creditText: "",
			backgroundColor: "#00ffffff",
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

	coolant: OdbGauge = {
		gaugeType: "semi",
		gaugeLabel: "Coolant Temperature",
		gaugeAppendText: "°C",
		gaugeColor2: "rgba(236, 29, 14)",
		gaugeColor: "rgba(0, 221, 166)",
		gaugeAnimate: "true",
		gaugeBackColor: "rgba(128, 128, 150)",
		gaugeCap: "round",
		gaugeThickness: "15",
		gaugeDuration: "100",
		gaugeSize: "375",
		gaugeMax: "200",
		gaugePrepend: ""
	};

	load: OdbGauge = {
		gaugeType: "semi",
		gaugeLabel: "Engine Load",
		gaugeAppendText: " %",
		gaugeColor2: "rgba(236, 29, 14)",
		gaugeColor: "rgba(177, 238, 84)",
		gaugeAnimate: "false",
		gaugeBackColor: "rgba(128, 128, 150)",
		gaugeCap: "round",
		gaugeThickness: "15",
		gaugeDuration: "100",
		gaugeSize: "375",
		gaugeMax: "100",
		gaugePrepend: ""
	}; 

	rpm: OdbGauge = {
		gaugeType: "semi",
		gaugeLabel: "RPM",
		gaugeAppendText: "",
		gaugeColor2: "rgba(236, 29, 14)",
		gaugeColor: "rgba(238, 84, 84)",
		gaugeAnimate: "false",
		gaugeBackColor: "rgba(128, 128, 150)",
		gaugeCap: "round",
		gaugeThickness: "15",
		gaugeDuration: "100",
		gaugeSize: "375",
		gaugeMax: "9000",
		gaugePrepend: ""
	};
	
	throttle: OdbGauge = {
		gaugeType: "semi",
		gaugeLabel: "Throttle Position",
		gaugeAppendText: " %",
		gaugeColor2: "rgba(236, 29, 14)",
		gaugeColor: "rgba(177, 93, 232)",
		gaugeAnimate: "false",
		gaugeBackColor: "rgba(128, 128, 150)",
		gaugeCap: "round",
		gaugeThickness: "15",
		gaugeDuration: "100",
		gaugeSize: "375",
		gaugeMax: "100",
		gaugePrepend: ""
	};
}
