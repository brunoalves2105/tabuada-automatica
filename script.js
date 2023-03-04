function tabuada(){
    var tab = document.getElementById('tab')
    
    var res = document.getElementById('res')
    if(tab.value.length == 0){
        alert('digite um numero !')
    } else {
    var t = Number(tab.value)
    res.innerHTML = ''
    for(var c = 1; c <= 10; c++){
        res.innerHTML += `<li>${t} x ${c} = ${t * c}</li>`
    }
}
}


