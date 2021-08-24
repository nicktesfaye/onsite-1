let key = document.querySelectorAll('.key')
let audio = document.querySelector('.audio')

key.forEach(e =>{

    e.addEventListener('click',()=> {
    
    const sfx = audio.querySelector("#"+e.id.toString())
    sfx.currentTime = 0
    sfx.play()
    e.classList.add('active')
    sfx.addEventListener('ended',() =>
        e.classList.remove('active'))
    })

})





  
