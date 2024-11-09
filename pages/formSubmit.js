let flight = document.querySelector("#Flight");
let hotel= document.querySelector("#Hotel")


hotel.addEventListener("submit",(e)=>{
  e.preventDefault();
  submitForm(hotel);
})

flight.addEventListener("submit",(e)=>{
  e.preventDefault();
  submitForm(flight);
})



function submitForm(form) {
  const formData = new FormData(form);
  const url="https://script.google.com/macros/s/AKfycbzvHVXlby69xNoDisT5n2NEdxMHoIbuixBprtF8fht-hGvS40qxhtruYllrvAb3m5md/exec"
  fetch(url, { method: "POST", body: formData })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === "success") {
        alert("Form submitted successfully!");
      } else {
        alert("Error: " + data.error);
      }
    })
    .catch((error) => console.error("Error:", error));
}
