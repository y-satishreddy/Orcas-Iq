// Initialize EmailJS
emailjs.init("c8z_7rpb5quxgOBeJ"); // Replace with your actual EmailJS public key

// Function to handle form submission
function submitRegistrationForm(event) {
  // Prevent the default form submission (refresh behavior)
  event.preventDefault();

  // Collect form data
  const fullName = document.getElementById("full-name").value.trim();
  const userEmail = document.getElementById("user-email").value.trim();
  const contactNumber = document.getElementById("contact-number").value.trim();
  const selectedCourse = document.getElementById("selected-course").value;
  const courseType = document.getElementById("course-type").value;

  // Validate form inputs to ensure no empty fields
  if (!fullName || !userEmail || !contactNumber || !selectedCourse || !courseType) {
    alert("Please fill out all the fields!");
    return; // Stop further execution if validation fails
  }

  // Prepare the message to send
  const formDetails = `
    Name: ${fullName}
    Email: ${userEmail}
    Mobile: ${contactNumber}
    Selected Course: ${selectedCourse}
    Course Type: ${courseType}
  `;

  // Debugging: Log the message
  console.log("Message being sent:");
  console.log(formDetails);

  // Use EmailJS to send the form data
  emailjs
    .send("service_f60rqcs", "template_3l8c026", {
      to_name: "Admin", // Replace if needed
      message: formDetails, // Pass the form details
    })
    .then(
      (response) => {
        alert("Your details have been sent successfully!");
        console.log("SUCCESS:", response);

        // Reset the form after successful submission
        document.getElementById("registration-form").reset();
      },
      (error) => {
        alert("Failed to send your details. Please try again.");
        console.error("EmailJS Error:", error);
      }
    );
}

// Attach the function to the form's submit event
document
  .getElementById("registration-form")
  .addEventListener("submit", submitRegistrationForm);
