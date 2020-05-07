/*var canvas = document.createElement('canvas');
canvas.width = chart.$elem.width();
canvas.height = chart.$elem.height();

var context = canvas.getContext('2d');
var FONT_SIZE = 16; //字体大小
var LINE_WIDTH = 2; //数字线宽度
var TOTAL_COUNT = 9; //最大位数
var BACK_COLOR = 'rgba(40, 51, 112, 1)';
var FONT_COLOR = 'rgba(153, 254, 255, 1)';
var OFFSET_X = 20; //数字距离左上角的偏移x
var OFFSET_Y = 20; //数字距离左上角的偏移y
var MARGIN = 5; //数字间距

var NUMBER_MAP = {
  '0': [1,1,1,0,1,1,1],
  '1': [0,0,1,0,0,1,0],
  '2': [1,0,1,1,1,0,1],
  '3': [1,0,1,1,0,1,1],
  '4': [0,1,1,1,0,1,0],
  '5': [1,1,0,1,0,1,1],
  '6': [1,1,0,1,1,1,1],
  '7': [1,0,1,0,0,1,0],
  '8': [1,1,1,1,1,1,1],
  '9': [1,1,1,1,0,1,1]
};

var LINE_MAP = {
  0: {type: 'line', offset: [0, 0]},
  1: {type: 'leftTop', offset: [-2, 2]},
  2: {type: 'rightTop', offset: [FONT_SIZE / 2 + 2, 2]},
  3: {type: 'line', offset: [0, FONT_SIZE / 2 + 4]},
  4: {type: 'leftBottom', offset: [-2, FONT_SIZE / 2 + 6]},
  5: {type: 'rightBottom', offset: [FONT_SIZE / 2 + 2, FONT_SIZE / 2 + 6]},
  6: {type: 'line', offset: [0, FONT_SIZE + 8]}
}

function getLinePath(type) {
  var path = [];
  
  if (type === 'line') {
    path = [[0,0], [LINE_WIDTH / 2, -LINE_WIDTH / 2], [FONT_SIZE / 2 - LINE_WIDTH / 2, -LINE_WIDTH / 2], [FONT_SIZE / 2, 0], [FONT_SIZE / 2 - LINE_WIDTH / 2, LINE_WIDTH / 2], [LINE_WIDTH / 2, LINE_WIDTH / 2]];
  } else if (type === 'leftTop') {
    path = [[0,0], [-LINE_WIDTH / 2, LINE_WIDTH / 2], [-LINE_WIDTH / 2, FONT_SIZE / 2], [LINE_WIDTH / 2, FONT_SIZE / 2 - LINE_WIDTH / 2], [LINE_WIDTH / 2, LINE_WIDTH / 2]];
  } else if (type === 'rightTop') {
    path = [[0,0], [-LINE_WIDTH / 2, LINE_WIDTH / 2], [-LINE_WIDTH / 2, FONT_SIZE / 2 - LINE_WIDTH / 2], [LINE_WIDTH / 2, FONT_SIZE / 2], [LINE_WIDTH / 2, LINE_WIDTH / 2]];
  } else if (type === 'leftBottom') {
    path = [[-LINE_WIDTH / 2, 0], [-LINE_WIDTH / 2, FONT_SIZE / 2 - LINE_WIDTH / 2], [0, FONT_SIZE / 2], [LINE_WIDTH / 2, FONT_SIZE / 2 - LINE_WIDTH / 2], [LINE_WIDTH / 2, LINE_WIDTH / 2]];
  } else if (type === 'rightBottom') {
    path = [[-LINE_WIDTH / 2, LINE_WIDTH / 2], [-LINE_WIDTH / 2, FONT_SIZE / 2 - LINE_WIDTH / 2], [0, FONT_SIZE / 2], [LINE_WIDTH / 2, FONT_SIZE / 2 - LINE_WIDTH / 2],  [LINE_WIDTH / 2, 0]];
  }
  
  return path;
}

function drawLine(type, startX, startY) {
  context.beginPath();
  var path = getLinePath(type);
  
  context.moveTo(startX + path[0][0], startY + path[0][1]);
  
  path.forEach(function(point) {
    context.lineTo(startX + point[0], startY + point[1]);
  });
  
  context.closePath();
}

function paintNumber(number, startX, startY, fontColor, backColor) {
  var map = NUMBER_MAP[number];
  map.forEach(function(has, index) {
    var line = LINE_MAP[index];
    if(has === 1) {
      drawLine(line.type, startX + line.offset[0], startY + line.offset[1]);
      context.fillStyle = fontColor;
      context.fill();
    } else {
      if (index !== 3) {
        drawLine(line.type, startX + line.offset[0], startY + line.offset[1]);
        context.fillStyle = backColor;
        context.fill();
      }
    }
  })
}

function draw(number) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  var str = number + '';
  var x = OFFSET_X;
  var start = 0;
  if (str.length < TOTAL_COUNT) {
    for (var i = 0; i < TOTAL_COUNT - str.length; i++) {
      paintNumber('0', x, OFFSET_Y, BACK_COLOR, 'transparent');
      x += FONT_SIZE / 2 + LINE_WIDTH + 4 + MARGIN;
    }
  } else {
    start = -(TOTAL_COUNT - str.length);
  }

  for (var i = start; i < str.length; i++) {
    paintNumber(str[i], x, OFFSET_Y, FONT_COLOR, BACK_COLOR);
    x += FONT_SIZE / 2 + LINE_WIDTH + 4 + MARGIN;
  }
}

chart.$elem.get(0).append(canvas);


var fullData = {
  '全部': 0
};

var currentData = {};

function initAllData() {
  var xData = chart.views[0].data.x;
  var yData = chart.views[0].data.y;
  
  xData[0].data.forEach(function(type, idx) {
    if (!fullData[type]) {
      fullData[type] = parseInt(+yData[0].data[idx]);
    }
    fullData['全部'] += parseInt(+yData[0].data[idx]);
  });
}

initAllData();


var angular = window.parent.angular;
var $rootScope = angular.element('body').scope().$root;
var listenEventName = 'event_bus_8';

setTimeout(function() {
  //var type = $rootScope['$$'+listenEventName];
  var type = '全部';
  TOTAL_COUNT = (fullData[type] + '').length;
  draw(fullData[type]);
}, 1000);

if (angular.element('#' + chart.ct_id).length > 0) {
  var $off = $rootScope.$on(listenEventName, function(a, b){
    TOTAL_COUNT = (fullData[b] + '').length;
    draw(fullData[b]);
  });

  angular.element('#' + chart.ct_id).scope().$on('$destroy', function() {
    console.log('off');
    $off();
  });
}
*/


