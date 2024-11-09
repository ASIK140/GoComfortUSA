let payBtn = document.querySelector("#pay_btn");
let closeBtn = document.querySelector("#form_close");
let form = document.querySelector("#booking_form");
payBtn.addEventListener("click", () => {
  form.classList.toggle("opne_form");
});
closeBtn.addEventListener("click", () => {
  form.classList.toggle("opne_form");
});

let adult = document.querySelector("#adult");
let child = document.querySelector("#child");
let adult_name = document.querySelector("#adult_name_sec");
let child_name = document.querySelector("#child_name_sec");
// adult.addEventListener("input", () => {
//   adult_name.innerHTML = "";

//   for (let index = 0; index < Number(adult.value); index++) {
//     let input = document.createElement("input");
//     input.setAttribute("type", "text");
//     input.setAttribute("name", "adult_name");
//     input.setAttribute("placeholder", `Name${index + 1}`);
//     adult_name.appendChild(input);
//   }
// });
// child.addEventListener("input", () => {
//   child_name.innerHTML = "";

//   for (let index = 0; index < Number(child.value); index++) {
//     let input = document.createElement("input");
//     input.setAttribute("type", "text");
//     input.setAttribute("name", "child_name");
//     input.setAttribute("placeholder", `Name${index + 1}`);
//     child_name.appendChild(input);
//   }
// });

// let myform = document.querySelector("#myForm");

// myform.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let url =
//     "https://script.google.com/macros/s/AKfycbyc68h7hzE9TYR-vzvJU5CF-Bw55PTAbufkgVXuI3-l4gUsBrFeaCcpNevEr-R8HFbkWg/exec";

//   fetch(url, {
//     method: "POST",
//     body: new FormData(myform),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       alert("Form submitted successfully!");
//     })
//     .catch((error) => console.error("Error:", error));
// });
