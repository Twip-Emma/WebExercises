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

//     var prev = document.getElementById('prev'); //?????????
//     var next = document.getElementById('next'); //?????????


//     /*??????????????????**/
//     next.onclick = function() {

//         animate(-1); //???????????????-600
//     }
//     prev.onclick = function() {

//         animate(1); //???????????????600
//     }

//     var wp_list = document.getElementById("list");
//     console.log(wp_list);
//     var index = 1; //????????????

//     function animate(wp_set) {
//         wp_px = index * 960;
//     }
// function animate(set) { //?????????????????????????????????set
//     //toString??????????????????????????????????????????????????????
//     //???????????????html?????????list
//     var newLeft = parseInt(list.style.left) + set;
//     //var time = 3000; //???????????????
//     //var interval = 10; //????????????
//     //var set = set / (time / interval); //???????????????

//     function go() {
//         if ((set < 0 && parseInt(list.style.left) > newLeft) || (set > 0 && parseInt(list.style.left) < newLeft)) {
//             list.style.left = parseInt(list.style.left) + set + 'px';
//             /*?????????*/
//             //setTimeout(go, interval);
//             // if(parseInt(list.style.left)>)
//         }
//     }
//     go();
// }
// }

//var list = document.getElementById('list');