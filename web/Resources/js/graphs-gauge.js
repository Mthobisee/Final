/* Gauge start */
var val = 0;
var increase = 0;
var gauge_value = document.getElementById('gauge_value').value;

$(document).ready(function() {

	//Guage-Highlights
	clearInterval(increase)
		increase = setInterval(function(){
			var degrees = gauge_value * 1.8;
			if (val<gauge_value){
				val += 1
				$('#percent').text(val);
				document.getElementById("gauge_control").style.transform = "rotate("+degrees+"deg)";
				if(val <= 32){
					document.getElementById("gauge_control").style.backgroundColor = "#ce3e26";
					//document.getElementById("gauge_control").style.transition = "backgroundColor 1.0s ease 1s";
				}

				if ((val >= 33) && (val <= 66)) {
					document.getElementById("gauge_control").style.backgroundColor = "#f1bb46";
					//document.getElementById("gauge_control").style.transition = "backgroundColor 1.0s ease 1s";
				}

				if((val >= 67) && (val <= 100)){
					document.getElementById("gauge_control").style.backgroundColor = "#7ed321";
					//document.getElementById("gauge_control").style.transition = "backgroundColor 1.0s ease 1s";
				}
			}
		},10)

		//Guage-Needle
		var gaugePS = new RadialGauge({
		    renderTo: 'gauge-ps',
		    width: 210,
		    height: 210,
		    units: 'PS',
		    minValue: 0,
		    maxValue: 100,
		    majorTicks: ['0','10','20','30','40','50','60','70','80','90','100'],
		    minorTicks: 0,
		    ticksAngle: 180,
		    startAngle: 90,
		    strokeTicks: true,
				highlights  : [
						{ from : 0,  to : 100, color : "rgba(255,255,255,0.0)" }, //'#fff' },
						/*{ from : 88, to : 100, color : 'rgba(225, 7, 23, 0.75)' }*/
				],
		    valueInt: 1,
		    valueDec: 0,
		    colorPlate: "rgba(255,255,255,0.0)",//"#fff",
		    colorMajorTicks: "rgba(255,255,255,0.0)",//"#fff",
		    colorMinorTicks: "rgba(255,255,255,0.0)",//"#fff",
		    colorTitle: "rgba(255,255,255,0.0)",//"#fff",
		    colorUnits: "rgba(255,255,255,0.0)",//"#fff",
		    colorNumbers: "rgba(255,255,255,0.0)",//"#fff",
		    valueBox: true,
		    colorValueText: "rgba(255,255,255,0.0)",//"#fff",
		    colorValueBoxRect: "rgba(255,255,255,0.0)",//"#fff",
		    colorValueBoxRectEnd: "rgba(255,255,255,0.0)",//"#fff",
		    colorValueBoxBackground: "rgba(255,255,255,0.0)",//"#fff",
		    colorValueBoxShadow: false,
		    colorValueTextShadow: false,
		    colorNeedleShadowUp: true,
		    colorNeedleShadowDown: false,
		    colorNeedle: "#3c474e",//"rgba(200, 50, 50, .75)",
		    colorNeedleEnd: "#3c474e",//"rgba(200, 50, 50, .75)",
		    colorNeedleCircleOuter: "#3c474e",//"rgba(200, 200, 200, 1)",
		    colorNeedleCircleOuterEnd: "#3c474e",//"rgba(200, 200, 200, 1)",
		    borderShadowWidth: 0,
		    borders: true,
		    borderInnerWidth: 0,
		    borderMiddleWidth: 0,
		    borderOuterWidth: 5,
		    colorBorderOuter:  "rgba(255,255,255,0.0)",//"#fff",
		    colorBorderOuterEnd: "rgba(255,255,255,0.0)",//"#fff",
		    needleType: "arrow",
		    needleWidth: 5,
		    needleCircleSize: 10,
		    needleCircleOuter: true,
		    needleCircleInner: false,
		    animationDuration: 850,
		    animationRule: "linear",
		    fontNumbers: "Verdana",
		    fontTitle: "Verdana",
		    fontUnits: "Verdana",
		    fontValue: "Led",
		    fontValueStyle: 'italic',
		    fontNumbersSize: 20,
		    fontNumbersStyle: 'italic',
		    fontNumbersWeight: 'bold',
		    fontTitleSize: 24,
		    fontUnitsSize: 22,
		    fontValueSize: 50,
		    animatedValue: true
		});
		gaugePS.draw();
		gaugePS.value = ""+gauge_value;

});
/* Gauge end */
