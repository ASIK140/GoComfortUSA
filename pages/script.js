let payBtn=document.querySelector("#pay_btn");
let closeBtn=document.querySelector("#form_close");
let form=document.querySelector("#booking_form")
payBtn.addEventListener("click",()=>{
    form.classList.toggle("opne_form")
})
closeBtn.addEventListener("click",()=>{
    form.classList.toggle("opne_form")
})