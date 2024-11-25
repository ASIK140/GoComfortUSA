
let myform = document.querySelector("#myForm");
let btn = document.querySelector("#sub_btn");
console.log("Work");

myform.addEventListener("submit", (e) => {
  e.preventDefault();
  submitForm(myform);
});

function submitForm(form) {
  const formData = new FormData(form);
  btn.innerHTML = "Submitting..";

  const url =
    "https://script.google.com/macros/s/AKfycbyS8AYGSXdsvXQ-1_0UNKmjjbcxA5nStV3BkLXqPTQ6qlaPpfcDuujfLtedz0OKPIs/exec";
  fetch(url, { method: "POST", body: formData })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === "success") {
        btn.innerHTML = "Submitted";
        alert("Form submitted successfully!");
      } else {
        alert("Error: " + data.error);
        btn.innerHTML = "Not Submit";
      }
    })
    .catch((error) => console.error("Error:", error));
}
