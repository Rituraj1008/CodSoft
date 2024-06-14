const toTop = document.querySelector(".to-top"); // Changed from ".tp-top" to ".to-top"
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active"); // Changed from remove to add
  } else {
    toTop.classList.remove("active");
  }
});
/* ----------form-----------------*/

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || email === '' || password === '') {
      alert('Please fill out all fields');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Form is valid, you can proceed with form submission
    alert('Form submitted successfully');

    // Clear the form after submission (optional)
    form.reset();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
