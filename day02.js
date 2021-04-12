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

function shellSort(){

}