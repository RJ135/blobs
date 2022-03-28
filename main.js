const circles = document.querySelectorAll(".circle")
const boxes = document.querySelectorAll(".box")
const wrapper = document.querySelector(".wrapper")


//  generate random num for pos element
const randomNum = () => {
    const tabpos = []
    for (let i = 1; i <= 4; i++) {
        let randomPos = Math.floor(Math.random()*400)
        tabpos.push(randomPos);
    }
    return tabpos
}

// set position to element
const randomPos = (element , arrRandomNumber) => {
    element.style.top = arrRandomNumber[0]+"px"
    element.style.left = arrRandomNumber[1]+"px"
    element.style.right = arrRandomNumber[2]+"px"
    element.style.bottom = arrRandomNumber[3]+"px"
}

const randomScale = (el) => {
    let random = Math.floor(Math.random() * 2)
    el.style.transform = (`scale(${random})`)
}

// init
circles.forEach(circle => {
    randomPos(circle,randomNum())
    randomScale(circle)
});
// boxes.forEach(circle => {
//     randomPos(circle,randomNum())
// });

// item animation
circles.forEach(circle => {
    randomPos(circle,randomNum())
    randomScale(circle)
    let time = Math.floor(Math.random()*3540)
    setInterval(() => {
        randomPos(circle,randomNum())
        randomScale(circle)
    }, time);
});

// boxes.forEach(box => {
//     let time = Math.floor(Math.random()*100)
//     setInterval(() => {
//         randomPos(box,randomNum())
//     }, time);
// });
    
