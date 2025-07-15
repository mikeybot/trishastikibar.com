document.addEventListener("DOMContentLoaded", function () {
    let count = localStorage.getItem("tikiCounter") || Math.floor(Math.random() * 10000); ;
    count++;
    localStorage.setItem("tikiCounter", count);
    document.getElementById("visitor-counter").textContent = count;
});
