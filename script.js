document.addEventListener("DOMContentLoaded", () => {
    const helloText = document.getElementById("hello-text");

    setInterval(() => {
        helloText.style.color = helloText.style.color === "red" ? "yellow" : "red";
    }, 1000);
});
