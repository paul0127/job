var ctx6C1 = document.getElementById('Chart-6-core-1').getContext('2d');
var ctx6C2 = document.getElementById('Chart-6-core-2').getContext('2d');
var ctx6C3 = document.getElementById('Chart-6-core-3').getContext('2d');
var ctx6C4 = document.getElementById('Chart-6-core-4').getContext('2d');
var ctx6C5 = document.getElementById('Chart-6-core-5').getContext('2d');
var ctx6C6 = document.getElementById('Chart-6-core-6').getContext('2d');

//size
document.getElementById('Chart-6-core-1').setAttribute("width",350);
document.getElementById('Chart-6-core-1').setAttribute("height",350);
document.getElementById('Chart-6-core-2').setAttribute("width",350);
document.getElementById('Chart-6-core-2').setAttribute("height",350);
document.getElementById('Chart-6-core-3').setAttribute("width",350);
document.getElementById('Chart-6-core-3').setAttribute("height",350);
document.getElementById('Chart-6-core-4').setAttribute("width",350);
document.getElementById('Chart-6-core-4').setAttribute("height",350);
document.getElementById('Chart-6-core-5').setAttribute("width",350);
document.getElementById('Chart-6-core-5').setAttribute("height",350);
document.getElementById('Chart-6-core-6').setAttribute("width",350);
document.getElementById('Chart-6-core-6').setAttribute("height",350);

//Chart全域設定
Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.enabled = false;
Chart.defaults.global.animation = false;
Chart.defaults.global.responsive = false;
Chart.defaults.global.hover.animationDuration = 0;


//ctx6C-Data , x與y數值不可大於9 ,r座標控制圓點半徑
var ctx6C1Data =[{x: 5,y: 4,r:5}] //ctx6C1-Data
var ctx6C2Data =[{x: 2,y: 4,r:5}] //ctx6C2-Data
var ctx6C3Data =[{x: 8,y: 5,r:5}] //ctx6C3-Data
var ctx6C4Data =[{x: 4,y: 2,r:5}] //ctx6C4-Data
var ctx6C5Data =[{x: 5,y: 2,r:5}] //ctx6C5-Data
var ctx6C6Data =[{x: 8,y: 7,r:5}] //ctx6C6-Data


//icon-star
var img = document.getElementById("chart-star");
ctx6C1.drawImage(img, 10, 10,12,12);
Chart.defaults.global.elements.point.pointStyle =img;

