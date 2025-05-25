function shoot() {
    const goalkeeper = document.querySelector('.goalkeeper');
    const ball = document.querySelector('.ball');
    const message = document.getElementById('result');

    const directions = ["left", "center", "right"];
    const randomGK = directions[Math.floor(Math.random() * directions.length)];
    const randomBall = directions[Math.floor(Math.random() * directions.length)];

    // Reset classes
    goalkeeper.className = "goalkeeper";
    ball.className = "ball";
    message.style.display = "none";

    // Add movement classes
    goalkeeper.classList.add(`gk-${randomGK}`);
    ball.classList.add(`ball-${randomBall}`);

    // Determine if it's a goal or miss
    setTimeout(() => {
        if (randomGK === randomBall) {
            message.textContent = "MISS!!!";
            message.style.color = "red";
        } else {
            message.textContent = "GOAL!!!";
            message.style.color = "yellow";
        }
        message.style.display = "block";
    }, 700); // Wait for animation
}

function restart() {
    const goalkeeper = document.querySelector('.goalkeeper');
    const ball = document.querySelector('.ball');
    const message = document.getElementById('result');

    // Reset goalkeeper and ball to their original positions
    goalkeeper.className = "goalkeeper"; 
    ball.className = "ball"; 

    // Hide the result message
    message.style.display = "none";
    message.textContent = "";

    console.log("Game restarted successfully!");
}
