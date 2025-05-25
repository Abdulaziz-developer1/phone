document.addEventListener("DOMContentLoaded", function () {
    // Time and Date Display
    const timeElements = document.querySelectorAll(".time");
    const dateElements = document.querySelectorAll(".date");

    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const dateString = now.toLocaleDateString();

        timeElements.forEach(el => el.innerHTML = timeString);
        dateElements.forEach(el => el.innerHTML = dateString);
    }

    setInterval(updateTime, 1000);
    updateTime();

    // Pages
    const page1 = document.getElementById("lockPage");   
    const page2 = document.getElementById("passwordPage"); 
    const page3 = document.getElementById("mainPage");   
    const screen = document.getElementById("screen");    
    const quitBtn = document.getElementById("quitBtn");  

    // Apps and their pages (9 apps)
    const apps = [
        { button: document.getElementById("app1"), page: document.getElementById("app1Page") },
        { button: document.getElementById("app2"), page: document.getElementById("app2Page") },
        { button: document.getElementById("app3"), page: document.getElementById("app3Page") },
        { button: document.getElementById("app4"), page: document.getElementById("app4Page") },
        { button: document.getElementById("app5"), page: document.getElementById("app5Page") },
        { button: document.getElementById("app6"), page: document.getElementById("app6Page") },
        { button: document.getElementById("app7"), page: document.getElementById("app7Page") },
        { button: document.getElementById("app8"), page: document.getElementById("app8Page") },
        { button: document.getElementById("app9"), page: document.getElementById("app9Page") }
    ];

    // Hide all apps on page load
    function hideAllApps() {
        apps.forEach(app => {
            if (app.page) app.page.style.display = "none";
        });
    }

    // Close all apps and show lock screen if needed
    function closeAllPages(showLockScreen = true) {
        hideAllApps();

        page2.style.display = "none"; // Hide password page
        page3.style.display = "none"; // Hide main page

        if (showLockScreen) {
            page1.style.display = "flex"; // Show Lock Screen
            screen.style.backdropFilter = "brightness(1)";
        }
    }

    // Quit Button - Closes Everything and Shows Lock Page
    quitBtn.addEventListener("click", function () {
        closeAllPages(true); // Ensures Lock Screen is shown
    });

    // Function to Open Apps Properly
    function setupApp(button, page) {
        if (!button || !page) {
            console.error("Missing button or page for an app.");
            return;
        }

        button.addEventListener("dblclick", function () {
            hideAllApps(); // Close all apps before opening the new one
            page.style.display = "flex"; // Open the selected app
            page1.style.display = "none"; // Hide lock screen
            page3.style.display = "none"; // Hide main page
            screen.style.backdropFilter = "brightness(0.3)"; // Dim background
        });
    }

    // Initialize all apps correctly
    hideAllApps();
    apps.forEach(app => setupApp(app.button, app.page));

    // Password Handling
    const btn1 = document.getElementById("Password-page");
    const password = document.getElementById("password");
    const check = document.getElementById("check");

    let enteredPassword = "";

    function updatePasswordDisplay() {
        password.innerHTML = enteredPassword;
    }

    // Number Buttons
    const buttons = Array.from({ length: 10 }, (_, i) =>
        document.getElementById(`add${i + 1}`)
    );

    buttons.forEach((button, index) => {
        if (button) {
            button.onclick = function () {
                enteredPassword += index === 9 ? "0" : (index + 1).toString();
                updatePasswordDisplay();
            };
        }
    });

    // Show Password Page
    btn1.addEventListener("click", function () {
        page1.style.display = "none";
        page2.style.display = "flex";
        screen.style.backdropFilter = "brightness(0.3)";
    });

    // Check Password
    check.addEventListener("click", function () {
        if (enteredPassword === "1234") {
            page2.style.display = "none";
            page3.style.display = "flex";
            screen.style.backdropFilter = "brightness(1)";
        } else {
            alert("Wrong password");
        }
    });

    // Chevron Expand & Collapse
    function setupToggle(chevronDownId, chevronUpId, textId) {
        const chevronDown = document.getElementById(chevronDownId);
        const chevronUp = document.getElementById(chevronUpId);
        const text = document.getElementById(textId);

        if (!chevronDown || !chevronUp || !text) {
            console.error(`One or more elements missing: ${chevronDownId}, ${chevronUpId}, ${textId}`);
            return;
        }

        chevronDown.addEventListener("click", function () {
            text.style.display = "block";
            chevronDown.style.display = "none";
            chevronUp.style.display = "inline";
        });

        chevronUp.addEventListener("click", function () {
            text.style.display = "none";
            chevronDown.style.display = "inline";
            chevronUp.style.display = "none";
        });
    }

    setupToggle("chervon1", "chervon4", "text1");
    setupToggle("chervon2", "chervon5", "text2");
    setupToggle("chervon3", "chervon6", "text3");
});
