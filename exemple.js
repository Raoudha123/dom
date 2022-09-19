console.log(document)  

// selectors

// var title = document.getElementsByTagName('h1')
// var twoTitles = document.getElementsByClassName('t')
// // console.log(title[2])
// console.log(twoTitles)
// var t3 = document.getElementById('t3')

// console.log(t3)

// var titles = document.querySelectorAll('h1')
// console.log(h1)


// function changeText(){
//     if(h1.innerHTML==="hello"){
        
//         h1.innerHTML = "hi"
//     } else 
//     h1.innerHTML = "hello"
    
// }


// function changeColor(event){
//     console.log(event.target);
//     var x = event.target
//     x.style.color="blue"
// }

// for (let i = 0; i < titles.length; i++) {
//     titles[i].addEventListener('mouseover',changeColor)
    
// }










// var h1 = document.querySelector('h1')


// var buttons = document.querySelectorAll('button')


// function chngC(e){
//     // console.log(e)
//     var bt = e.target
//     console.log(bt)
//     if(bt.innerHTML==="Blue"){
//         h1.style.color="blue"
//     }else if(bt.innerHTML==="Red"){
//         h1.style.color="red"
//     }else if(bt.innerHTML==="Green"){
//         h1.style.color="green"

//     }

// }


// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click',chngC)
    
// }
var buttons = document.querySelectorAll('button')
var p = document.querySelector('p')
function compte(c){
var bt=c.target
    if (bt.innerHTML==="+"){
p.innerHTML++
    }
     if ((bt.innerHTML==="-") && (p.innerHTML>0)){
        p.innerHTML--}}

    


var buttons = document.querySelectorAll('button')
for (let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',compte)
    
}