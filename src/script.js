function checkAccess() {
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    let loginBox = document.querySelector(".login");
    let body = document.body;
    let secretSection = document.querySelector(".secret-section");
    let typedText = document.querySelector(".typed-text");

    if (password === "cybersecure") {
        message.innerHTML = "✅ Access Granted!";
        message.style.color = "#00FF41";

        // Start typewriter effect for new text
        typeWriterEffect(typedText, "Initialized encrypted connection");

        // Unlock animation and hide login box
        loginBox.classList.add("unlock-animation");
        setTimeout(() => {
            loginBox.style.display = "none";  
            body.classList.add("unlocked");   

            // Scroll smoothly to the next section
            setTimeout(() => {
                secretSection.scrollIntoView({ behavior: "smooth" });
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

// Function to create typewriter effect
function typeWriterEffect(element, text, speed = 30) {
    element.innerHTML = ""; // Clear existing text
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
