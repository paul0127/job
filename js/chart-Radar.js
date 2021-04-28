//Chart全域設定
Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.enabled = false;
Chart.defaults.global.animation = false;

var ctx12P = document.getElementById('Chart-12-personality').getContext('2d');
var ctx5C = document.getElementById('canvas-5-career').getContext('2d');

//Data
var chart12PData = [5,6,5,8,4,6,7,8,6,5,9,8];

//12-personality
var chart = new Chart(ctx12P, {
    type: 'radar',
    data: {
		labels: ['慎重性', '行動性', '持續性', '指導性', 
                '挑戰性', '共感性', '情緒安定性', '獨立自主性',
                '革新性', '思考性', '柔軟性', '感受性'],

		datasets: [{
    		label: "score",
			backgroundColor: "rgba(0, 180, 255,0.6)",
			pointBackgroundColor: "rgba(255,0,0,0.8)",
			//Radius
            radius: 3,
            pointHoverRadius: 3,
            pointRadius: 3,
            borderWidth:0,
			//Data
			data: chart12PData}]
	},

	//雷達圖樣式
    options: {
        scale: { 
			//網格線樣式
            gridLines: { 
            	circular: true,
                color:'rgba(0, 0, 0, 0.5)'           
            },
			//放射線樣式
            angleLines: {
                color: 'rgba(0, 0, 0, 0.5)',
            },
			//刻度樣式
            ticks: {
                max: 10,
                min: 0,
                stepSize: 2,
				fontSize:12,
				fontStyle:"bolder",
                fontColor:'#000',
                display:false
            },
			//點座標樣式
			pointLabels:{
				fontSize: 15,
				fontColor:'#000'
			}
        },
        animation:{
            onComplete : 
                function cartTabel(){

                    // // Canvas-12personality-Number
                    ctx12P.font = "600 12px Arial";
                    ctx12P.fillStyle = "#000";
                    ctx12P.fillText("10", 168, 55);

                    var ctx12PNum1 = 8;
                    var ctx12PNumY1= 80;
                    for(i=0;i<4;i++){
                        ctx12P.fillText(ctx12PNum1, 171.5, ctx12PNumY1);
                        ctx12PNum1-=2;
                        ctx12PNumY1+=25;
                    };
                    
                    ctx12P.fillText("0", 172, 182);

                    var ctx12PNum2 = 2;
                    var ctx12PNumY2= 205;
                    for(i=0;i<4;i++){
                        ctx12P.fillText(ctx12PNum2, 171.5, ctx12PNumY2);
                        ctx12PNum2+=2;
                        ctx12PNumY2+=25;
                    }

                    ctx12P.fillText("10", 168, 305);
                    
            }
        }
    }
})

//Data
var chart5CData = [5,4,6,8,10,8];

//5-career
var chart = new Chart(ctx5C, {
    type: 'radar',
    data: {
		labels: ["定型工作","對人工作","營業工作","非定性工作",["具創造性","工作"],"領導潛能"],

		datasets: [{
    		label: 'score',
			backgroundColor: "rgba(0, 180, 255,0.6)",
			pointBackgroundColor: "rgba(255,0,0,0.8)",
            
			//Radius
            radius: 3,
            pointHoverRadius: 3,
            // pointRadius: 3,
            borderWidth:0,
			//Data
			data: chart5CData,
            pointRadius:3            
        }]
    },

	//雷達圖樣式
    options: {
        scale: { 
			//網格線樣式
            gridLines: { 
            	circular: true,
                color:'rgba(0, 0, 0, 0.5)'                
            },        
			//放射線樣式
            angleLines: {
                color: 'rgba(0, 0, 0, 0.5)'
            },
			//刻度樣式
            ticks: {
                max: 10,
                min: 0,
                stepSize: 2,
                fontColor:'#000',
                display:false
            },
			//點座標樣式
			pointLabels:{
				fontSize: 15,
				fontColor:'#000'
            }
        },
        animation:{
            onComplete : 
                function cartTabel(){
                    ctx5C.strokeStyle = 'rgba(0, 0, 0, 0.25)'
                    //右下
                    ctx5C.beginPath();
                    ctx5C.moveTo(175,175);
                    ctx5C.lineTo(238,287);
                    ctx5C.closePath();
                    ctx5C.stroke();
                    
                    //左下
                    ctx5C.beginPath();
                    ctx5C.moveTo(175,175);
                    ctx5C.lineTo(112,287);
                    ctx5C.closePath();
                    ctx5C.stroke();
                    
                    //左
                    ctx5C.beginPath();
                    ctx5C.moveTo(175,175);
                    ctx5C.lineTo(47,175);
                    ctx5C.closePath();
                    ctx5C.stroke();
                    
                    //左上
                    ctx5C.beginPath();
                    ctx5C.moveTo(175,175);
                    ctx5C.lineTo(114,65);
                    ctx5C.closePath();
                    ctx5C.stroke();
                    
                    //右上
                    ctx5C.beginPath();
                    ctx5C.moveTo(175,175);
                    ctx5C.lineTo(236,65);
                    ctx5C.closePath();
                    ctx5C.stroke();

                    //右
                    ctx5C.beginPath();
                    ctx5C.moveTo(175,175);
                    ctx5C.lineTo(302,175);
                    ctx5C.closePath();
                    ctx5C.stroke();


                    // Canvas-12personality-Number
                    ctx5C.font = "600 12px Arial";
                    ctx5C.fillStyle = "#000";
                    ctx5C.fillText("10", 168, 53);

                    var ctx5CNum1 = 8;
                    var ctx5CNumY1= 78;
                    for(i=0;i<4;i++){
                        ctx5C.fillText(ctx5CNum1, 171.5, ctx5CNumY1);
                        ctx5CNum1-=2;
                        ctx5CNumY1+=25;
                    };
                    
                    ctx5C.fillText("0", 171.5, 177.5);

                    var ctx5CNum2 = 2;
                    var ctx5CNumY2= 204;
                    for(i=0;i<4;i++){
                        ctx5C.fillText(ctx5CNum2, 171.5, ctx5CNumY2);
                        ctx5CNum2+=2;
                        ctx5CNumY2+=25;
                    }

                    ctx5C.fillText("10", 168, 306);
            }
        }
    
    }
})
