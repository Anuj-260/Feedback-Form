const forms = document.getElementById("feedbackForm");
const successMsg = document.querySelector(".successMessage-container");
const msg = document.querySelector("#msg");
const progressBar = document.querySelector(".progress-bar");


// reset error message//

document.querySelectorAll(".error").forEach((el) =>{
   el.style.display = "none"});

const validate = () =>{


// validate form//
 
let isValid = true;

// Name validation //
 
let name = document.getElementById("name").value.trim();
if (name === '') {
    document.getElementById("name-error").style.display = "block";
      isValid= false;
}  else if (name.length <= 3) {
  document.getElementById("name-error").style.display = "block";
   isValid = false;

}

   //Email validation//

   let email = document.getElementById("email").value.trim();
   let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email)) {
    document.getElementById("email-error").style.display = "block";
    isValid = false;
   }

   //phone validation//

   let phone = document.getElementById("phone").value.trim();
   let phoneRegex = /^\d{10}$/;
   if(!phoneRegex.test(phone)) {
    document.getElementById("phone-error").style.display = "block";
    isValid = false;
   }


 // Rating validation //

 let ratingSelected = document.querySelector("input[name='rating']:checked");
  if ( !ratingSelected){
    document.getElementById("rating-error").style.display = "block";
    isValid = false;
  }


     // show success message//

  const successMessage = () => {
    msg.innerText = `Thank you for the feedback!`
    successMsg.classList.remove("hide");
  }

   
  if (isValid) {
    forms.style.display = "none";
    progressBar.style.display = "none";
    successMessage();
   
  }
}

forms.addEventListener("submit", (evt) =>{
  evt.preventDefault();
  validate();
})
