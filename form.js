const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


// Add an event listener to the signup form
const signupForm = document.querySelector('.sign-up-container form');

signupForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Capture form input values (optional for additional logic)
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulate signup logic (e.g., validation or API call)
  console.log('Signup successful for:', username);

  // Redirect to the dashboard page
  window.location.href = 'index.html'; // Replace 'dashboard.html' with the actual URL of your dashboard
});




// Add an event listener to the sign-in form
const signinForm = document.querySelector('.sign-in-container');

signinForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Capture form input values (optional for additional logic)
  const username = document.getElementById('username').value;
  const password = document.getElementById('pass').value;

  // Simulate signup logic (e.g., validation or API call)
  console.log('Signin successful for:', username);

  // Redirect to the dashboard page
  window.location.href = 'index.html'; // Replace 'dashboard.html' with the actual URL of your dashboard
});


