let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment(){
    count += 1
    countEl.textContent = count
    if (count > 0){  
    document.getElementById("count-el").style.color = 'blue'     
}       else if(count === 0){
    document.getElementById("count-el").style.color = 'green'  
 }
}

function decrement(){
    count -= 1
    countEl.textContent = count
    if(count < 0){   
        document.getElementById("count-el").style.color = 'red'   
     } else if(count === 0){
        document.getElementById("count-el").style.color = 'green'  
     }
    }

function save(){
    let countStr = count + ", "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    }
