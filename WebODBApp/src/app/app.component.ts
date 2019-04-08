import { Component } from '@angular/core';
// import { getNumberOfCurrencyDigits } from '@angular/common';
// import { type } from 'os';
// import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: `
  //   <mwl-gauge
  //     [max]="100"
  //     [dialStartAngle]="-90"
  //     [dialEndAngle]="-90.001"
  //     [value]="69"
  //     [animated]="true"
  //     [animationDuration]="1">
  //   </mwl-gauge>
  // `
})
export class AppComponent {
  title = 'WebODBApp';
  
  gaugeType = this.getGaugeType("semi");
  gaugeValue = this.getANumber();//this.getANumber();
  gaugeLabel = this.getGaugeLabel("Speed");
  gaugeAppendText = this.getGaugeAppededtext("km/hr");
  gaugeColor = "rgba(236, 29, 14)";
  gaugeColor2 = "rgba(0, 221, 166)";
  gaugeAnimate = "true";
  gaugeBackColor = "rgba(255, 255, 255)";

  getGaugeType(type){
    return type;
  }

  getGaugeLabel(label){
    return label;
  }

  getGaugeAppededtext(text){
    this.getANumber()
    return text;
  }

  getGaugeValue(randomvalue){
    let value = randomvalue;
    return value;
  }

  getRandomNumber(maxValue) {
    //return maxValue;
    return Math.floor(Math.random() * Math.floor(maxValue));
  }

  getANumber() : any {
    let i = 11;
    let val = 61;
    return val + this.getRandomNumber(i) + 10;
  }
}

