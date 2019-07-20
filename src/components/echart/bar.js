export default function getdata () {
  var option = {

    tooltip: {},

    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36]
    }]
  };
  return option;
}