// function min(a,b,c,d,v) {
//     return Math.min(5,3,6,1,7)
    
// }

// let num=min(5,3,6,1,7)
// console.log(num);

// function fourth(a) {
//     return a**3
    
// }
// let num=fourth(2)
// console.log(num);


function getUser(userName) {
return userName
    
}
// let a=getUser('Natiq')
// console.log(a);

// function addUser() {
//     let li=document.createElement('li')
//     let result=getUser('Natiq')
//     li.innerText=result
//     let ul=document.querySelector('ul')
//     ul.append(li)
//     changeColor()
    
// }

// addUser()

// function changeColor() {
//     let li=document.querySelector('li')
//     li.style.backgroundColor='red'
//     console.log('ela');
    
// }

function addUser() {
    let li=document.createElement('li')
    let netice=getUser('mahir')
    li.innerText=netice
    let ul=document.querySelector('ul')
    ul.append(li)
    color()
    
}

addUser()

function color() {
    let li=document.querySelector('li')
    li.style.backgroundColor='red'
    
}


