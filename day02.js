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

//快排
function quickSort(arr){
    //首先按照算法思路，我们要创立一个基准数，和两个空的左右数组，这里我们选择用数列第一个数做基准数
    const baseNum = arr[0]
    let leftArr = []
    let rightArr = []

    //现在我们要进行比较，比基准数大的数放在右数组，比基准数小的数组放在左边
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < baseNum){
            leftArr.push(arr[i])
        }else {
            rightArr.push(arr[i])
        }
    }

    //接着我们按照快排的条件，我们需要对生成的左右数组符合数组长度大于1的再次进行快排，并且返回排序的结果
    if (leftArr.length > 1) leftArr = quickSort(leftArr)
    if (rightArr.length > 1)rightArr = quickSort(rightArr)

    //最后将得到的快排结果合并即可
    return leftArr.concat(baseNum,rightArr)
}

//归并排序
function mergeSort(arr){
    if (arr.length === 1)return arr
    const middle = Math.floor(arr.length/2) // 求出中点
    const leftArr = arr.slice(0,middle)
    const rightArr = arr.slice(middle)
    return merge(merge(leftArr),merge(rightArr))

    //定义一下归并算法
    function merge(leftArr,rightArr){
        if (leftArr === undefined || leftArr === [])return rightArr
        if (rightArr === undefined || rightArr === [])return leftArr
        return leftArr[0] > rightArr[0] ?
            [leftArr[0]].concat(merge(leftArr.slice(1),rightArr)) :
            [rightArr[0]].concat(merge(leftArr,rightArr.slice(1)))
    }
}

//计数排序
//这个方法好快呀
function countSort(arr){
    const countObj = {}
    for (let i = 0; i < arr.length; i++) {
        if (countObj[arr[i]] === undefined){
            countObj[arr[i]] = 1
        }else {
            countObj[arr[i]]++
        }
    }
    //接下来将对象中的值出去并进行排序
    const newArr1 = [];
    for (let key in countObj){
        let flag = true
        for (let i = 0; i < newArr1.length; i++) {
            if (key < arr[i]){
                arr.splice(i,0,key)
                flag = false
            }
        }
        if (flag) newArr1.push(key)
    }

    console.log(newArr1);
    const newArr2 = []
    for (let i = 0; i < newArr1.length; i++) {
        if (countObj[newArr1[i]] > 1){
            for (let j = 0; j < countObj[newArr1[i]]; j++) {
                newArr2.push(parseInt(newArr1[i]))
            }
        }else {
            newArr2.push(parseInt(newArr1[i]))
        }
    }
    return newArr2
}

console.log(countSort(arr));