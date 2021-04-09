//今天练习JS正则多项式的题目
//题目一：写一个正则表达式，使其能同时识别下面所有的字符串：’bat’,’bit’, ‘but’, ‘hat’, ‘hit’, ‘hut’
// {
//     function regex01(item){
//         return !!item.match(/[bh][aiu]t/g)
//     }
//     const arr = ['bat','bit','but','hat','hit','hut','mut']
//     arr.map(item=>console.log(regex01(item))) // 期待除了最后一个，全是true
// }
//题目二：匹配由单个空格分隔的任意单词对，也就是姓和名
//测试用句：'my  name  is  xiao znz','amier li  tonight   is  18'
// {
//     function regex02(item){
//         return item.match(/\w+\s\w+/g)
//     }
//
//     console.log(regex02("my  name  is  xiao znz")); // xiao znz
//     console.log(regex02("amier li  tonight   is  18")); //amier li
// }
//题目三：匹配由单个逗号和单个空白符分隔的任何单词和单个字母,如姓氏的首字母
// {
//     function regex03(item){
//         return item.match(/[\w]+[,\s][\w]/) // /\w+[,\s]\w+/
//     }
//     ['li lei','han meimei','jack u','wu yifan','sdfsdf'].map(item=>console.log(regex03(item)))
// }
//题目四：所有标识符可以包括英文、数字以及下划线（_），但不能以数字和其他字符开头。请匹配所有标识符要求的字符
// {
//     function regex04(item){
//         return item.match(/[\w_].*/g)
//     }
//     ['_abstract','python_1','2hello','Pra_','@sdfasdf'].map(item=>console.log(regex04(item)))
// }
//接下来加大难度
//题目五：根据美国街道地址格式,匹配街道地址。美国街道地址使用如下格式:1180 Bordeaux Drive。
// 使你的正则表达式足够灵活,以支持多单词的街道名称,如3120 De la Cruz Boulevard
// {
//     function regex05(item){
//         return item.match(/\d{1,5}\s\w+\s\w+[\s]?\w*/)
//     }
//     ['3120 De la Cruz Boulevard','1180 Bordeaux Drive','345 sdfd sdf sdf','sdfs sdfs sdf'].map(item=>{
//         console.log(regex05(item))
//     })
// }
//题目6：匹配以“www”起始且以“.com”结尾的简单Web域名:例如,http://www.yahoo.com ，也支持其他域名，如.edu .net等
// {
//     function regex06(item){
//         return item.match(/(www)\w*\.(com|edu|net)/g) //考点在于转义符以及()
//     }
//
//     console.log('www.pluckytyx.top sdf www.plucky.com  sdf www.magnet.cn www.jiangnan.edu wmmm.asdf.com www.lll.net'.match(/(www)\.\w*\.(com|edu|net)/g));
// }
//题目7：匹配所有能够表示JavaScript整数的字符串集
// {
//     function regex07(item){
//         return item.match(/[[^(-|0)]{2,}?\d+/)
//     }
//     ['123','-123','---10','0009','0','0000','2342.3','453.45','0123','123','0019'].map(item=>console.log(regex07(item)))
// }
//题目8：提取’‘nihao 2018-08-08 02:29:01 hhh’‘中完整的年月日和时间字段
// {
//     function regex08(item){
//         const year =  item.match(/\d{4}-\d{2}-\d{2}/)
//         const time = item.match(/\d{2}:\d{2}:\d{2}/)
//         return [year,time]
//     }
//
//     console.log(regex08("nihao 2018-08-08 02:29:01 hhh"));
// }
// //题目9：提取用js获得的时间的年月日和时间字段
// {
//     function getDate(){
//         const date = new Date().toString();
//         console.log(date); //Fri Apr 09 2021 13:35:26 GMT+0800
//         const year = date.match(/\s\d{4}\s/)[0]
//         const month = date.match(/[\w]+/g)[1]
//         const day = date.match(/\w+/)[0]
//         const time = date.match(/\d{2}:\d{2}:\d{2}/)[0]
//         return [year,month,day,time]
//     }
//
//     console.log(getDate());
// }
//题目10：将以下网址提取出域名：
//http://www.interoem.com/messageinfo.asp?id=35`
// http://3995503.com/class/class09/news_show.asp?id=14
// http://lib.wzmc.edu.cn/news/onews.asp?id=769
// http://www.zy-ls.com/alfx.asp?newsid=377&id=6
// http://www.fincm.com/newslist.asp?id=415
// {
//     function regex10(item){
//         return item.match(/(w){3}\.\w+\.\w+/)
//     }
//
//     console.log(regex10("http://www.fincm.com/newslist.asp?id=415"));
// }

// function myTrim(str){
//     if (typeof str !== "string"){
//         return "输入的类型不对"
//     }else {
//         return str.replace(/^\s+|\s+$/g,"")
//     }
// }
//
// console.log(myTrim("   xidsds  ao  "));