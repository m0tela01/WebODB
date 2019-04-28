import { Component, OnInit } from '@angular/core';

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { OdbGauge } from '../../odb';
import { AngularFireDatabase } from 'angularfire2/database'



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
	gaugeValueSpeedInKPH: any;
	gaugeValueSpeedInMPH: any;
  gaugeValueFuelPressure: any;
	gaugeValueAirIntake: any;
	gaugeValueDegreeRaceCar: any;
	
	//gaugeColor= "rgba(0, 221, 166)"
	obd2: any;

	constructor(private db: AngularFireDatabase){
	}


	public innerWidth: any;
	ngOnInit() {

		this.db.list('/')
		.snapshotChanges().subscribe(
			item => {
				setTimeout(() => {
					this.obd2 = item.map(e =>e.payload.toJSON())
					//console.log(this.obd2)
					
					this.gaugeValueCoolant = this.obd2[0]["CoolantTemp"];
					this.gaugeValueLoad = this.obd2[0]["EngineLoad"];
					this.gaugeValueRPM = this.obd2[0]["RPM"]
					this.gaugeValueThrottle = this.obd2[0]["ThrottlePosition"]
					this.gaugeValueSpeedInKPH = this.obd2[0]["SpeedKPH"]
					this.gaugeValueSpeedInMPH = this.obd2[0]["SpeedMPH"]
          this.gaugeValueFuelPressure = this.obd2[0]["FuelPressure"]
					this.gaugeValueAirIntake = this.obd2[0]["AirIntake"]
					this.gaugeValueDegreeRaceCar = this.obd2[0]["Degree"]
				}, 1000);
			}
		)
	}

	//row 1
	coolant: OdbGauge = {
		gaugeType: "semi",
		gaugeLabel: "Coolant Temperature",
		gaugeAppendText: " °C",
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
		gaugeType: "full",
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
		gaugeType: "full",
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
		gaugeType: "full",
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
  
	fpressure: OdbGauge = {
		gaugeType: "full",
		gaugeLabel: "Fuel Pressure",
		gaugeAppendText: " kPa",
		gaugeColor2: "rgba(236, 29, 14)",
		gaugeColor: "rgba(153, 102, 102)",
		gaugeAnimate: "false",
		gaugeBackColor: "rgba(128, 128, 150)",
		gaugeCap: "round",
		gaugeThickness: "15",
		gaugeDuration: "100",
		gaugeSize: "375",
		gaugeMax: "825",
		gaugePrepend: ""
	};
		
	
  // row 2
	spdKph: OdbGauge = {
		gaugeType: "semi",
		gaugeLabel: "Speed",
		gaugeAppendText: " KPH",
		gaugeColor2: "rgba(236, 29, 14)",
		gaugeColor: "rgba(61, 140, 241)",
		gaugeAnimate: "false",
		gaugeBackColor: "rgba(128, 128, 150)",
		gaugeCap: "round",
		gaugeThickness: "15",
		gaugeDuration: "100",
		gaugeSize: "375",
		gaugeMax: "100",
		gaugePrepend: ""
	};

	spdMph: OdbGauge = {
		gaugeType: "semi",
		gaugeLabel: "Speed",
		gaugeAppendText: " MPH",
		gaugeColor2: "rgba(236, 29, 14)",
		gaugeColor: "rgba(247, 80, 164)",
		gaugeAnimate: "false",
		gaugeBackColor: "rgba(128, 128, 150)",
		gaugeCap: "round",
		gaugeThickness: "15",
		gaugeDuration: "100",
		gaugeSize: "375",
		gaugeMax: "100",
		gaugePrepend: ""
	};

	airIntake: OdbGauge = {
		gaugeType: "semi",
		gaugeLabel: "Air Intake Temperature",
		gaugeAppendText: " °C",
		gaugeColor2: "rgba(236, 29, 14)",
		gaugeColor: "rgba(234, 235, 236)",
		gaugeAnimate: "false",
		gaugeBackColor: "rgba(128, 128, 150)",
		gaugeCap: "round",
		gaugeThickness: "15",
		gaugeDuration: "100",
		gaugeSize: "375",
		gaugeMax: "150",
		gaugePrepend: ""
	};

	raceCar: OdbGauge = {
		gaugeType: "full",
		gaugeLabel: "Degrees Racecar",
		gaugeAppendText: " °",
		gaugeColor2: "rgba(236, 29, 14)",
		gaugeColor: "rgba(177, 93, 232)",
		gaugeAnimate: "false",
		gaugeBackColor: "rgba(128, 128, 150)",
		gaugeCap: "round",
		gaugeThickness: "15",
		gaugeDuration: "100",
		gaugeSize: "375",
		gaugeMax: "5",
		gaugePrepend: ""
	};
}
