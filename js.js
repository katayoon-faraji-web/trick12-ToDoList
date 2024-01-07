let reg = document.getElementById('register')
let btn_reg = document.getElementById('btn_register')
let name = document.getElementById('name')
let ul_all = document.getElementById('all')
let ul_done = document.getElementById('done')
let ul_pending = document.getElementById('pending')
let li_in_all = document.querySelectorAll('#all>li')
let li_in_pending = document.querySelectorAll('#pending>li')
li_in_done = document.querySelectorAll('#done>li')
let bt1 = document.getElementById('bt1')
let bt2 = document.getElementById('bt2')
let bt3 = document.getElementById('bt3')
let lines = document.getElementsByClassName('line')

document.getElementById('btn_register').addEventListener('click',(e)=>{

    e.target.style.opacity=0
    reg.style.opacity=1
    reg.style.zIndex='20'
})

document.getElementById('btn_close').addEventListener('click',(e)=>{

    btn_reg.style.opacity=1
    reg.style.opacity=0
    reg.style.zIndex=0
})
document.getElementById('submit').addEventListener('click',(e)=>{
    if(name.value.length>3){
        let _li = document.createElement('li')
        _li.classList.add('li_class')
        _li.innerHTML = `
        <strong contenteditable ">${name.value}</strong>
        <div>
            <button onclick="_remove(event)" id="del" pointer><i class="bi bi-trash-fill"></i></button>
            <button onclick="_edit(event)" id="edit" pointer><i class="bi bi-pencil-fill"></i></button>
        </div> 
        `
        ul_all.appendChild(_li)
        move_to_depending(e)
        name.value =''
        name.focus()
    }
    else{
        alert('fill the blank please')
    }
})

 
function move_to_depending(event){

   
    let _lii = document.createElement('li')
    _lii.classList.add('li_class')
    _lii.innerHTML = `
    <strong contenteditable ">${name.value}</strong>
    <div>
        <button onclick="move_to_done(event)" id="dn" pointer>DONE?</button>
    </div> 
    `
    ul_pending.appendChild(_lii)

    
    li_in_pending = document.querySelectorAll('#pending>li')
}


document.getElementsByClassName('bt1')[0].addEventListener('click',(e)=>{
    for(let j=0;j<lines.length;j++){
        lines[j].style.width = '0'
    }
    e.target.nextElementSibling.style.width = '150px'
    ul_all.style.opacity=1
    ul_done.style.opacity=0
    ul_pending.style.opacity=0
    ul_pending.style.zIndex =0
    ul_done.style.zIndex =0
    ul_all.style.zIndex = '30'

})
document.getElementsByClassName('bt2')[0].addEventListener('click',(e)=>{
    for(let j=0;j<lines.length;j++){
        lines[j].style.width = '0'
    }
    e.target.nextElementSibling.style.width = '150px'
    ul_all.style.opacity=0
    ul_done.style.opacity=0
    ul_pending.style.opacity=1
    ul_all.style.zIndex = 0
    ul_done.style.zIndex = 0
    ul_pending.style.zIndex = '30'


})
document.getElementsByClassName('bt3')[0].addEventListener('click',(e)=>{
    for(let j=0;j<lines.length;j++){
        lines[j].style.width = '0'
    }
    e.target.nextElementSibling.style.width = '100px'

    ul_all.style.opacity=0
    ul_pending.style.opacity=0
    ul_done.style.opacity=1
    ul_all.style.zIndex = 0
    ul_done.style.zIndex = '30'
    ul_pending.style.zIndex =0

})
function _remove(e){
    e.target.parentElement.parentElement.parentElement.remove()
}
function _edit(e){
    let x = e.target.parentElement.parentElement.previousElementSibling
    x.classList.toggle('bg-Gray')
    x.classList.toggle('text-white')

}
function move_to_done(e){

    let li_in_pending = document.querySelectorAll('#pending>li')
    let _li = document.createElement('li')
    _li.classList.add('li_class')
    
    console.log(e.target);
    _li.innerHTML = `
    <strong contenteditable ">${e.target.parentElement.previousElementSibling.innerHTML}</strong>
    <div>
        <button onclick="not_done(event)" id="pen" pointer>NOT DONE?</button>
    </div> 
    `
    ul_done.appendChild(_li)
    ul_pending.removeChild(e.target.parentElement.parentElement)
    li_in_done = document.querySelectorAll('#done>li')

}
function not_done(e){

    let li_in_done = document.querySelectorAll('#done>li')
    let _li = document.createElement('li')
    _li.classList.add('li_class')
    console.log(e.target);
    _li.innerHTML = `
    <strong contenteditable ">${e.target.parentElement.previousElementSibling.innerHTML}</strong>
    <div>
        <button onclick="move_to_done(event)" id="pen" pointer>DONE?</button>
    </div> 
    `
    ul_pending.appendChild(_li)
    ul_done.removeChild(e.target.parentElement.parentElement)
    li_in_pending = document.querySelectorAll('#pending>li')

}