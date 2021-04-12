//这几天把之前搞得算法题全都搞下来
//排序
//给定数组
const arr = [15,256,24,75,2,123,76]
//冒泡排序(升序排列)
function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]){
                //调换两者位置
                [arr[j],arr[i]] = [arr[i],arr[j]]
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr));

//直接插入排序
function straightInsertSort(arr){
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i]
        for (let j = i; j < newArr; j++) {
            if (index > arr[j]){
                index = arr[j]
            }
        }
        newArr.push(index)
    }
    return newArr;
}

console.log(straightInsertSort(arr));

//希尔排序
//希尔排序是直接插入排序的一种改良，他能在大数据排序中效率更好
//他需要一个分组间隔
function shellSort(arr,interval){
    //根据间隔进行排序
    let len = arr.length,
        gap = 1;
    while (gap < len/interval){
        gap = gap*interval+1
    }
    //以上是设置动态增量算法
    //下面是实现插入环节
    while (gap >= 1){
        for (let i = 0; i < len; i++) {
            for (let j = i; j >= gap && arr[j] < arr[j-gap]; j -= gap) {
                [arr[j],arr[j-gap]] = [arr[j-gap],arr[j]] //进行一轮交换
            }
        }
        gap = (gap-1)/interval;
    }
    //返回原数组
    return arr
}

console.log(shellSort(arr, 4));