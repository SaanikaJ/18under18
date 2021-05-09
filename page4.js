function female_avatar(){
    window.location = "female_avatar_pg1.html"; 

}

function male_avatar(){
    window.location = "male_avatar_pg1.html"; 
}

function logout(){
    localStorage.removeItem("Avatar:");
    localStorage.removeItem("Icon:");
    window.location = "index.html"; 
} 