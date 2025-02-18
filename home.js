
        // Toggle the navigation menu on and off for mobile view
        function toggleNav() {
            var navLinks = document.getElementById("navLinks");
            navLinks.classList.toggle("active");
            
            // Toggle the hamburger icon to change state
            var hamburger = document.getElementById("hamburger");
            hamburger.classList.toggle("active");
        }
