/**
 * Created by admin on 2017/11/11.
 */

var intArray=[1,2,3,4,5,6,7,8,9];
var flag=true;
var btn=document.getElementById('start');
btn.disabled=false;
//获取三个随机颜色
var getColor1 = function(){
    return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6);
}
var getColor2 = function(){
    return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6);
}
var getColor3 = function(){
    return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6);
}

//获取三个随机数
function getNum(arr, num) {
    var temp_array = new Array();
    for (var index in arr) {
        temp_array.push(arr[index]);
    }
    var return_array = new Array();
    for (var i = 0; i<num; i++) {
        if (temp_array.length>0) {
            var arrIndex = Math.floor(Math.random()*temp_array.length);
            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
        } else {
            break;
        }
    }
    return return_array;
}

//开始
function start() {
    var i = getNum(intArray, 3);

    for (var j = 1; j < 10; j++) {
        document.getElementById(j).style.background = 'orange';
    }

    document.getElementById(i[0]).style.background = getColor1();
    document.getElementById(i[1]).style.background = getColor2();
    document.getElementById(i[2]).style.background = getColor3();
    if (flag == true) {
        setTimeout('start()', 1000);
        btn.disabled=true;
    }
    else
        for (var i = 1; i < 10; i++) {
            document.getElementById(i).style.background = 'orange';
            btn.disabled=false;
        }
    flag = true;
}

//停止
function stop(){
    flag=false;
}
