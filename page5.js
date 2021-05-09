function logout(){
    localStorage.removeItem("Avatar:");
    localStorage.removeItem("Icon:");
    window.location = "index.html"; 
} 

var Avatar = localStorage.getItem("Avatar:"); 
var Icon = localStorage.getItem("Icon:");  

window.onload = function(){
    var Avatar = localStorage.getItem("Avatar:"); 
    var Icon = localStorage.getItem("Icon:"); 
    console.log("Icon activated.");

    var result = ""; 
    console.log("Result is " + result);

    if(Icon == "female_1"){
        var image = "<div id 'info'> <image class = 'onload' src = 'female_1.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "female_2"){
        var image = "<div id 'info'> <image class = 'onload' src = 'female_2.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "female_3"){
        var image = "<div id 'info'> <image class = 'onload' src = 'female_3.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "female_4"){
        var image = "<div id 'info'> <image class = 'onload' src = 'female_4.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "female_5"){
        var image = "<div id 'info'> <image class = 'onload' src = 'female_5.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "female_6"){
        var image = "<div id 'info'> <image class = 'onload' src = 'female_6.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "female_7"){
        var image = "<div id 'info'> <image class = 'onload' src = 'female_7.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "female_8"){
        var image = "<div id 'info'> <image class = 'onload' src = 'female_8.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "female_9"){
        var image = "<div id 'info'> <image class = 'onload' src = 'female_9.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "female_10"){
        var image = "<div id 'info'> <image class = 'onload' src = 'female_10.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "male_1"){
        var image = "<div id 'info'> <image class = 'onload' src = 'male_1.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "male_2"){
        var image = "<div id 'info'> <image class = 'onload' src = 'male_2.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "male_3"){
        var image = "<div id 'info'> <image class = 'onload' src = 'male_3.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "male_4"){
        var image = "<div id 'info'> <image class = 'onload' src = 'male_4.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "male_5"){
        var image = "<div id 'info'> <image class = 'onload' src = 'male_5.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "male_6"){
        var image = "<div id 'info'> <image class = 'onload' src = 'male_6.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "male_7"){
        var image = "<div id 'info'> <image class = 'onload' src = 'male_7.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "male_8"){
        var image = "<div id 'info'> <image class = 'onload' src = 'male_8.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "male_9"){
        var image = "<div id 'info'> <image class = 'onload' src = 'male_9.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }

    if(Icon == "male_10"){
        var image = "<div id 'info'> <image class = 'onload' src = 'male_10.png'> <h3 class = 'text'>" + Avatar + "</h3> </div>"
        document.getElementById("person").innerHTML = image; 
    }
}

function submit(){
    if(result == "depression" / "Depression"){
        window.location = "depression_chat.html"; 
    }

    if(result == "anxiety" / "Anxiety"){
        window.location = "anxiety_chat.html"; 
    }

    if(result == "loneliness" / "Loneliness"){
        window.location = "loneliness_chat.html"; 
    }

    if(result == "friends" / "Friends"){
        window.location = "friends_chat.html"; 
    }

    if(result == "Mood" / "mood"){
        window.location = "mood_chat.html"; 
    }

    if(result == "trauma" / "Trauma"){
        window.location = "trauma_chat.html"; 
    }

    if(result == "panic" / "Panic"){
        window.location = "panic_chat.html"; 
    }

    if(result == "sleep" / "Sleep"){
        window.location = "sleep_chat.html"; 
    }
} 