document.addEventListener("DOMContentLoaded", function () {
    const profile = document.getElementById("profilePic");

    let position = 0;
    let direction = 1;
    let maxBounce = 10;
    let speed = 0.2;

    function floatAnimation() {
        position += direction * speed;

        if (position >= maxBounce || position <= -maxBounce) {
            direction *= -1;
        }

        profile.style.transform = `translateY(${position}px)`;

        setTimeout(floatAnimation, 20);
    }

    floatAnimation();
});


