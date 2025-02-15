// Select elements
const hamburger = document.querySelector('.menu-icon'); // Changed from .hamburger to .menu-icon
const menu = document.querySelector('.nav-buttons'); // Changed from .header-btns to .nav-buttons
const closeMenu = document.querySelector('.menu-close'); // Changed from .close to .menu-close
const menuLinks = document.querySelectorAll('.nav-link'); // Changed from .header-btn to .nav-link

// Function to show the menu
function showMenu() {
    menu.classList.add('active'); // Show menu
    hamburger.style.display = 'none'; // Hide hamburger icon
    closeMenu.style.display = 'block'; // Show close icon
}

// Function to hide the menu
function hideMenu() {
    menu.classList.remove('active'); // Hide menu
    hamburger.style.display = 'block'; // Show hamburger icon
    closeMenu.style.display = 'none'; // Hide close icon
}

// Ensure the menu is hidden by default on page load (on mobile devices)
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        hideMenu();
    }
});

// Toggle the menu visibility when the hamburger icon is clicked (only on mobile)
hamburger.addEventListener('click', showMenu);

// Hide the menu when the close icon is clicked (only on mobile)
closeMenu.addEventListener('click', hideMenu);

// Scroll to the respective section and close the menu when a link is clicked
menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Get the target section ID from the link's href
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start',    // Scroll to the top of the section
            });
        }

        // Close the menu after clicking any link (mobile only)
        if (window.innerWidth <= 768) {
            hideMenu();
        }
    });
});

// Optional: Ensure menu is closed on larger screens (resize edge case)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.classList.remove('active'); // Ensure menu is hidden
        hamburger.style.display = 'none'; // Hide hamburger icon
        closeMenu.style.display = 'none'; // Hide close icon
    } else {
        hamburger.style.display = 'block'; // Show hamburger icon
    }
});

// Import emailjs-com

function viewCourse() {
    // Hide the main container
    document.getElementById('mainContainer').style.display = 'none';
    console.log("Data Science");
    // Show the overlay
    document.getElementById('courseOverlay').style.display = 'flex';
    document.getElementById('contact-section').style.display = 'none';
    document.getElementById('service-section').style.display = 'none';
    document.getElementById('main-header-section').style.display = 'none';
    document.getElementById('banner-section').style.display = 'none';
    document.getElementById('about-section').style.display = 'none';
}

function dataAnalytics() {
    document.getElementById('mainContainer').style.display = 'none';
    document.getElementById('data-analytics').style.display = 'flex';
    document.getElementById('contact-section').style.display = 'none';
    document.getElementById('service-section').style.display = 'none';
    document.getElementById('main-header-section').style.display = 'none';
    document.getElementById('banner-section').style.display = 'none';
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('cross-icon-x').style.display = 'block';
}

function closeOverlay() {
    // Show the main container
    document.getElementById('mainContainer').style.display = 'flex';
    document.getElementById('contact-section').style.display = 'flex';
    document.getElementById('service-section').style.display = 'block';
    document.getElementById('main-header-section').style.display = 'flex';
    document.getElementById('banner-section').style.display = 'flex';
    document.getElementById('about-section').style.display = 'flex';
    // Hide the overlay
    document.getElementById('courseOverlay').style.display = 'none';
    document.getElementById('cross-icon-x').style.display = 'none';
    document.getElementById('data-analytics').style.display = 'none';
}

// FAQ accordion functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});
emailjs.init("c8z_7rpb5quxgOBeJ"); // Replace with your EmailJS public key

 
    // New function to send email
    function sendFormDetails() {
      // Collect form data using new IDs
      const userName = document.getElementById("user-full-name").value.trim();
      const userEmail = document.getElementById("user-email-address").value.trim();
      const userMobile = document.getElementById("user-contact-number").value.trim();
      const courseSelected = document.getElementById("course-option").value;
      const userProfession = document.getElementById("user-profession").value;
    
      // Combine data into a single message string
      const formDetails = `${userName} ${userEmail} ${userMobile} ${courseSelected} ${userProfession}`;
    
      // Debugging: Log the message string to ensure it’s correct
      console.log("Message being sent:");
      console.log(formDetails);
    
      // Send the email using EmailJS
      emailjs
        .send("service_f60rqcs", "template_3l8c026", {
          to_name: "Admin", // Replace with recipient name if needed
          message: formDetails, // Pass the combined message string
        })
        .then(
          (response) => {
            alert("Your details have been sent successfully!");
            console.log("SUCCESS:", response);
          },
          (error) => {
            alert("Failed to send your details. Please try again.");
            console.error("EmailJS Error:", error);
          }
        );
    }
    