var numbers = ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAzUlEQVRYR+1XwQ3DIAz0kcFKN0lfpFM0W0R5td0kk3EVVKoqEslCCe3H+fDI4YM7y8aQxh8ax5cVwUT2jnKvJSblMXS4lPsOIxDKM3ToVYLak2v4fIMkC6Kctq6oBSj/l7EywRzJtAaH3aaXsYxgZZFJpGatSWQStatFS4SMV2BRRVYAE+kdZQwOPkF3V0/tQEagKfT2YI481GRQboPD+WOytcxvI6xcq2lpEplE7Tpa2+d7nsui+K0RSHW1AJSxft/RbMr8zxhbmyk1+Beoghg9aglGlgAAAABJRU5ErkJggg==",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAk0lEQVRYR+2XsQ3EMAwDRWWwdzZxKmeLzxZBlrUCp/wv2FhNQNeCCB8JGoYlHyTvNwlQwtMRnREV3T77gm2oTxe4esRY3BzPbgn8mSxENPdCJESUAB1IT9EZUTzsaI6SUna/V5zephKgKRomI+y7O9YUk9NjKgFqshAJESVAB5Qiimh8QLxbaQtqSpvqRaMevA/RDYFHfC41thwMAAAAAElFTkSuQmCC",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAwElEQVRYR+2XQQ7CMAwE7fRh5CnlFPhFf1H1BPykL/OiRuLSViyWEk7OeeNNxqtYUem8tHN9ORjMwJggD68xIM/boNf9vmYGAnmVQUdq4D050zfvwYZYTS4fXM0NFgO2W5WktXYYHHociFjsJRAFIkqACrqnaAZygkwlae7y2NGBEyPzFNFiWE1luquuNCZOQZ1o+2g5a3yVhwGlGYgCESVABZGi3xDVIWOSz75AtAIRNP8fxMh0t+T/PXAfkWx4A+Fbqi5LaAzEAAAAAElFTkSuQmCC",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAtElEQVRYR+2XMQ7DIBRD/cnBSm+STOQW7S2iTmkviiMiZWkGC4m//cwOhmeLLwzOnzmvj5vBRs6J2HuNSXzXyZb//4YZgPiVyWZp0LtzpR+eQUNsFY8L13CDTyXbqUqyc+0wuGUciFTtEYgCkSQgBe4t2siciHdJll0uOzlwYmRKRLImQtBCNuK1Jnu6hOxe0zCQHQhEgUgSkIJokUR0DqyKfD2nhr8P5DyIkSkRyRQ7Be4hH43NqS6ooHATAAAAAElFTkSuQmCC",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAxElEQVRYR+2VUQ6CMBBEd8rBrDfBL/AUcgvil3oTTtYxkJiYQjIxtSaY5YcPdnfK22YGVvlB5fnmApLwgmgkWyQ79A1OskMU5LMWgWsi53cXULyTfJYLrDbiiOQtdkSOqJ4XTQk2nIFJQtZuGgNt6ALiXFrsnupAK4HZzwPtphrz76Tdt/LkawJGe3QN2lz494g+RZPXj2QE7dIHHKssedPsSk/93u8CkqYjckSSgCzwWyQRLYGVLL6yYX95sP9E+78/eAJBiMoulzKLjwAAAABJRU5ErkJggg==",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAxUlEQVRYR+1XwQ3DIBA7k8GabpK+kk7RbhH11XaTTIYrqPIJVS0k+B2fPDA42MdZwDoPdN7fCoKVnALtWUtM2msZcDmua0ZgtPc8YJIEtX+u8PkESRZEO/06otpAzWeCRyTTdw5obroTKAu+98A9+KeTS+RVJBWQgL2Ktgi7X4FNrqgENO+eMnA8MqVElR4W8JUcQbstAec02dzkY+t3gsIDl0hWsUvkEkkFJKB7FeXAijbuz6nmzU7mgUemlEiWSSWgu8kfxnGqLoe7cY4AAAAASUVORK5CYII=",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAzUlEQVRYR+1XQQ7CIBDcoQ+z/qSeWl+hv2h60v6kL2MMGGNCiRsipJfl0gPDTplZdgHSeKBxfNkRzOTgKI9SYlKeU4dLuq4agVDWscOgEpT+uYaPOwiywMspt0UtgDYfCRZPhu/oUN10I9AseJ8D8+CXTiaRZZGqgAr4ZNHmIfcrsKkrCgHVq6facKxlZiVaPKuZPJM9KLfJ4RzIqteitPQbwe7YmURqJTKJTKL/r+/ZLIpNxkufewKpoieANJa1zK9Ah74yS40swTc3+QXT7uku4owavAAAAABJRU5ErkJggg==",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAArklEQVRYR+1XQQrDMAyT3Yct+0l7Sn+x/aLs1O2jUUmhl/ZgCjEj4JwVK5YcGwucjzjHx4VgIUcl1rvEJL7zINP5XjMCEL88yGgS3H25hW/uQZVYCh6HXM0JPoWsWWWVPXYQXDwOiayyR0gUEpkKmAD3KlrIpMQ7qySXZtf/wOk/g2qyEK9Z5elisnuZBsH/W0V4EB6YCpiA/qto3/EK0rFONd8P+h84kYH5D86ADd4Yiy7oOpBtAAAAAElFTkSuQmCC",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAA0klEQVRYR+1XSQ6DMAz0hIeV/oSeQl9RfoE40f6El2WqcGirgGRFJGpVmQsHHE88Y7xAKj+o7F82ACPZOcqcC0zKvW9wSc8VAxDKwzfoVIDcm2v2awSRFgQ57YWoOUi/p75WgCmQ8e0dDoue+jKAjURGkZq1RpFRVK8WLQEyXIFFJVkxGMnWUQbv0EbTw9VTu1CxjvbnLXMKLCoyKLfe4fwS2VrmZ6paudZ+3M2MZXORzUVq0vwIReteFqTdW4FyY0h9Wct8M/jVLTNXyBz76iI/AQIOJz1eJiYRAAAAAElFTkSuQmCC",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAA1ElEQVRYR+1XwQ3DIAy0yWClm6Qv0imaLaK82m6SybgKpH5IpBMKPFo5nzy4+MydMbFK50c7x5cdwQKMDvKsJQbkNQ16K79rRiCQdxh0pAS1mTN83kGSRaNcjrbIApTrZaxMsEYgvYPT06aXsYxgZ5FJRKvWJDKJ+vWiLarMd9WNikwAC+AdZA5OfYKe7p4soWY32p9fmUzHmvVkskIek9NrF5MPm11NhgxrBEyh3S9Q85NsHpgHVAEK+P0qyjNeFP8dp5ofNDqj2ZRJJaJ1WAnobvIH9ILoLo66uyAAAAAASUVORK5CYII="];

