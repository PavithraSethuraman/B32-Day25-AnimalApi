let container = document.createElement('div')
container.setAttribute('id','cont')
container.classList.add('container')
document.body.appendChild(container)

let h1 = document.createElement('h1')
h1.innerHTML = '<u>Random Dogs</u>'
h1.classList.add('text-center')
document.getElementById('cont').appendChild(h1)

let h3 = document.createElement('h3')
h3.innerHTML = 'Please Click the below Button to get Random Dogs Image'
h3.classList.add('text-center')
document.getElementById('cont').appendChild(h3)


let div = document.createElement('div')
div.setAttribute('id','div')
div.classList.add('results')
document.getElementById('cont').appendChild(div)

let div1 = document.createElement('div')
div1.setAttribute('id','div1')
div1.classList.add('result')
let p = document.createElement('p')
p.setAttribute('id','p1')
p.innerHTML = 'Random Dogs Placeholder'
document.getElementById('div').appendChild(div1)
document.getElementById('div1').appendChild(p)


let div3 = document.createElement('div')
div3.setAttribute('id','div3')
div3.classList.add('buttons')
document.body.appendChild(div3)


let dogBut = document.createElement('button')
dogBut.setAttribute('id','dog_button')
dogBut.innerHTML = "Get Dog"
dogBut.addEventListener('click',getRandomDog)
document.getElementById('div3').appendChild(dogBut)


function getRandomDog(){
fetch(`https://random.dog/woof.json`)
.then((x)=>x.json())
.then((res)=>{
	div1.innerHTML = `<img id="img1" src="${res.url}"/>`
})
}







