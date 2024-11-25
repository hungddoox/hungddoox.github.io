document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const response = document.getElementById("response");
    const SIZE_LIMIT = 500;
    const INCREMENT = 10;
    
    let yesBtnSize = 16; // Initial font size for Yes button
    let noBtnSize = 16; // Initial font size for No button

    yesBtn.addEventListener("click", () => {
        response.textContent = "Yêuuuu emm 🥰";
        response.style.color = "#CA8787";
    });

    noBtn.addEventListener("click", () => {
        // Decrease No button size
        noBtnSize = Math.max(8, noBtnSize - INCREMENT);
        noBtn.style.fontSize = `${noBtnSize}px`;

        // Increase Yes button size
        yesBtnSize = Math.min(SIZE_LIMIT, yesBtnSize + INCREMENT);
        yesBtn.style.fontSize = `${yesBtnSize}px`;

        // Move No button to a random position
        noBtn.style.position = "absolute";
        // noBtn.style.top = `${Math.random() * 80}%`;
        // noBtn.style.left = `${Math.random() * 80}%`;

        // Update response
        response.textContent = "Ai cho mày bấm nút này";
        response.style.color = "#ff6b6b";
    });
});