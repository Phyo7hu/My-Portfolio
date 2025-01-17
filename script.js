// Dynamic Role Display
const roles = ["Web Developer", "Designer", "Freelancer"];
let roleIndex = 0;

const roleElement = document.getElementById("dynamic-role");

setInterval(() => {
  roleElement.textContent = roles[roleIndex];
  roleIndex = (roleIndex + 1) % roles.length;
}, 2000);

// Contact Form Handler
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;
  const message = document.getElementById("messageInput").value;

  if (name && email && message) {
    alert(`Thank you, ${name}, for reaching out! I’ll contact you soon.`);
    document.getElementById("contactForm").reset();
  } else {
    alert("Please fill in all fields.");
  }
});