var front = "";
$.each(numbers,function(k,v){
  front += '<img src="'+v+'" >';
})
$.each(numbers,function(k,v){
  front += '<img src="'+v+'" >';
})
var backNum = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAA2ElEQVRYR2NkoDFgpLH5DBgWaBgVJDAwMswn2eL/DAtunJuQiK6PehYwMCy8cXZCAkELSHY5AQ1gH4CDhYHBHpsXSbUQ3SyIBcYF/0H0jbMTKI50dLNGLcCIotEgIphqR4NoNIhoVRYZFRxg+MfQcOPChAMEA5mAAg2DAgcGJoaGG+cmOICUUlx6EnIQ9Wq0YV9lUjeSmRnqb5yd4AiP5NEqEzmpjhbXhDIuRhtrtF002i4imGgGSxBB+mUO2LpApPoB2seDmzVaZSKH4AD2MkmNSFLU0zySAXZpFT1t8csFAAAAAElFTkSuQmCC" >';



var container = chart.$elem;
container.append('<style>\
@font-face{font-family:display;src:url("http://15.75.7.13/daping/display.ttf")}\
.single-number{font-family: "display";line-height:50px;font-size:35px;color:rgba(153, 254, 255, 1);display: inline-block;height: 39px;overflow-y:  hidden;width:17px;}\
.single-number>div{transition: 1s all;}\
.single-number i{display:block;}\
.single-number img{width:15px;height:auto;}\
</style>')
var isFirst = true;
initAllData();
var fullData = {};
function initAllData() {
  var xData = chart.views[0].data.x;
  var yData = chart.views[0].data.y;
  var total = 0;
  xData[0].data.forEach(function(type, idx) {
    console.log(type)
   // if (!fullData[type]) {
   //   fullData[type] = +yData[0].data[idx];
   // }
    //fullData['全部'] += +yData[0].data[idx];
  total += parseInt(yData[0].data[idx].replace(",",""))
  });
  total = parseInt(total/10000*100)/100; //保留两位小数
  //total = total/10000;//保留四位小数
  initNumber(total);
  setTimeout(function(){
    initAllData();
  },20000)//刷新间隔
}




