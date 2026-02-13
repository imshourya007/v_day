document.addEventListener("DOMContentLoaded", function () {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    let moveCount = 0;

    noBtn.addEventListener("mouseover", () => {
        moveCount++;
        noBtn.style.transform =
            `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
        if (moveCount > 3) noBtn.textContent = "You can say Yes 😏";
    });

    yesBtn.addEventListener("click", () => {

        const img = document.getElementById("cat-gif");
        if (img) {
            img.style.transform = "scale(1.3)";
            img.style.boxShadow = "0 0 60px red";
        }

        for (let i = 0; i < 15; i++) {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * window.innerWidth + "px";
            heart.style.top = window.innerHeight - 100 + "px";
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 2000);
        }

        setTimeout(() => {
            window.location.href = "yes.html";
        }, 1500);
    });

});
