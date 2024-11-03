const eventDate = new Date("2024-12-01T09:00:00").getTime();
        const countdownElement = document.getElementById('countdown');

        setInterval(function() {
            const now = new Date().getTime();
            const timeLeft = eventDate - now;

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            if (timeLeft < 0) {
                countdownElement.innerHTML = "The event has started!";
            }
        }, 1000);

        // Smooth Scroll for Navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Form Validation and Submission Message
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const formMessage = document.getElementById('form-message');

            if (name === "" || email === "") {
                event.preventDefault();
                formMessage.textContent = "Please fill out all required fields.";
                formMessage.style.color = "red";
            } else {
                formMessage.textContent = "Thank you for registering!";
                formMessage.style.color = "green";
            }
        });