//滚动方案
/*
function initNumber(num){
  
 var str =num+"";




var back = "";
var html= "";
  
  for(var i =0;i<str.length;i++){
    var num = str.substr(i,1);
    if(num == "."){
      html += '<span  style="width:5px;color:rgba(153, 254, 255, 1);display:inline-block;font-size:25px;">.</span>'
      back += '<span  style="width:5px;color:rgba(153, 254, 255, 1);display:inline-block;font-size:25px;"></span>'
      continue;
    }
    html += '<span data-number="'+num+'" class="single-number" ><div  style="transition:'+(3+(i*4/10))+'s ';//滚动时长
    html +='all;'+'transform:translateY(-'+(num*5)+'%)"'+'">'+front+'</div></span>';
    
    back += '<span style="color:rgba(40, 51, 112, 1);font-size:36px;"  class="single-number" >'+backNum+'</span>';
    
  }
html = '<div id="nnn" style="position:relative;"><div style="position:absolute;">'+back+'</div><div style="position:absolute;">'+html+'</div></div>';
  $("#nnn").remove();
container.append(html);
setTimeout(function(){
  animate();

},300)
}








function animate(){
   $(".single-number").each(function(k,v){
    var number =  $(v).attr("data-number")
    if(!number){
      return true;
    }
    $(v).find("div").css("transform","translateY(-"+parseInt(number*5+50)+"%)");
    
    
    
    
  })
}

*/


