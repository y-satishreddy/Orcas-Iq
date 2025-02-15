# Orcas-IQ 🎓  
A modern and responsive **Institute Website** that showcases available courses, institute details, and an interactive contact form with EmailJS integration.  

## 🚀 Live Demo  
🔗 [Visit Website](https://orcasiq.netlify.app)  

## 📌 Features  
✅ **Responsive Design** using HTML, CSS, and JavaScript  
✅ **Dynamically sending form data** post for sending form data
✅ **Contact Form Integration** using [EmailJS](https://www.emailjs.com/)  
✅ **Smooth Animations & Interactive UI**  
✅ **Netlify Deployment** for fast and reliable hosting  

## 🛠️ Technologies Used  
- **Frontend:** HTML, CSS, JavaScript  
- **Email Service:** [EmailJS](https://www.emailjs.com/)  
- **API Calls:** For sending data to Email Js Service
- **Deployment:** [Netlify](https://www.netlify.com/)  

## 📸 Screenshots  
 ![image](https://github.com/user-attachments/assets/9d7524b4-c0f3-4351-8841-0cec7e5f1acd)
 
![image](https://github.com/user-attachments/assets/659a43ac-6528-4ddb-b476-6718aca7f3a7)
 
![image](https://github.com/user-attachments/assets/b90d1995-48d5-4cc2-8ca3-cc181e064517)


## 📦 Installation & Setup  
Follow these steps to run the project locally:  
- Clone the repository
git clone https://github.com/y-satishreddy/Orcas-Iq.git
- Navigate to the project directory
cd Orcas-Iq
- Open index.html in a browser
(For better performance, use a local server like VS Code Live Server.)

📧 Contact Form Setup (EmailJS)
- Sign up on EmailJS
- Create a new Email Service
- Generate your Service ID, Template ID, and User ID
- Update emailjs.send function inside contact.js

JS - Code Snippet :

emailjs.send("your_service_id", "your_template_id", formData, "your_user_id")
  .then(response => console.log("Email sent!", response))
  .catch(error => console.error("Error:", error));
 
Save and test the contact form

🚀 Deployment
The website is deployed on Netlify. To deploy changes:

git add .
git commit -m "Updated website content"
git push origin main

Netlify will automatically deploy the latest changes.

🤝 Contributing
Contributions are welcome! Feel free to fork the repository, make improvements, and submit a Pull Request (PR).

📄 License
🚨 This project is not licensed. The design and development are original work by Satish Reddy.

📬 Contact
If you have any questions or suggestions, reach out:
📧 Email: (Add your email here if you want to)
🔗 GitHub: y-satishreddy
🔗 Website: Orcas-IQ

💡 Like this project? Give it a ⭐ on GitHub!
