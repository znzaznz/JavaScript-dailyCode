//今天练习JS正则多项式的题目
//题目一：写一个正则表达式，使其能同时识别下面所有的字符串：’bat’,’bit’, ‘but’, ‘hat’, ‘hit’, ‘hut’
{
    function regex01(item){
        return !!item.match(/[bh][aiu]t/g)
    }
    const arr = ['bat','bit','but','hat','hit','hut','mut']
    arr.map(item=>console.log(regex01(item))) // 期待除了最后一个，全是true
}
//题目二：匹配由单个空格分隔的任意单词对，也就是姓和名
//测试用句：'my  name  is  xiao znz','amier li  tonight   is  18'
{
    function regex02(item){
        return item.match(/\w+\s\w+/g)
    }

    console.log(regex02("my  name  is  xiao znz")); // xiao znz
    console.log(regex02("amier li  tonight   is  18")); //amier li
}
//题目三：匹配由单个逗号和单个空白符分隔的任何单词和单个字母,如姓氏的首字母
{
    function regex03(item){
        return item.match(/[\w]+[,\s][\w]/) // /\w+[,\s]\w+/
    }
    ['li lei','han meimei','jack u','wu yifan','sdfsdf'].map(item=>console.log(regex03(item)))
}
//题目四：所有标识符可以包括英文、数字以及下划线（_），但不能以数字和其他字符开头。请匹配所有标识符要求的字符
{
    function regex04(item){
        return item.match(/[\w_].*/g)
    }
    ['_abstract','python_1','2hello','Pra_','@sdfasdf'].map(item=>console.log(regex04(item)))
}
//接下来加大难度
//题目五：根据美国街道地址格式,匹配街道地址。美国街道地址使用如下格式:1180 Bordeaux Drive。
// 使你的正则表达式足够灵活,以支持多单词的街道名称,如3120 De la Cruz Boulevard
{
    function regex05(item){
        return item.match(/\d{1,5}\s\w+\s\w+[\s]?\w*/)
    }
    ['3120 De la Cruz Boulevard','1180 Bordeaux Drive','345 sdfd sdf sdf','sdfs sdfs sdf'].map(item=>{
        console.log(regex05(item))
    })
}
//题目6：匹配以“www”起始且以“.com”结尾的简单Web域名:例如,http://www.yahoo.com ，也支持其他域名，如.edu .net等
{
    function regex06(item){
        return item.match(/(www)\w*\.(com|edu|net)/g) //考点在于转义符以及()
    }

    console.log('www.pluckytyx.top sdf www.plucky.com  sdf www.magnet.cn www.jiangnan.edu wmmm.asdf.com www.lll.net'.match(/(www)\.\w*\.(com|edu|net)/g));
}
//题目7：匹配所有能够表示JavaScript整数的字符串集
{
    function regex07(item){
        return item.match()
    }
    ['123','-123','---10','0009','0','0000','2342.3','453.45','0123','123','0019'].map(item=>console.log(regex07(item)))
}