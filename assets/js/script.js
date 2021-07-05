// let inputBox = document.querySelector('.search-text')
//
// inputBox.addEventListener('input', function() {
//     document.querySelector('.box').style.display = "block";
// });
function ShowMenu() {
    var x = document.getElementById("profile-menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}