let left_arrow = document.querySelector("#left_arrow");
let right_arrow = document.querySelector("#right_arrow");
let reviews = document.querySelector("#rev_selector");
let count=1
let menu=document.querySelector("#menu_icon")
let menu_bar=document.querySelector("#menu_bar")
let menu_list=document.querySelectorAll(".menu_list")
left_arrow.addEventListener("click", () => {
    if(count<2){
        reviews.style.transform=`translateX(${count*-33}%)`
        count++
    }
    else{
        reviews.style.transform=`translateX(${count*-33}%)`
    }
   console.log(count);
   
});
right_arrow.addEventListener("click", () => {
    if (count>1) {
        reviews.style.transform=`translateX(${(count-1)*-33}%)`
        count--;
    }
    else{
        reviews.style.transform=`translateX(0)`
    }
   console.log(count);

});

menu.addEventListener("click",()=>{
    menu_bar.classList.toggle("toggle")
})

menu_list.forEach((list)=>{
    
    list.addEventListener("click",()=>{
        let dropdown=list.childNodes[1]
        dropdown.classList.toggle("list_toggle")
        
    })
})