// ctx6c1-Chart  
var bubbleChart = new Chart(ctx6C1, {
    type: 'bubble',
    data: {
        datasets: [{
            backgroundColor: "rgba(237, 28, 36,1)",
            hoverRadius: 0,
            data: ctx6C1Data
        }]
    },

    //Chart Style
    options:{
        scales:{
            xAxes: [{
                gridLines: {
                    display:false,
                    drawBorder: false
                },
                ticks: {
                    max: 10.2,
                    min: 0,
                    suggestedMin: 0,
                    suggestedMax: 9,
                    stepSize:1,
                    padding: -16,

                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 12,
                    fontStyle: "bold",
                    fontColor: "#fff",
                },
                scaleLabel:{
                    display:true,
                    labelString:'score',
                    fontColor: '#fff',
                    fontSize: 17
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    max: 10.5,
                    min: 0,
                    stepSize:1,
                    padding: -15,

                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 12,
                    fontStyle: "bold",
                    fontColor: "#fff",
                },
                scaleLabel:{
                    display:true,
                    labelString:'score',
                    fontColor: '#fff',
                    fontSize: 17
                }
            }]
        },
        animation:{
            onComplete : 
                function cartTabel(){
                //cart-tabal-ctx6c1
                var ctxNum = ctx6C1
                var ctxTittle = "執行力"
                var ctxTilleX = "行動性"
                var ctxTilleY = "持續性"

                //line
                var drawXY = 130
                var ctxTilleXx = 160
                var ctxTilleYy = 147

                ctxNum.strokeStyle="#000";
                ctxNum.strokeRect(44,48,260,260);

                for (i=0;i<2;i++){
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(drawXY,48);
                    ctxNum.lineTo(drawXY,308);
                    ctxNum.closePath();
                    ctxNum.stroke();
                    ctxNum.beginPath();
                    ctxNum.moveTo(45,drawXY);
                    ctxNum.lineTo(304,drawXY);
                    ctxNum.closePath();
                    ctxNum.stroke();
                    drawXY+=90
                    };

                // Font
                ctxNum.font = "bold 21px Arial";
                ctxNum.fillStyle = "#000";
                ctxNum.fillText(ctxTittle,145,32);

                for (i=0;i<3;i++){
                    ctxNum.font = "bold 17px Arial";
                    ctxNum.fillStyle = "#000";
                    ctxNum.fillText(ctxTilleX[i],11,ctxTilleXx);
                    ctxTilleXx+=20
                };

                for (i=0;i<3;i++){
                    ctxNum.font = "bold 17px Arial";
                    ctxNum.fillStyle = "#000";
                    ctxNum.fillText(ctxTilleY[i],ctxTilleYy,330);
                    ctxTilleYy+=20
                };

                // ArrowLine-vertical-1
                ctxNum.beginPath();
                ctxNum.lineWidth="1";
                ctxNum.strokeStyle="#000";
                ctxNum.moveTo(20,140);
                ctxNum.lineTo(20,48);
                ctxNum.stroke();
                ctxNum.closePath();
                //ArrowLine-vertical-2
                ctxNum.beginPath();
                ctxNum.moveTo(20,207);
                ctxNum.lineTo(20,304);
                ctxNum.stroke();
                ctxNum.closePath();
                //ArrowLineW1-horizontal-1
                ctxNum.beginPath();
                ctxNum.moveTo(44,324);
                ctxNum.lineTo(139,324);
                ctxNum.stroke();
                ctxNum.closePath();
                //ArrowLineW1-horizontal-2
                ctxNum.beginPath();
                ctxNum.moveTo(210,324);
                ctxNum.lineTo(305,324);
                ctxNum.stroke();
                ctxNum.closePath();

                //Arrow-Up
                ctxNum.beginPath();
                ctxNum.lineWidth="1";
                ctxNum.strokeStyle="#000";
                ctxNum.moveTo(17,48);
                ctxNum.lineTo(23,48);
                ctxNum.lineTo(20,44);
                ctxNum.closePath();
                ctxNum.fill();
                //Arrow-Down
                ctxNum.beginPath();
                ctxNum.lineWidth="1";
                ctxNum.strokeStyle="#000";
                ctxNum.moveTo(17,304);
                ctxNum.lineTo(23,304);
                ctxNum.lineTo(20,308);
                ctxNum.closePath();
                ctxNum.fill();
                //Arrow-Left
                ctxNum.beginPath();
                ctxNum.lineWidth="1";
                ctxNum.strokeStyle="#000";
                ctxNum.moveTo(46,321);
                ctxNum.lineTo(46,327);
                ctxNum.lineTo(43,324);
                ctxNum.closePath();
                ctxNum.fill();
                //Arrow-Right
                ctxNum.beginPath();
                ctxNum.lineWidth="1";
                ctxNum.strokeStyle="#000";
                ctxNum.moveTo(302,321);
                ctxNum.lineTo(302,327);
                ctxNum.lineTo(305,324);
                ctxNum.closePath();
                ctxNum.fill();
                }
            }
    }
})
// ctx6c2-Chart   
var bubbleChart = new Chart(ctx6C2, {
    type: 'bubble',
    data: {
        datasets: [{
            backgroundColor: "rgba(237, 28, 36,1)",
            hoverRadius: 0,
            data: ctx6C2Data
        }]
    },

    //Chart Style
    options:{
        scales:{
            xAxes: [{
                gridLines: {
                    display:false,
                    drawBorder: false
                },
                ticks: {
                    max: 10.2,
                    min: 0,
                    suggestedMin: 0,
                    suggestedMax: 9,
                    stepSize:1,
                    padding: -16,

                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 12,
                    fontStyle: "bold",
                    fontColor: "#fff",
                },
                scaleLabel:{
                    display:true,
                    labelString:'score',
                    fontColor: '#fff',
                    fontSize: 17
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    max: 10.5,
                    min: 0,
                    stepSize:1,
                    padding: -15,

                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 12,
                    fontStyle: "bold",
                    fontColor: "#fff",
                },
                scaleLabel:{
                    display:true,
                    labelString:'score',
                    fontColor: '#fff',
                    fontSize: 17
                }
            }]
        },
        animation:{
            onComplete : 
                function cartTabel(){
                    //---------------------cart-tabal-ctx6c2-------------------//
                    var ctxNum = ctx6C2
                    var ctxTittle = "統御力"
                    var ctxTilleX = "指導性"
                    var ctxTilleY = "挑戰性"

                    //line
                    var drawXY = 130
                    var ctxTilleXx = 160
                    var ctxTilleYy = 147

                    ctxNum.strokeStyle="#000";
                    ctxNum.strokeRect(44,48,260,260);


                    for (i=0;i<2;i++){
                        ctxNum.beginPath();
                        ctxNum.lineWidth="1";
                        ctxNum.strokeStyle="#000";
                        ctxNum.moveTo(drawXY,48);
                        ctxNum.lineTo(drawXY,308);
                        ctxNum.closePath();
                        ctxNum.stroke();
                        ctxNum.beginPath();
                        ctxNum.moveTo(45,drawXY);
                        ctxNum.lineTo(304,drawXY);
                        ctxNum.closePath();
                        ctxNum.stroke();
                        drawXY+=90
                        };

                    // Font
                    ctxNum.font = "bold 21px Arial";
                    ctxNum.fillStyle = "#000";
                    ctxNum.fillText(ctxTittle,145,32);

                    for (i=0;i<3;i++){
                        ctxNum.font = "bold 17px Arial";
                        ctxNum.fillStyle = "#000";
                        ctxNum.fillText(ctxTilleX[i],11,ctxTilleXx);
                        ctxTilleXx+=20
                    };

                    for (i=0;i<3;i++){
                        ctxNum.font = "bold 17px Arial";
                        ctxNum.fillStyle = "#000";
                        ctxNum.fillText(ctxTilleY[i],ctxTilleYy,330);
                        ctxTilleYy+=20
                    };

                    // ArrowLine-vertical-1
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(20,140);
                    ctxNum.lineTo(20,48);
                    ctxNum.stroke();
                    ctxNum.closePath();
                    //ArrowLine-vertical-2
                    ctxNum.beginPath();
                    ctxNum.moveTo(20,207);
                    ctxNum.lineTo(20,304);
                    ctxNum.stroke();
                    ctxNum.closePath();
                    //ArrowLineW1-horizontal-1
                    ctxNum.beginPath();
                    ctxNum.moveTo(44,324);
                    ctxNum.lineTo(139,324);
                    ctxNum.stroke();
                    ctxNum.closePath();
                    //ArrowLineW1-horizontal-2
                    ctxNum.beginPath();
                    ctxNum.moveTo(210,324);
                    ctxNum.lineTo(305,324);
                    ctxNum.stroke();
                    ctxNum.closePath();

                    //Arrow-Up
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(17,48);
                    ctxNum.lineTo(23,48);
                    ctxNum.lineTo(20,44);
                    ctxNum.closePath();
                    ctxNum.fill();
                    //Arrow-Down
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(17,304);
                    ctxNum.lineTo(23,304);
                    ctxNum.lineTo(20,308);
                    ctxNum.closePath();
                    ctxNum.fill();
                    //Arrow-Left
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(46,321);
                    ctxNum.lineTo(46,327);
                    ctxNum.lineTo(43,324);
                    ctxNum.closePath();
                    ctxNum.fill();
                    //Arrow-Right
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(302,321);
                    ctxNum.lineTo(302,327);
                    ctxNum.lineTo(305,324);
                    ctxNum.closePath();
                    ctxNum.fill();
                }
        }
                    
    }
})
// ctx6c3-Chart   
var bubbleChart = new Chart(ctx6C3, {
    type: 'bubble',
    data: {
        datasets: [{
            backgroundColor: "rgba(237, 28, 36,1)",
            hoverRadius: 0,
            data: ctx6C3Data
        }]
    },

    //Chart Style
    options:{
        scales:{
            xAxes: [{
                gridLines: {
                    display:false,
                    drawBorder: false
                },
                ticks: {
                    max: 10.2,
                    min: 0,
                    suggestedMin: 0,
                    suggestedMax: 9,
                    stepSize:1,
                    padding: -16,

                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 12,
                    fontStyle: "bold",
                    fontColor: "#fff",
                },
                scaleLabel:{
                    display:true,
                    labelString:'score',
                    fontColor: '#fff',
                    fontSize: 17
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    max: 10.5,
                    min: 0,
                    stepSize:1,
                    padding: -15,

                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 12,
                    fontStyle: "bold",
                    fontColor: "#fff",
                },
                scaleLabel:{
                    display:true,
                    labelString:'score',
                    fontColor: '#fff',
                    fontSize: 17
                }
            }]
        },
        animation:{
            onComplete : 
                function cartTabel(){       
                    //---------------------cart-tabal-ctx6c3-------------------//
                    var ctxNum = ctx6C3
                    var ctxTittle = "親合力"
                    var ctxTilleX = "共感性"
                    var ctxTilleY = "情緒安定性"

                    //line
                    var drawXY = 130
                    var ctxTilleXx = 160
                    var ctxTilleYy = 126

                    ctxNum.strokeStyle="#000";
                    ctxNum.strokeRect(44,48,260,260);


                    for (i=0;i<2;i++){
                        ctxNum.beginPath();
                        ctxNum.lineWidth="1";
                        ctxNum.strokeStyle="#000";
                        ctxNum.moveTo(drawXY,48);
                        ctxNum.lineTo(drawXY,308);
                        ctxNum.closePath();
                        ctxNum.stroke();
                        ctxNum.beginPath();
                        ctxNum.moveTo(45,drawXY);
                        ctxNum.lineTo(304,drawXY);
                        ctxNum.closePath();
                        ctxNum.stroke();
                        drawXY+=90
                        };

                    // Font
                    ctxNum.font = "bold 21px Arial";
                    ctxNum.fillStyle = "#000";
                    ctxNum.fillText(ctxTittle,145,32);

                    for (i=0;i<3;i++){
                        ctxNum.font = "bold 17px Arial";
                        ctxNum.fillStyle = "#000";
                        ctxNum.fillText(ctxTilleX[i],11,ctxTilleXx);
                        ctxTilleXx+=20
                    };

                    for (i=0;i<5;i++){
                        ctxNum.font = "bold 17px Arial";
                        ctxNum.fillStyle = "#000";
                        ctxNum.fillText(ctxTilleY[i],ctxTilleYy,330);
                        ctxTilleYy+=20
                    };

                    // ArrowLine-vertical-1
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(20,140);
                    ctxNum.lineTo(20,48);
                    ctxNum.stroke();
                    ctxNum.closePath();
                    //ArrowLine-vertical-2
                    ctxNum.beginPath();
                    ctxNum.moveTo(20,207);
                    ctxNum.lineTo(20,304);
                    ctxNum.stroke();
                    ctxNum.closePath();
                    //ArrowLineW1-horizontal-1
                    ctxNum.beginPath();
                    ctxNum.moveTo(44,324);
                    ctxNum.lineTo(116,324);
                    ctxNum.stroke();
                    ctxNum.closePath();
                    //ArrowLineW1-horizontal-2
                    ctxNum.beginPath();
                    ctxNum.moveTo(230,324);
                    ctxNum.lineTo(305,324);
                    ctxNum.stroke();
                    ctxNum.closePath();

                    //Arrow-Up
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(17,48);
                    ctxNum.lineTo(23,48);
                    ctxNum.lineTo(20,44);
                    ctxNum.closePath();
                    ctxNum.fill();
                    //Arrow-Down
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(17,304);
                    ctxNum.lineTo(23,304);
                    ctxNum.lineTo(20,308);
                    ctxNum.closePath();
                    ctxNum.fill();
                    //Arrow-Left
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(46,321);
                    ctxNum.lineTo(46,327);
                    ctxNum.lineTo(43,324);
                    ctxNum.closePath();
                    ctxNum.fill();
                    //Arrow-Right
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(302,321);
                    ctxNum.lineTo(302,327);
                    ctxNum.lineTo(305,324);
                    ctxNum.closePath();
                    ctxNum.fill();
                }
        }
    }
})
// ctx6c4-Chart   
var bubbleChart = new Chart(ctx6C4, {
    type: 'bubble',
    data: {
        datasets: [{
            backgroundColor: "rgba(237, 28, 36,1)",
            hoverRadius: 0,
            data: ctx6C4Data
        }]
    },

    //Chart Style
    options:{
        scales:{
            xAxes: [{
                gridLines: {
                    display:false,
                    drawBorder: false
                },
                ticks: {
                    max: 10.2,
                    min: 0,
                    suggestedMin: 0,
                    suggestedMax: 9,
                    stepSize:1,
                    padding: -16,

                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 12,
                    fontStyle: "bold",
                    fontColor: "#fff",
                },
                scaleLabel:{
                    display:true,
                    labelString:'score',
                    fontColor: '#fff',
                    fontSize: 17
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    max: 10.5,
                    min: 0,
                    stepSize:1,
                    padding: -15,

                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 12,
                    fontStyle: "bold",
                    fontColor: "#fff",
                },
                scaleLabel:{
                    display:true,
                    labelString:'score',
                    fontColor: '#fff',
                    fontSize: 17
                }
            }]
        },
        animation:{
            onComplete : 
                function cartTabel(){ 
                    //---------------------cart-tabal-ctx6c4-------------------//
                    var ctxNum = ctx6C4
                    var ctxTittle = "開創力"
                    var ctxTilleX = "獨立思考性"
                    var ctxTilleY = "革新性"

                    //line
                    var drawXY = 130
                    var ctxTilleXx = 145
                    var ctxTilleYy = 147

                    ctxNum.strokeStyle="#000";
                    ctxNum.strokeRect(44,48,260,260);


                    for (i=0;i<2;i++){
                        ctxNum.beginPath();
                        ctxNum.lineWidth="1";
                        ctxNum.strokeStyle="#000";
                        ctxNum.moveTo(drawXY,48);
                        ctxNum.lineTo(drawXY,308);
                        ctxNum.closePath();
                        ctxNum.stroke();
                        ctxNum.beginPath();
                        ctxNum.moveTo(45,drawXY);
                        ctxNum.lineTo(304,drawXY);
                        ctxNum.closePath();
                        ctxNum.stroke();
                        drawXY+=90
                        };

                    // Font
                    ctxNum.font = "bold 21px Arial";
                    ctxNum.fillStyle = "#000";
                    ctxNum.fillText(ctxTittle,145,32);

                    for (i=0;i<5;i++){
                        ctxNum.font = "bold 17px Arial";
                        ctxNum.fillStyle = "#000";
                        ctxNum.fillText(ctxTilleX[i],11,ctxTilleXx);
                        ctxTilleXx+=20
                    };

                    for (i=0;i<3;i++){
                        ctxNum.font = "bold 17px Arial";
                        ctxNum.fillStyle = "#000";
                        ctxNum.fillText(ctxTilleY[i],ctxTilleYy,330);
                        ctxTilleYy+=20
                    };

                    // ArrowLine-vertical-1
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(20,120);
                    ctxNum.lineTo(20,48);
                    ctxNum.stroke();
                    ctxNum.closePath();
                    //ArrowLine-vertical-2
                    ctxNum.beginPath();
                    ctxNum.moveTo(20,237);
                    ctxNum.lineTo(20,304);
                    ctxNum.stroke();
                    ctxNum.closePath();
                    //ArrowLineW1-horizontal-1
                    ctxNum.beginPath();
                    ctxNum.moveTo(44,324);
                    ctxNum.lineTo(139,324);
                    ctxNum.stroke();
                    ctxNum.closePath();
                    //ArrowLineW1-horizontal-2
                    ctxNum.beginPath();
                    ctxNum.moveTo(210,324);
                    ctxNum.lineTo(305,324);
                    ctxNum.stroke();
                    ctxNum.closePath();

                    //Arrow-Up
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(17,48);
                    ctxNum.lineTo(23,48);
                    ctxNum.lineTo(20,44);
                    ctxNum.closePath();
                    ctxNum.fill();
                    //Arrow-Down
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(17,304);
                    ctxNum.lineTo(23,304);
                    ctxNum.lineTo(20,308);
                    ctxNum.closePath();
                    ctxNum.fill();
                    //Arrow-Left
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(46,321);
                    ctxNum.lineTo(46,327);
                    ctxNum.lineTo(43,324);
                    ctxNum.closePath();
                    ctxNum.fill();
                    //Arrow-Right
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(302,321);
                    ctxNum.lineTo(302,327);
                    ctxNum.lineTo(305,324);
                    ctxNum.closePath();
                    ctxNum.fill();
                }
            }
    }
})
// ctx6c5-Chart   
var bubbleChart = new Chart(ctx6C5, {
    type: 'bubble',
    data: {
        datasets: [{
            backgroundColor: "rgba(237, 28, 36,1)",
            hoverRadius: 0,
            data: ctx6C5Data
        }]
    },

    //Chart Style
    options:{
        scales:{
            xAxes: [{
                gridLines: {
                    display:false,
                    drawBorder: false
                },
                ticks: {
                    max: 10.2,
                    min: 0,
                    suggestedMin: 0,
                    suggestedMax: 9,
                    stepSize:1,
                    padding: -16,

                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 12,
                    fontStyle: "bold",
                    fontColor: "#fff",
                },
                scaleLabel:{
                    display:true,
                    labelString:'score',
                    fontColor: '#fff',
                    fontSize: 17
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    max: 10.5,
                    min: 0,
                    stepSize:1,
                    padding: -15,

                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 12,
                    fontStyle: "bold",
                    fontColor: "#fff",
                },
                scaleLabel:{
                    display:true,
                    labelString:'score',
                    fontColor: '#fff',
                    fontSize: 17
                }
            }]
        },
        animation:{
            onComplete : 
                function cartTabel(){
                    //---------------------cart-tabal-ctx6c5-------------------//
                    var ctxNum = ctx6C5
                    var ctxTittle = "應變力"
                    var ctxTilleX = "思考性"
                    var ctxTilleY = "柔軟性"

                    //line
                    var drawXY = 130
                    var ctxTilleXx = 160
                    var ctxTilleYy = 147

                    ctxNum.strokeStyle="#000";
                    ctxNum.strokeRect(44,48,260,260);


                    for (i=0;i<2;i++){
                        ctxNum.beginPath();
                        ctxNum.lineWidth="1";
                        ctxNum.strokeStyle="#000";
                        ctxNum.moveTo(drawXY,48);
                        ctxNum.lineTo(drawXY,308);
                        ctxNum.closePath();
                        ctxNum.stroke();
                        ctxNum.beginPath();
                        ctxNum.moveTo(45,drawXY);
                        ctxNum.lineTo(304,drawXY);
                        ctxNum.closePath();
                        ctxNum.stroke();
                        drawXY+=90
                        };

                    // Font
                    ctxNum.font = "bold 21px Arial";
                    ctxNum.fillStyle = "#000";
                    ctxNum.fillText(ctxTittle,145,32);

                    for (i=0;i<3;i++){
                        ctxNum.font = "bold 17px Arial";
                        ctxNum.fillStyle = "#000";
                        ctxNum.fillText(ctxTilleX[i],11,ctxTilleXx);
                        ctxTilleXx+=20
                    };

                    for (i=0;i<3;i++){
                        ctxNum.font = "bold 17px Arial";
                        ctxNum.fillStyle = "#000";
                        ctxNum.fillText(ctxTilleY[i],ctxTilleYy,330);
                        ctxTilleYy+=20
                    };

                    // ArrowLine-vertical-1
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(20,140);
                    ctxNum.lineTo(20,48);
                    ctxNum.stroke();
                    ctxNum.closePath();
                    //ArrowLine-vertical-2
                    ctxNum.beginPath();
                    ctxNum.moveTo(20,207);
                    ctxNum.lineTo(20,304);
                    ctxNum.stroke();
                    ctxNum.closePath();
                    //ArrowLineW1-horizontal-1
                    ctxNum.beginPath();
                    ctxNum.moveTo(44,324);
                    ctxNum.lineTo(139,324);
                    ctxNum.stroke();
                    ctxNum.closePath();
                    //ArrowLineW1-horizontal-2
                    ctxNum.beginPath();
                    ctxNum.moveTo(210,324);
                    ctxNum.lineTo(305,324);
                    ctxNum.stroke();
                    ctxNum.closePath();

                    //Arrow-Up
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(17,48);
                    ctxNum.lineTo(23,48);
                    ctxNum.lineTo(20,44);
                    ctxNum.closePath();
                    ctxNum.fill();
                    //Arrow-Down
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(17,304);
                    ctxNum.lineTo(23,304);
                    ctxNum.lineTo(20,308);
                    ctxNum.closePath();
                    ctxNum.fill();
                    //Arrow-Left
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(46,321);
                    ctxNum.lineTo(46,327);
                    ctxNum.lineTo(43,324);
                    ctxNum.closePath();
                    ctxNum.fill();
                    //Arrow-Right
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(302,321);
                    ctxNum.lineTo(302,327);
                    ctxNum.lineTo(305,324);
                    ctxNum.closePath();
                    ctxNum.fill();
                }
            }
    }
})
// ctx6c6-Chart   
var bubbleChart = new Chart(ctx6C6, {
    type: 'bubble',
    data: {
        datasets: [{
            backgroundColor: "rgba(237, 28, 36,1)",
            hoverRadius: 0,
            data: ctx6C6Data
        }]
    },

    //Chart Style
    options:{
        scales:{
            xAxes: [{
                gridLines: {
                    display:false,
                    drawBorder: false
                },
                ticks: {
                    max: 10.2,
                    min: 0,
                    suggestedMin: 0,
                    suggestedMax: 9,
                    stepSize:1,
                    padding: -16,

                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 12,
                    fontStyle: "bold",
                    fontColor: "#fff",
                },
                scaleLabel:{
                    display:true,
                    labelString:'score',
                    fontColor: '#fff',
                    fontSize: 17
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    max: 10.5,
                    min: 0,
                    stepSize:1,
                    padding: -15,

                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 12,
                    fontStyle: "bold",
                    fontColor: "#fff",
                },
                scaleLabel:{
                    display:true,
                    labelString:'score',
                    fontColor: '#fff',
                    fontSize: 17
                }
            }]
        },
        animation:{
            onComplete : 
                function cartTabel(){
                    //---------------------cart-tabal-ctx6c6-------------------//
                    var ctxNum = ctx6C6
                    var ctxTittle = "敏感力"
                    var ctxTilleX = "感受性"
                    var ctxTilleY = "慎重性"

                    //line
                    var drawXY = 130
                    var ctxTilleXx = 160
                    var ctxTilleYy = 147

                    ctxNum.strokeStyle="#000";
                    ctxNum.strokeRect(44,48,260,260);


                    for (i=0;i<2;i++){
                        ctxNum.beginPath();
                        ctxNum.lineWidth="1";
                        ctxNum.strokeStyle="#000";
                        ctxNum.moveTo(drawXY,48);
                        ctxNum.lineTo(drawXY,308);
                        ctxNum.closePath();
                        ctxNum.stroke();
                        ctxNum.beginPath();
                        ctxNum.moveTo(45,drawXY);
                        ctxNum.lineTo(304,drawXY);
                        ctxNum.closePath();
                        ctxNum.stroke();
                        drawXY+=90
                        };

                    // Font
                    ctxNum.font = "bold 21px Arial";
                    ctxNum.fillStyle = "#000";
                    ctxNum.fillText(ctxTittle,145,32);

                    for (i=0;i<3;i++){
                        ctxNum.font = "bold 17px Arial";
                        ctxNum.fillStyle = "#000";
                        ctxNum.fillText(ctxTilleX[i],11,ctxTilleXx);
                        ctxTilleXx+=20
                    };

                    for (i=0;i<3;i++){
                        ctxNum.font = "bold 17px Arial";
                        ctxNum.fillStyle = "#000";
                        ctxNum.fillText(ctxTilleY[i],ctxTilleYy,330);
                        ctxTilleYy+=20
                    };

                    // ArrowLine-vertical-1
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(20,140);
                    ctxNum.lineTo(20,48);
                    ctxNum.stroke();
                    ctxNum.closePath();
                    //ArrowLine-vertical-2
                    ctxNum.beginPath();
                    ctxNum.moveTo(20,207);
                    ctxNum.lineTo(20,304);
                    ctxNum.stroke();
                    ctxNum.closePath();
                    //ArrowLineW1-horizontal-1
                    ctxNum.beginPath();
                    ctxNum.moveTo(44,324);
                    ctxNum.lineTo(139,324);
                    ctxNum.stroke();
                    ctxNum.closePath();
                    //ArrowLineW1-horizontal-2
                    ctxNum.beginPath();
                    ctxNum.moveTo(210,324);
                    ctxNum.lineTo(305,324);
                    ctxNum.stroke();
                    ctxNum.closePath();

                    //Arrow-Up
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(17,48);
                    ctxNum.lineTo(23,48);
                    ctxNum.lineTo(20,44);
                    ctxNum.closePath();
                    ctxNum.fill();
                    //Arrow-Down
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(17,304);
                    ctxNum.lineTo(23,304);
                    ctxNum.lineTo(20,308);
                    ctxNum.closePath();
                    ctxNum.fill();
                    //Arrow-Left
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(46,321);
                    ctxNum.lineTo(46,327);
                    ctxNum.lineTo(43,324);
                    ctxNum.closePath();
                    ctxNum.fill();
                    //Arrow-Right
                    ctxNum.beginPath();
                    ctxNum.lineWidth="1";
                    ctxNum.strokeStyle="#000";
                    ctxNum.moveTo(302,321);
                    ctxNum.lineTo(302,327);
                    ctxNum.lineTo(305,324);
                    ctxNum.closePath();
                    ctxNum.fill();
                }
        }
    }
})

