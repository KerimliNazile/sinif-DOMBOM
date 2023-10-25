//1//



// let input=document.getElementById('name')
// console.log('name')




//2 ve 3//
// let body=document.querySelector("body")
// let naz=document.createElement("button")
// let input=document.getElementById("ad")
// let container=document.createElement("div")

// naz.textContent="add"

// input.addEventListener('input',function(){
//     console.log(input.value);
// })
// naz.addEventListener("click",function(){
//     let inputValue=input.value
//     alert(inputValue)
//     input.value=""
// })



// //4//
// let button = document.createElement("button")

// button.textContent = "code academy"
// container.classList.add("container")
// button.addEventListener("click",function()
// {
//     let div=document.createElement('div')
//     div.textContent="Ferid"
//     container.append(div)
// })





// body.append(naz)
// body.append(button)
// body.append(container)

//yeni task//


// const container=document.getElementById('container')
// const btn=document.querySelector('button')

// btn.addEventListener("click", function(){

// })

//add element
let add=document.querySelector(".add")
let container=document.querySelector(".container")
//click
add.addEventListener('click', (event) => {
    //append elemrnt
    event.preventDefault()
    let div = document.createElement('div')
    let left = document.createElement('div')
    let right = document.createElement('div')
    
    // element add classlist
    left.classList.add("left")
    right.classList.add("right")
    console.log(div);
    div.classList.add("div")
    div.append(left,right)
    container.append(div)
    
    
})