//随机闪动方案
function initNumber(num){
  
 var str =num+"";




var back = "";
var html= "";
  for(var i =0;i<str.length;i++){
    var num = str.substr(i,1);
   // html += '<span data-number="'+num+'" class="single-number" ><div  style="transition:'+(2+(i*4/10))+'s ';//滚动时长
  //  html += 'all;'+'transform:translateY(-'+(num*5)+'%)"'+'">'+front+'</div></span>';
    if(num == "."){
      html += '<span  style="width:5px;color:rgba(153, 254, 255, 1);display:inline-block;font-size:25px;">.</span>'
      back += '<span  style="width:5px;color:rgba(153, 254, 255, 1);display:inline-block;font-size:25px;"></span>'
      continue;
    }
    
    
    var src = "";
    if(isFirst !== true){
      src = numbers[num];
    }
    html += '<span data-number="'+num+'" class="single single-number" ><div><img src="'+src+'" ></div></span>';
    back += '<span style="color:rgba(40, 51, 112, 1);font-size:36px;"  class="single-number" >'+backNum+'</span>';
  }
  
html = '<div id="nnn" style="position:relative;"><div style="position:absolute;">'+back+'</div><div style="position:absolute;">'+html+'</div></div>';
  $("#nnn").remove();
container.append(html);
  animate();
  
  
  
isFirst = false;
  
}








function animate(){
 
  
  var num = 0;
  var max = $(".single").length*5+12;
  var interval = setInterval(function(){
    	
    	$(".single").each(function(k,v){
          if(num < 12+(k*5)){
				$(v).find("img").prop("src",numbers[parseInt((Math.random()*10))])	
       		}else{
              				$(v).find("img").prop("src",numbers[parseInt($(v).attr("data-number"))])	

            }
        })
    	
    
    	if(num >=max){
          clearInterval(interval);
        }
    	num++;
    	
    
    
    
    
  },140);
  
  
  
  
  
} //随机闪动方法










// ..........................................

