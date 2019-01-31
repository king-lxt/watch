/**
 * 把返回的时间在时钟上正确的映射，也就是说把旋转的度数与时间一一对应。360度对应12个小时，60分钟，60秒，就相应得出1hour→30度，1minute→6度，1second→6度的关系。为了方便使用，我把以上JS改了一下，直接改成度数值。
 */


var dt=new Date();
//获取小时
var hour=dt.getHours();
//获取分
var minute=dt.getMinutes();
//获取秒
var second=dt.getSeconds();
 //小时对应的旋转度数
var hourDeg=dt.getHours()*30;
//分钟对应的旋转度数
var minuteDeg=dt.getMinutes()*6;
//秒对应的旋转度数
var secondDeg=dt.getSeconds()*6;

//定义同步时间的函数
function syn(){
    
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
