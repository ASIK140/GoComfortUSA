let payBtn=document.querySelector("#pay_btn");
let closeBtn=document.querySelector("#form_close");
let form=document.querySelector("#booking_form")
payBtn.addEventListener("click",()=>{
    form.classList.toggle("opne_form")
})
closeBtn.addEventListener("click",()=>{
    form.classList.toggle("opne_form")
})



let url="https://script.google.com/macros/s/AKfycbyVVM83mxeUVyJZP-3833r2-i-4Vur8BSWCeQvkhh7RvW4n3Z32gd6k6z2gRZJo2oJYzQ/exec"

let book_form=document.querySelector("#form");

book_form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let formDate=new FormData(book_form);
    fetch(url,{
        method:"POST",
        body:formDate
    }).then((res)=>{
        res.text()
    }).then((finalRes)=>{
        console.log(finalRes);
    })

})