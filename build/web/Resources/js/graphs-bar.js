/* Bar graph start */
/* left and right buttons start */
$('#left_scroll').click(function () {
    var leftPos = $('div.outer_container').scrollLeft();
    console.log(leftPos);
    $("div.outer_container").animate({
        //scrollLeft: leftPos - 210
        scrollLeft: leftPos - 242
    }, 400);
});

$('#right_scroll').click(function () {
    var leftPos = $('div.outer_container').scrollLeft();
    console.log(leftPos);
    $("div.outer_container").animate({
        //scrollLeft: leftPos + 232
        scrollLeft: leftPos + 242
    }, 400);
});
/* left and right buttons end */
/* Graph start */
var myData = new Array(['Jan', 15220], ['Feb', 17320], ['Mar', 12100], ['Apr', 13500], ['May', 15220], ['Jun', 17320], ['Jul', 12100], ['Aug', 13500], ['Sep', 15220], ['Oct', 17320], ['Nov', 12100], ['Dec', 13500]);
var colors = ['#cf3f27', '#cf3f27', '#f1bb46', '#cf3f27', '#cf3f27', '#cf3f27', '#f1bb46', '#cf3f27', '#cf3f27', '#cf3f27', '#f1bb46', '#cf3f27',];
var myChart = new JSChart('graph', 'bar');
myChart.setDataArray(myData, 'first line');
myChart.colorizeBars(colors);
myChart.setTitle('');
myChart.setTitleColor('#3c474e');
myChart.setAxisNameX('');
myChart.setAxisNameY('');
myChart.setAxisColor('#C4C4C4');
myChart.setAxisNameFontSize(16);
myChart.setAxisNameColor('#999');
myChart.setAxisValuesColor('#777');
myChart.setAxisColor('#B5B5B5');
myChart.setAxisWidth(1);
myChart.setBarValuesColor('#3c474e');
myChart.setBarOpacity(0.5);
myChart.setAxisPaddingTop(20);
myChart.setAxisPaddingBottom(20);
myChart.setAxisPaddingLeft(45);
myChart.setTitleFontSize(11);
myChart.setBarBorderWidth(0);
myChart.setBarSpacingRatio(95);
myChart.setBarOpacity(0.9);
myChart.setFlagRadius(6);
myChart.setTooltipPosition('nw');
myChart.setTooltipOffset(3);
myChart.setSize(1000, 210);
myChart.setGridColor('#f5f5f5');
myChart.setBackgroundColor('#f5f5f5');
myChart.draw();
/* Graph end */
/* Bar graph end */
