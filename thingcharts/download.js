//引入相关资源包
var fs = require("fs");
var path = require("path");
var request = require("request");

/**
 * 从页面上查看接口返回的数据，然后使用这段代码形成chartMaps
 * */
//  data.map(item=>{
//    const attrs = JSON.parse(item.attrs)
//    return {name:attrs['名称'],publishId:attrs.publishId}
//  })

let count = 0;
function getfileByUrl(url, fileName, dir) {
  let stream = fs.createWriteStream(path.join(dir, fileName));
  request(url)
    .pipe(stream)
    .on("close", function (err) {
      count++;
      if (count == fileUrls.length) {
        callback();
      }
    });
}
const baseUrl = "https://charts.thingjs.com/s-static/component/";
const savePath = path.resolve(__dirname, "dir");

const chartNames = [
  { name: "柱状图" },
  { name: "折线柱状图" },
  { name: "Echarts堆叠柱状图", alias: "ECharts 堆叠柱状图" },
  { name: "垂直分组柱状图" },
  { name: "折线图" },
  { name: "Echarts折叠折线图", alias: "ECharts堆叠折线图" },
  { name: "Echarts基本折线图", alias: "ECharts基本折线图" },
  { name: "Echarts连续折线图", alias: "ECharts连续折线图" },
  { name: "条形图" },
  { name: "Echarts正负条形图", alias: "ECharts正负条形图" },
  { name: "Echarts堆叠条形图", alias: "ECharts堆叠条形图" },
  { name: "百分比条形图" },
  { name: "饼图" },
  { name: "环图" },
  { name: "单值百分比饼图" },
  { name: "Echarts玫瑰图", alias: "ECharts玫瑰图" },
  { name: "汽泡图", alias: "气泡图" },
  { name: "散点图", alias: "基本散点图" },
  { name: "Echarts大规模散点图", alias: "ECharts大规模散点图" },
  { name: "Echarts单轴气泡图", alias: "ECharts单轴气泡图" },
  { name: "雷达图" },
  { name: "Echarts雷达图", alias: "ECharts雷达图" },
  { name: "E-chart仪表盘", alias: "ECharts仪表盘" },
  { name: "仪表盘" },
];
const finalChartNames = chartNames.map((chart) => {
  return chart.alias || chart.name;
});
const chartMaps = [
  { name: "折线柱状图", publishId: "5301971081c84ab8963752b150bbc11a" },
  { name: "对比柱状图", publishId: "8f13ffc82e8b4a8d95f09b220e7af832" },
  { name: "柱状图", publishId: "64e503b845084a37a26b16fa6fe29461" },
  { name: "ECharts 堆叠柱状图", publishId: "3409765518a14e40b920f2f11aa07107" },
  { name: "弧形柱状图", publishId: "aa39cc7ee19e4c9c8c823c16ba24da69" },
  { name: "区间柱状图", publishId: "d221c2ca50c644609347c574891ce069" },
  { name: "梯形柱状图", publishId: "9e666f5a2d954987b1765bc0de512d48" },
  { name: "垂直胶囊柱状图", publishId: "f2d82e02ef334d9fbf0d3bd4413ad76a" },
  { name: "ECharts阶梯瀑布图", publishId: "467734bea739423d8ae068ece0ef7135" },
  { name: "ECharts象形柱图", publishId: "925ff401ebed4e3eb449f9c2a3b4ea76" },
  {
    name: "ECharts标注气泡柱状图",
    publishId: "256639649b0d4422a7e1327c974dbf66",
  },
  { name: "斑马柱状图", publishId: "2465fc4fdcc142e68b89bbfc00e2ae27" },
  {
    name: "ECharts极坐标堆叠柱图",
    publishId: "b8c9a9eab08c49358cba3d878c967ee4",
  },
  { name: "双y轴柱状图", publishId: "05a1aa92b230410f8ccc4cc21e9b3def" },
  { name: "双轴折线柱状图", publishId: "9c78342fbe8141a28fe739607211b2e2" },
  { name: "双柱状图", publishId: "6d904aa4e5324514b8b4e72815c5e0be" },
  { name: "ECharts柱状图", publishId: "cfe7524b42be4752bc70b0a223abefe6" },
  { name: "垂直分组柱状图", publishId: "9c5aecd943e949168afd487fc97d7142" },
  { name: "垂直堆叠柱状图", publishId: "1e5faf9743ec41b8b4f3d8ab0d34da55" },
  { name: "百分比柱状图", publishId: "59f5879645a3450ab68d02d5c34cec81" },
  { name: "瀑布柱状图", publishId: "e13335495d674defaf5c1f8645f1bfc9" },
  { name: "条形图", publishId: "1363037e1d054467a887e8b5b18a388a" },
  { name: "ECharts堆叠条形图", publishId: "8a70956b409e45e2bc98f573f933509c" },
  { name: "双11消费屏柱图", publishId: "3d390ea96a3b4708a1f50c1f33eaed5e" },
  { name: "双11轮播列表柱状图", publishId: "3c4c38983209475898072f10b6779c3f" },
  { name: "水平胶囊柱状图", publishId: "d020e80e47504488b94ea469ea4efa61" },
  { name: "分组柱状图", publishId: "af2f5d3d25f649e6915593f47acc5503" },
  { name: "ECharts正负条形图", publishId: "f90359804683478b911b9942bd7c3900" },
  { name: "条形面积图", publishId: "18f510b1ee7e4da099058f44bfc2aa77" },
  { name: "百分比条形图", publishId: "d645931ab74d4afb83adea43474b7d1d" },
  { name: "折线图", publishId: "239851da67ea492dbbb5fddeda518d8c" },
  { name: "ECharts24时折线图", publishId: "228a119e71b646359bfd91d194e9337e" },
  { name: "ECharts瀑布图", publishId: "6824f3d70e544adca69d0bb77adf6df4" },
  { name: "EChartsK线图", publishId: "541044d1a5804dd0abbfaa082a13f602" },
  { name: "ECharts基本折线图", publishId: "867cd4609d1b4f7fb522d72d477f39f2" },
  { name: "ECharts连续折线图", publishId: "5904f39fb247432b9cb38e3072058206" },
  { name: "ECharts堆叠折线图", publishId: "56f39d7fba684ed4990c688dafe0fc06" },
  { name: "ECharts阶梯折线图", publishId: "2f32b0d00e294d90872048771d25147b" },
  {
    name: "ECharts颜色分段折线图",
    publishId: "fb69f4cce1ed4ba09d67eeace072a11b",
  },
  { name: "三维折线图", publishId: "293bdae106b44d87af1e33471fdd9c6b" },
  { name: "双折线图", publishId: "fdcd5befc4c84eb586c97baa9d4e6805" },
  { name: "双轴折线图", publishId: "f681a802ea5f431da657ffadb71ee351" },
  { name: "区域翻牌器", publishId: "8ea9b8361b2e4c7f83db881761de06ab" },
  { name: "ECharts玫瑰图", publishId: "2e3f785b847747698700b0f5a39a0b47" },
  { name: "多维度饼图", publishId: "eeb78643d8ce47cba12c893e8be1d73d" },
  { name: "带图饼图", publishId: "ec9e86005f494e10b44d30dde588fe3d" },
  { name: "指标对比饼图", publishId: "c93e0693392a483189fa9f199944f389" },
  { name: "环图", publishId: "f2402e66fa9c4a3bacec00cf8d81f643" },
  { name: "双11多维度饼图", publishId: "c7f3c9be602c4507867394d6e078bc3b" },
  { name: "饼图", publishId: "2244101d301546939b04b3a54018eac9" },
  { name: "指标占比饼图", publishId: "1c3cfec1afce40d18e5e1c2a0a57046e" },
  { name: "目标占比饼图", publishId: "c36a6c6ee6d44772b65ffd3a446e9a6b" },
  { name: "标注对比饼图", publishId: "137bb4cf5c4e44299da3ad087adc4f6d" },
  { name: "单值百分比饼图", publishId: "7fa734bb932846eebf3a01e1cdcbd7b8" },
  { name: "仪表盘", publishId: "6ffbb763438741afabd69a8032cd76a8" },
  { name: "分类玫瑰图", publishId: "cd7137d2edf949808042593adfa809df" },
  { name: "轮播饼图", publishId: "28480911ca96475d895b668ba44d4da2" },
  { name: "基本散点图", publishId: "b9b691863ca54275bb42fb754f99f40c" },
  { name: "ECharts单轴气泡图", publishId: "2451886686854a11b7d7560195389e68" },
  { name: "气泡图", publishId: "790e27d045174a6fa8facb00443d25bb" },
  {
    name: "ECharts大规模散点图",
    publishId: "9abe04b86d91429ca2b691fb8e7e55dd",
  },
  { name: "ECharts雷达图", publishId: "53adeeb414084787a3b216379f96babb" },
  { name: "雷达图", publishId: "64832273739d444cb41742f71a73194a" },
  { name: "旭日图", publishId: "92eb86f422714894ab35f978796c995d" },
  { name: "ECharts 网络图", publishId: "45f9cd8c334e4b2bbbd9d4cd375dd422" },
  { name: "网图-关系网络", publishId: "4d570e064107483783124272922f26d2" },
  { name: "ECharts桑基图", publishId: "12f4a57a58ca466c98037eaacba343c4" },
  { name: "流程图", publishId: "9c43af0d8a8d4c11a8460b59ecff887a" },
  { name: "漏斗图", publishId: "9945e43b1fd8443fb4b781c10ca4914d" },
  { name: "ECharts仪表盘", publishId: "dae92cb88d7d45409796c314c9cf6018" },
  {
    name: "ECharts词云图（无动画）",
    publishId: "ab33c64178ae43febca84bd93e8eee77",
  },
  { name: "ECharts漏斗图", publishId: "feb0226bdc254e87b40db819d060187e" },
  { name: "ECharts日历图", publishId: "6675f6a8129944bcb46c0de7f55f5111" },
  { name: "ECharts热力图", publishId: "2595ad74e8eb40c0bf4fcaea8fe761ff" },
  { name: "多柱状图", publishId: "0b204f782baa4fe28069b84b354e7e05" },
  {
    name: "HighChart词云图（带动画）",
    publishId: "d6c3db39aef843c59a88e685182cd4b9",
  },
];
let fileUrls = [];
chartMaps.forEach((chart) => {
  const { name, publishId } = chart;
  if (finalChartNames.includes(name)) {
    fileUrls.push(publishId);
  }
});
console.log("fileUrls", fileUrls);
const { exportFiles } = require("./handlecharts.js.js");
function callback() {
  exportFiles(chartNames, chartMaps);
}
fileUrls.forEach((fileUrl) => {
  const fullUrl = baseUrl + fileUrl + ".js";
  getfileByUrl(fullUrl, fileUrl + ".js", savePath);
});
