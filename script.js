function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     var nameInput = document.getElementById("name").value;
//     var namePattern = /^[A-Za-z\s]+$/;

//     if (!namePattern.test(nameInput)) {
//       document.getElementById("response").innerText =
//         "Full name should only contain letters and spaces.";
//       return;
//     }

//     var form = event.target;
//     var formData = new FormData(form);

//     fetch(form.action, {
//       method: form.method,
//       body: formData,
//       headers: {
//         Accept: "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Hide the form and display success message
//           form.reset();
//           document.getElementById("contact-form").style.display = "none";
//           document.getElementById("response").style.display = "block";
//           document.getElementById("success-message").innerText =
//             "Message sent successfully! Thank you for reaching out.";
//         } else {
//           response.json().then((data) => {
//             if (Object.hasOwn(data, "errors")) {
//               document.getElementById("response").innerText = data["errors"]
//                 .map((error) => error["message"])
//                 .join(", ");
//             } else {
//               document.getElementById("response").innerText =
//                 "An error occurred. Please try again.";
//             }
//           });
//           document.getElementById("response").style.display = "block";
//         }
//       })
//       .catch((error) => {
//         document.getElementById("response").innerText =
//           "An error occurred. Please try again.";
//         document.getElementById("response").style.display = "block";
//       });
//   });

// const coll = document.getElementsByClassName("collapsible");
// for (let i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     const content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// let slideIndex = 0;
// showSlides(slideIndex);

// function moveSlide(n) {
//   showSlides((slideIndex += n));
// }

// function showSlides(n) {
//   let slides = document.getElementsByClassName("slide");
//   if (n >= slides.length) {
//     slideIndex = 0;
//   }
//   if (n < 0) {
//     slideIndex = slides.length - 1;
//   }
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex].style.display = "block";
// }

// Initialize the slider by showing the first slide
document.addEventListener("DOMContentLoaded", function () {
  showSlides(1);
});