var numbers = ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAzUlEQVRYR+1XwQ3DIAz0kcFKN0lfpFM0W0R5td0kk3EVVKoqEslCCe3H+fDI4YM7y8aQxh8ax5cVwUT2jnKvJSblMXS4lPsOIxDKM3ToVYLak2v4fIMkC6Kctq6oBSj/l7EywRzJtAaH3aaXsYxgZZFJpGatSWQStatFS4SMV2BRRVYAE+kdZQwOPkF3V0/tQEagKfT2YI481GRQboPD+WOytcxvI6xcq2lpEplE7Tpa2+d7nsui+K0RSHW1AJSxft/RbMr8zxhbmyk1+Beoghg9aglGlgAAAABJRU5ErkJggg==",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAk0lEQVRYR+2XsQ3EMAwDRWWwdzZxKmeLzxZBlrUCp/wv2FhNQNeCCB8JGoYlHyTvNwlQwtMRnREV3T77gm2oTxe4esRY3BzPbgn8mSxENPdCJESUAB1IT9EZUTzsaI6SUna/V5zephKgKRomI+y7O9YUk9NjKgFqshAJESVAB5Qiimh8QLxbaQtqSpvqRaMevA/RDYFHfC41thwMAAAAAElFTkSuQmCC",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAwElEQVRYR+2XQQ7CMAwE7fRh5CnlFPhFf1H1BPykL/OiRuLSViyWEk7OeeNNxqtYUem8tHN9ORjMwJggD68xIM/boNf9vmYGAnmVQUdq4D050zfvwYZYTS4fXM0NFgO2W5WktXYYHHociFjsJRAFIkqACrqnaAZygkwlae7y2NGBEyPzFNFiWE1luquuNCZOQZ1o+2g5a3yVhwGlGYgCESVABZGi3xDVIWOSz75AtAIRNP8fxMh0t+T/PXAfkWx4A+Fbqi5LaAzEAAAAAElFTkSuQmCC",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAtElEQVRYR+2XMQ7DIBRD/cnBSm+STOQW7S2iTmkviiMiZWkGC4m//cwOhmeLLwzOnzmvj5vBRs6J2HuNSXzXyZb//4YZgPiVyWZp0LtzpR+eQUNsFY8L13CDTyXbqUqyc+0wuGUciFTtEYgCkSQgBe4t2siciHdJll0uOzlwYmRKRLImQtBCNuK1Jnu6hOxe0zCQHQhEgUgSkIJokUR0DqyKfD2nhr8P5DyIkSkRyRQ7Be4hH43NqS6ooHATAAAAAElFTkSuQmCC",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAxElEQVRYR+2VUQ6CMBBEd8rBrDfBL/AUcgvil3oTTtYxkJiYQjIxtSaY5YcPdnfK22YGVvlB5fnmApLwgmgkWyQ79A1OskMU5LMWgWsi53cXULyTfJYLrDbiiOQtdkSOqJ4XTQk2nIFJQtZuGgNt6ALiXFrsnupAK4HZzwPtphrz76Tdt/LkawJGe3QN2lz494g+RZPXj2QE7dIHHKssedPsSk/93u8CkqYjckSSgCzwWyQRLYGVLL6yYX95sP9E+78/eAJBiMoulzKLjwAAAABJRU5ErkJggg==",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAxUlEQVRYR+1XwQ3DIBA7k8GabpK+kk7RbhH11XaTTIYrqPIJVS0k+B2fPDA42MdZwDoPdN7fCoKVnALtWUtM2msZcDmua0ZgtPc8YJIEtX+u8PkESRZEO/06otpAzWeCRyTTdw5obroTKAu+98A9+KeTS+RVJBWQgL2Ktgi7X4FNrqgENO+eMnA8MqVElR4W8JUcQbstAec02dzkY+t3gsIDl0hWsUvkEkkFJKB7FeXAijbuz6nmzU7mgUemlEiWSSWgu8kfxnGqLoe7cY4AAAAASUVORK5CYII=",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAzUlEQVRYR+1XQQ7CIBDcoQ+z/qSeWl+hv2h60v6kL2MMGGNCiRsipJfl0gPDTplZdgHSeKBxfNkRzOTgKI9SYlKeU4dLuq4agVDWscOgEpT+uYaPOwiywMspt0UtgDYfCRZPhu/oUN10I9AseJ8D8+CXTiaRZZGqgAr4ZNHmIfcrsKkrCgHVq6facKxlZiVaPKuZPJM9KLfJ4RzIqteitPQbwe7YmURqJTKJTKL/r+/ZLIpNxkufewKpoieANJa1zK9Ah74yS40swTc3+QXT7uku4owavAAAAABJRU5ErkJggg==",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAArklEQVRYR+1XQQrDMAyT3Yct+0l7Sn+x/aLs1O2jUUmhl/ZgCjEj4JwVK5YcGwucjzjHx4VgIUcl1rvEJL7zINP5XjMCEL88yGgS3H25hW/uQZVYCh6HXM0JPoWsWWWVPXYQXDwOiayyR0gUEpkKmAD3KlrIpMQ7qySXZtf/wOk/g2qyEK9Z5elisnuZBsH/W0V4EB6YCpiA/qto3/EK0rFONd8P+h84kYH5D86ADd4Yiy7oOpBtAAAAAElFTkSuQmCC",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAA0klEQVRYR+1XSQ6DMAz0hIeV/oSeQl9RfoE40f6El2WqcGirgGRFJGpVmQsHHE88Y7xAKj+o7F82ACPZOcqcC0zKvW9wSc8VAxDKwzfoVIDcm2v2awSRFgQ57YWoOUi/p75WgCmQ8e0dDoue+jKAjURGkZq1RpFRVK8WLQEyXIFFJVkxGMnWUQbv0EbTw9VTu1CxjvbnLXMKLCoyKLfe4fwS2VrmZ6paudZ+3M2MZXORzUVq0vwIReteFqTdW4FyY0h9Wct8M/jVLTNXyBz76iI/AQIOJz1eJiYRAAAAAElFTkSuQmCC",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAA1ElEQVRYR+1XwQ3DIAy0yWClm6Qv0imaLaK82m6SybgKpH5IpBMKPFo5nzy4+MydMbFK50c7x5cdwQKMDvKsJQbkNQ16K79rRiCQdxh0pAS1mTN83kGSRaNcjrbIApTrZaxMsEYgvYPT06aXsYxgZ5FJRKvWJDKJ+vWiLarMd9WNikwAC+AdZA5OfYKe7p4soWY32p9fmUzHmvVkskIek9NrF5MPm11NhgxrBEyh3S9Q85NsHpgHVAEK+P0qyjNeFP8dp5ofNDqj2ZRJJaJ1WAnobvIH9ILoLo66uyAAAAAASUVORK5CYII="];

