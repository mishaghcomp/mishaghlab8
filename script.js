
const firebaseProjectUrl = "const firebaseConfig = {
  apiKey: "AIzaSyApVGEIDpV5q9iHNqFoPdHI600pWdNyPiI",
  authDomain: "project1and2-5b783.firebaseapp.com",
  databaseURL: "https://project1and2-5b783-default-rtdb.firebaseio.com",
  projectId: "project1and2-5b783",
  storageBucket: "project1and2-5b783.appspot.com",
  messagingSenderId: "414001733175",
  appId: "1:414001733175:web:a0a487ebddd613cf9f69b2",
  measurementId: "G-XMEY08FBZK"
};
";


function sendMessageToFirebase(name, email, message) {
  // Create a JS object with the data we want to store
  const data = {
    name: name,
    email: email, 
    message: type_here,
    createdAt: new Date().toISOString(), 
  };


  const url = firebaseProjectUrl + "/messages.json";

  // Use fetch() to POST data to Firebase
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        // If something went wrong with the request
        throw new Error("Network response was not ok");
      }

      // If everything is good, show the alert message
      alert("Thanks for your message. We will get back to you soon!");

      // Clear the form after successful submission
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      console.error("Error sending data to Firebase:", error);
      alert("Oops! Something went wrong. Please try again.");
    });
}

/
function handleFormSubmit(event) {
  // Stop the browser from reloading the page
  event.preventDefault();

  // Access HTML elements using document.getElementById()
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const messageInput = document.getElementById("messageInput");

  // Read the values from the input fields
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Basic validation
  if (!name || !email || !message) {
    alert("Please fill in all fields before submitting.");
    return;
  }

  // Call the function that sends data to Firebase
  sendMessageToFirebase(name, email, message);
}

// Attach the submit event handler to the form
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", handleFormSubmit);
