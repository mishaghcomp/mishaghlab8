// =======================================
// Lab 8 - Build a Web App Using JS & Firebase
// =======================================

// Step 1: This was Alice's URL in the original example:
// const firebaseProjectUrl = "https://awang-capu-default-rtdb.firebaseio.com/";

// Step 2: Comment out Alice's URL (done above) and
// paste YOUR OWN Firebase Realtime Database URL here:
const firebaseProjectUrl = "PASTE_YOUR_FIREBASE_URL_HERE";

// Example of comments and variables:
// const --> value will not be reassigned
// let   --> value can change later

/**
 * Sends the form data (name, email, message) to Firebase.
 * This uses the Firebase Realtime Database REST API.
 */
function sendMessageToFirebase(name, email, message) {
  // Create a JS object with the data we want to store
  const data = {
    name: name,
    email: email,
    message: message,
    createdAt: new Date().toISOString(), // extra field to show when it was sent
  };

  // Build the full URL for the "messages" collection
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

// =======================================
// Event listener for the form submit button
// =======================================

/**
 * This function runs when the form is submitted.
 * It prevents the default page reload,
 * gets the input values, and calls sendMessageToFirebase().
 */
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
