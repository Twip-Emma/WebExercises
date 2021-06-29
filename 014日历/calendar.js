function calendar(year) {

    //获取一个日期对象
    //返回一个长度为7数组
    var week = new Date(year, 0).getDay();

    var html = '<div class="box">';

    // 遍历月份
    for (var month = 1; month <= 12; ++month) {
        // 新的月份，新建一个table
        html += '<table>';
        html += '<tr class="title"><th colspan="7">' + year + ' 年 ' + month + ' 月</th></tr>';
        html += '<tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr>';

        //获取这一年这个月的天数max
        var max = new Date(year, month, 0).getDate();

        html += '<tr>';
        //遍历每一天
        for (var day = 1; day <= max; ++day) {
            if (week && day == 1) {
                html += '<td colspan="' + week + '"> </td>';
            }
            html += '<td>' + day + '</td>';
            if (week == 6 && day != max) {
                html += '</tr><tr>';
            } else if (day == max) {
                html += '</tr>';
            }
            week = (week + 1 > 6) ? 0 : week + 1;
        }
        html += '</table>';
    }
    html += '</div>';
    return html;
}