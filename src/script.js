function checkAccess() {
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    let loginBox = document.querySelector(".login");
    let body = document.body;
    let secretSection = document.querySelector(".secret-section");
    let typedText = document.querySelector(".typed-text"); // "Initializing encrypted connection..."
    let cyberText = document.getElementById("cyber-text"); // Cybersecurity paragraph

    if (password === "cybersecure") {
        message.innerHTML = "✅ Access Granted!";
        message.style.color = "#00FF41";

        // Typewriter effect for "Initialized encrypted connection"
        typeWriterEffect(typedText, "Initialized encrypted connection", 20);

        // Unlock animation and hide login box
        loginBox.classList.add("unlock-animation");
        setTimeout(() => {
            loginBox.style.display = "none";  
            body.classList.add("unlocked");   

            // Reveal secret section and trigger second typewriter effect
            setTimeout(() => {
                secretSection.scrollIntoView({ behavior: "smooth" });

                // Typewriter effect for cybersecurity paragraph
                let text = "A Cybersecurity student passionate about penetration testing and threat analysis. Hands-on experience with vulnerability assessments, SIEM tools, and CTF challenges. Seeking an internship to apply my skills in security monitoring and ethical hacking and contribute to a team environment focused on eliminating cyber threats.";
                typeWriterEffect(cyberText, text, 20);
            }, 500);
        }, 2000);
    } else {
        message.innerHTML = "❌ Access Denied!";
        message.style.color = "red";

        // Flicker effect for denial
        body.classList.add("denied");
        setTimeout(() => {
            body.classList.remove("denied");
        }, 500);
    }
}

// Typewriter effect function
function typeWriterEffect(element, text, speed = 20) {
    element.innerHTML = ""; // Clear text before starting
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}
