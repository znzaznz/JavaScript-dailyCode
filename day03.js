// 今天主要想写一个录播图
const divSection = document.querySelector("section")
const left = document.querySelector(".left")
const right = document.querySelector(".right")
let n = 0
let timer;

divSection.onmouseenter = ()=>{
    window.clearInterval(timer);
    //给向左按钮绑定函数
    left.addEventListener("click",()=>{

    })
}

divSection.onmouseleave = ()=>{
    timer = setInterval(()=>{
        moveDiv()
    },2000)
}

timer = setInterval(()=>{
    moveDiv()
},2000)

function moveDiv(){
    n += 100;
    divSection.style.transform = `translateX(-${n}px)`
    divSection.style.transition = `all 1s`
    if (n === 400){
        setTimeout(()=>{
            n = 0
            divSection.style.transform = ''
            divSection.style.transition = ''
        },1000)
    }
}
