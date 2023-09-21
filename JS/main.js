window.addEventListener('load', function () {
    
    const form = document.querySelector(".lo_fo");
    const Uname = document.querySelector("#uname");
    const pass = document.querySelector("#pass");
    const coment = document.querySelector("#msg");
    const submits = document.querySelector("#btn_s");
    
    
    submits.addEventListener('click', function (s) {
        s.preventDefault()
        if (Uname.value ==='' || pass.value === '') {
            coment.innerHTML = "<h5>Please Complete The Boxes</h5>"
        }
        setTimeout(()=>{
            coment.innerHTML = ''
        },5000)
    })
})



