let currentUrl = window.location.href;

if (currentUrl == 'http://localhost:8080/') {
    document.getElementById("1").className = "active";
    document.getElementById("2").className = "";
    document.getElementById("3").className = "";
} else if (currentUrl == 'http://localhost:8080/posts/add-new') {
    document.getElementById("1").className = "";
    document.getElementById("2").className = "active";
    document.getElementById("3").className = "";
} else if (currentUrl == 'http://localhost:8080/login') {
    document.getElementById("1").className = "";
    document.getElementById("2").className = "";
    document.getElementById("3").className = "active";
}else {
    document.getElementById("1").className = "";
    document.getElementById("2").className = "";
    document.getElementById("3").className = "";
}