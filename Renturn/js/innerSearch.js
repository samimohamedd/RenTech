document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
        validateSearch();
        }
    });
    })

function validateSearch() {
    let input = document.getElementById("search").value.trim().toLowerCase();
    if (input===""){
    let error = document.getElementById("error");
        error.style.visibility='visible';
    }
    else{
    switch(input){
    case 'electronics':
        window.location.href="../pages/electronics.html"
        break;
        
    case 'tools':
        window.location.href="../pages/tools.html"
        break;

    case 'clothes': 
        window.location.href="../pages/clothes.html"
        break;
        
    case 'event supplies':
        window.location.href="../pages/event.html"
        break;
        
    case 'music':
        window.location.href="../pages/music.html"
        break;
        
    }
    }
    }