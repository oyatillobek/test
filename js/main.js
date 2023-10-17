var elBox = document.querySelector('.box')
var elTitle =document.querySelector('.title')

var statuss = false
function fn() {
    if(statuss == true) {
        elBox.style.borderRadius = '50%'
        elBox.style.border = 'none'
        elBox.style.backgroundColor = 'red'
        elTitle.style.color = 'white'
    }else{
        elBox.style.borderRadius = '10%'
        elBox.style.border = 'none'
        elBox.style.backgroundColor = 'green'
    }
    statuss = !statuss
}

var elBtn2 = document.querySelector('.btn2')

var holat = false
function btm() {
    if(holat == true) {
        elBtn2.style.backgroundColor = 'black'
        elBtn2.style.border = 'none'
        elBtn2.textContent = 'Kun'
        elBtn2.style.color = 'white'
    }else{
        elBtn2.style.border = 'none'
        elBtn2.style.backgroundColor = 'yellow'
        elBtn2.textContent = 'Tun'
    }
    holat = !holat
}