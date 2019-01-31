/**
 * 把返回的时间在时钟上正确的映射，也就是说把旋转的度数与时间一一对应。
 * 360度对应12个小时，60分钟，60秒，就相应得出1hour→30度，1minute→6度，1second→6度的关系。
 * 为了方便使用，我把以上JS改了一下，直接改成度数值。
 */

/**
 * 比如08:59:59在下一秒09:00:00时，时针会从8大幅度的跳向9。
 * 60minutes→1hour→30度，即1minute→0.5度。每1分钟，时针增加0.5度。同理，每1秒钟，分针增加0.1度
 */

var dt=new Date();
//获取小时
var hour=dt.getHours();
//获取分
var minute=dt.getMinutes();
//获取秒
var secondDeg=dt.getSeconds()*6;
var hourDeg=dt.getHours()*30 + dt.getMinutes()*0.5;
//分针度数修正，增加秒针对应的度数
var minuteDeg=dt.getMinutes()*6+dt.getSeconds()*0.1;

//定义同步时间的函数
function syn(){
    //秒对应的旋转度数
    var $hour = document.getElementById("hour");
    var $min = document.getElementById("minute");
    var $sec = document.getElementById("second")

    //给时针追加旋转变形的类样式
    $hour.style.cssText="transform:rotate("+hourDeg+"deg)";
    //给分针追加旋转变形的类样式
    $min.style.cssText="transform:rotate("+minuteDeg+"deg)";
    //给秒针追加旋转变形的类样式
    $sec.style.cssText="transform:rotate("+secondDeg+"deg)";
}

syn ()


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
//把全部增加动画规则后的style样式标签追加到svg元素中
document.getElementsByTagName("svg")[0].appendChild(style);