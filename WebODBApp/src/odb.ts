export class Odb{
    Days: "string";
    Description: "string";
    Failed: "string";
    Hours: "string";
    Icon: "string";
    Id: "string";
    Latitude: "string";
    Longitude: "string";
    Menu: "string";
    Name: "string";
    Status: "string";
}

export class OdbGauge{   
    gaugeType: string;
    // gaugeValue: string;
    gaugeLabel: string;
    gaugeAppendText: string;
    gaugeColor2: string;
    gaugeColor: string;
    gaugeAnimate: string;
    gaugeBackColor: string;
    gaugeCap: string;
    gaugeThickness: string;
    gaugeDuration: string;
    gaugeSize: string;
    gaugeMax: string;
    gaugePrepend: string;
}

export interface ObdInterface{
    RPM: string;
    CoolantTemp: string;
    ThrottlePosition: string;
    EngineLoad: string;
}

