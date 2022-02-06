const open = document.getElementById("open"); 
const login_popup = document.getElementById("login_popup");
const close = document.getElementById("close");

open.addEventListener("click", () => {
    login_popup.classList.add("show");
});

close.addEventListener("click", () => {
    login_popup.classList.remove("show");
});