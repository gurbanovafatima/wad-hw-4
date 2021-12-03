let currentUrl = window.location.href;

if (currentUrl == 'http://localhost:8080/') {
    document.getElementById("1").className = "active";
    document.getElementById("2").className = "";
} else if (currentUrl == 'http://localhost:8080/posts/add-new') {
    document.getElementById("1").className = "";
    document.getElementById("2").className = "active";
} else {
    document.getElementById("1").className = "";
    document.getElementById("2").className = "";
}