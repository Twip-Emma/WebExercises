window.onload = function() {
    var index_qwq = parseInt(list.style.left);
    console.log(parseInt(list.style.left));
    var left = document.getElementById("prev");
    var right = document.getElementById("next");
    left.onclick = function() {
        var check = check_wp(parseInt(list.style.left));
        if (!check) {
            return;
        }
        index_qwq = parseInt(list.style.left);
        console.log(parseInt(list.style.left) + 960);
        if (index_qwq >= -1460) {
            index_qwq = -6260;
        }
        //1
        var stop = 0;
        //list.style.left = index_now + change + "px";
        var go = setInterval(left_frame, 1);

        function left_frame() {
            if (stop >= 965) {
                clearInterval(go);
            } else {
                list.style.left = index_qwq + stop + "px";
                stop += 5;
            }
        }
    }
    right.onclick = function() {
        var check = check_wp(parseInt(list.style.left));
        if (!check) {
            return;
        }
        //list.style.left = index_qwq - 960 + "px";
        index_qwq = parseInt(list.style.left);
        console.log(parseInt(list.style.left) - 960);
        if (index_qwq <= -5300) {
            index_qwq = -500;
        }
        var stop = 0;
        //list.style.left = index_now + change + "px";
        var go = setInterval(left_frame, 1);

        function left_frame() {
            if (stop >= 965) {
                clearInterval(go);
            } else {
                list.style.left = index_qwq - stop + "px";
                stop += 5;
            }
        }
    }

    function check_wp(E) {
        if (E == 1420 || E == 460 || E == -500 || E == -1460 || E == -2420 || E == -3380 || E == -4340 || E == -5300 || E == -6260 || E == -7220) {
            return true;
        } else {
            return false;
        }
    }
}



// window.onload = function() {
//     var container = document.getElementById('container');

//     var prev = document.getElementById('prev'); //上一个
//     var next = document.getElementById('next'); //下一个


//     /*箭头点击事件**/
//     next.onclick = function() {

//         animate(-1); //点击右箭头-600
//     }
//     prev.onclick = function() {

//         animate(1); //点击左箭头600
//     }

//     var wp_list = document.getElementById("list");
//     console.log(wp_list);
//     var index = 1; //定位图片

//     function animate(wp_set) {
//         wp_px = index * 960;
//     }
// function animate(set) { //封装按钮左右点击，传参set
//     //toString函数可解析一个字符串，并返回一个整数
//     //直接获取了html里面的list
//     var newLeft = parseInt(list.style.left) + set;
//     //var time = 3000; //位移总时间
//     //var interval = 10; //位移间隔
//     //var set = set / (time / interval); //每次位移量

//     function go() {
//         if ((set < 0 && parseInt(list.style.left) > newLeft) || (set > 0 && parseInt(list.style.left) < newLeft)) {
//             list.style.left = parseInt(list.style.left) + set + 'px';
//             /*定时器*/
//             //setTimeout(go, interval);
//             // if(parseInt(list.style.left)>)
//         }
//     }
//     go();
// }
// }

//var list = document.getElementById('list');