var front = "";
$.each(numbers,function(k,v){
  front += '<img src="'+v+'" >';
})
$.each(numbers,function(k,v){
  front += '<img src="'+v+'" >';
})
var backNum = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAA2ElEQVRYR2NkoDFgpLH5DBgWaBgVJDAwMswn2eL/DAtunJuQiK6PehYwMCy8cXZCAkELSHY5AQ1gH4CDhYHBHpsXSbUQ3SyIBcYF/0H0jbMTKI50dLNGLcCIotEgIphqR4NoNIhoVRYZFRxg+MfQcOPChAMEA5mAAg2DAgcGJoaGG+cmOICUUlx6EnIQ9Wq0YV9lUjeSmRnqb5yd4AiP5NEqEzmpjhbXhDIuRhtrtF002i4imGgGSxBB+mUO2LpApPoB2seDmzVaZSKH4AD2MkmNSFLU0zySAXZpFT1t8csFAAAAAElFTkSuQmCC" >';



var container = chart.$elem;
container.append('<style>\
@font-face{font-family:display;src:url("http://15.75.7.13/daping/display.ttf")}\
.single-number{font-family: "display";line-height:50px;font-size:35px;color:rgba(153, 254, 255, 1);display: inline-block;height: 50px;overflow-y:  hidden;width:26px;}\
.single-number>div{transition: 1s all;}\
.single-number i{display:block;}\
</style>')

var isFirst = true;
initAllData();
var fullData = {};
function initAllData() {
  var xData = chart.views[0].data.x;
  var yData = chart.views[0].data.y;
  var total = 0;
  xData[0].data.forEach(function(type, idx) {
    console.log(type)
   // if (!fullData[type]) {
   //   fullData[type] = +yData[0].data[idx];
   // }
    //fullData['全部'] += +yData[0].data[idx];
    total += parseInt(yData[0].data[idx].replace(",",""))
  });
  
  initNumber(total);
  setTimeout(function(){
    initAllData();
  },25000)//刷新间隔
}




//跳动方案

function initNumber(num){
  
 var str =num+"";




var back = "";
var html= "";
  for(var i =0;i<str.length;i++){
    var num = str.substr(i,1);
   // html += '<span data-number="'+num+'" class="single-number" ><div  style="transition:'+(2+(i*4/10))+'s ';//滚动时长
  //  html += 'all;'+'transform:translateY(-'+(num*5)+'%)"'+'">'+front+'</div></span>';
    
    var src = "";
    if(isFirst !== true){
      src = numbers[num];
    }
    html += '<span data-number="'+num+'" class="single single-number" ><div><img src="'+src+'" ></div></span>';
    back += '<span style="color:rgba(40, 51, 112, 1);font-size:36px;"  class="single-number" >'+backNum+'</span>';
  }
  
html = '<div id="nnn" style="position:relative;"><div style="position:absolute;">'+back+'</div><div style="position:absolute;">'+html+'</div></div>';
  $("#nnn").remove();
container.append(html);
  animate();
  
  
  
isFirst = false;
  
}








function animate(){
 
  
  var num = 0;
  var max = $(".single").length*5+12;
  var interval = setInterval(function(){
    	
    	$(".single").each(function(k,v){
          if(num < 12+(k*5)){
				$(v).find("img").prop("src",numbers[parseInt((Math.random()*10))])	
       		}else{
              				$(v).find("img").prop("src",numbers[parseInt($(v).attr("data-number"))])	

            }
        })
    	
    
    	if(num >=max){
          clearInterval(interval);
        }
    	num++;
    	
    
    
    
    
  },120);
  
  
  
  
  
} //随机跳动方法


//滚动方法
/*
function initNumber(num){
  
 var str =num+"";




var back = "";
var html= "";
  for(var i =0;i<str.length;i++){
    var num = str.substr(i,1);
    html += '<span data-number="'+num+'" class="single-number" ><div  style="transition:'+(2+(i*4/10))+'s ';//滚动时长
    html += 'all;'+'transform:translateY(-'+(num*5)+'%)"'+'">'+front+'</div></span>';
    
    back += '<span style="color:rgba(40, 51, 112, 1);font-size:36px;"  class="single-number" >'+backNum+'</span>';
  }
  
html = '<div id="nnn" style="position:relative;"><div style="position:absolute;">'+back+'</div><div style="position:absolute;">'+html+'</div></div>';
  $("#nnn").remove();
container.append(html);
  setTimeout(animate,300);

}








function animate(){
   $(".single-number").each(function(k,v){
    var number =  $(v).attr("data-number")
    if(!number){
      return true;
    }
    $(v).find("div").css("transform","translateY(-"+parseInt(number*5+50)+"%)");
    
    
    
    
  })
  
  
  
  
  
  
} //数字向上滚动方法

*/






























