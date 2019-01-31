/**
 * 把返回的时间在时钟上正确的映射，也就是说把旋转的度数与时间一一对应。
 * 360度对应12个小时，60分钟，60秒，就相应得出1hour→30度，1minute→6度，1second→6度的关系。
 * 为了方便使用，我把以上JS改了一下，直接改成度数值。
 */

/**
 * 比如08:59:59在下一秒09:00:00时，时针会从8大幅度的跳向9。
 * 60minutes→1hour→30度，即1minute→0.5度。每1分钟，时针增加0.5度。同理，每1秒钟，分针增加0.1度
 */



function $(id){
  var idValue=document.getElementById(id);
  return idValue;
}


var dt=new Date();
//时针度数修正,增加分针对应的度数
var hourDeg=dt.getHours()*30 + dt.getMinutes()*0.5;
//分针度数修正，增加秒针对应的度数
var minuteDeg=dt.getMinutes()*6+dt.getSeconds()*0.1;
var secondDeg=dt.getSeconds()*6;

//以下为显示系统时间用，可以删除

function now(){
dt=new Date();
$("now").innerText=dt.getHours()+"："+dt.getMinutes()+"："+dt.getSeconds();
}
now();
setInterval(now,1000);

//创建一个新的CSS style标签
var style = document.createElement("style");
style.type = "text/css";
//定义一个新的style标签内容的函数，动画规则名称和初始度数作为参数
function newKeyFrames(name,degree){
var keyFrames = "@keyframes "+name+" {\
0% {transform: rotate("+degree+"deg);}\
100%{transform:rotate("+(degree+360)+"deg)}}";
//因为是新的style标签内容中不断增加新定义的动画规则，所以改成+=
style.innerHTML += keyFrames;
}

//时针的动画规则名称和初始旋转度数作为参数传入
newKeyFrames("hour",hourDeg);
//分针的动画规则名称和初始旋转度数作为参数传入
newKeyFrames("minute",minuteDeg);
//秒针的动画规则名称和初始旋转度数作为参数传入
newKeyFrames("second",secondDeg);

//把新的动画规则标签追加到svg元素中,这里使用要灵活，如果CSS是放到SVG外面的，则需要修改
document.getElementsByTagName('svg')[0].appendChild(style);