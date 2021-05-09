window.onload = function(){
    var Avatar = localStorage.getItem("Avatar:"); 
    var Icon = localStorage.getItem("Icon:"); 
    console.log("Icon activated.");

    var result = ""; 
    document.getElementById("problem").innerHTML = result; 
    console.log("Result is " + result);

    if(Icon == "female_1"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'female_1.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "female_2"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'female_2.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "female_3"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'female_3.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "female_4"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'female_4.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "female_5"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'female_5.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "female_6"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'female_6.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "female_7"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'female_7.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "female_8"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'female_8.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "female_9"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'female_9.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "female_10"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'female_10.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "male_1"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'male_1.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "male_2"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'male_2.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "male_3"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'male_3.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "male_4"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'male_4.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "male_5"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'male_5.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "male_6"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'male_6.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "male_7"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'male_7.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "male_8"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'male_8.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "male_9"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'male_9.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }

    if(Icon == "male_10"){
        var image = "<div id 'info'> <image class = 'chat_onload' src = 'male_10.png'> <h3 class = 'text_onload'>" + Avatar + "</h3> </div>"
        document.getElementById("person_load").innerHTML = image; 
    }
}


var firebaseConfig = {
    apiKey: "AIzaSyDbcwF_FsR8uyqPwviFNlI6WBlZQNDbzWs",
    authDomain: "build-a-friend-b867c.firebaseapp.com",
    projectId: "build-a-friend-b867c",
    storageBucket: "build-a-friend-b867c.appspot.com",
    messagingSenderId: "305552474100",
    appId: "1:305552474100:web:55f13a601811f649e7c3a1",
    measurementId: "G-SRGNNTX8FS"
  };
  firebase.initializeApp(firebaseConfig);
  
username = localStorage.getItem("Avatar:"); 

function join_room(){
    document.getElementById("message").style.display = "block"; 
    document.getElementById("send_message").style.display = "block"; 
}

function send(){
    msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name:user_name, 
        message:msg,
        like:0
    });

    document.getElementById("message").value = " ";
}

function getData() { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { 
        childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         console.log("Keys are - " + firebase_message_id);
         console.log(message_data);

         var name = message_data["name"];
         var msg = message_data["message"];
         var like = message_data["like"]; 
        
         name_with_tag = "<h4>" + name + " <img class = 'user_tick' src = 'tick.png'> </h4>"; 
         msg_with_tag = "<h4 class = 'msg_h4'>" + msg + "</h4>"; 
         like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; 
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
         row = name_with_tag + msg_with_tag + like_button + span_with_tag; 
         document.getElementById("output").innerHTML += row; 
        
      } 
    });  
}); }
getData();

function updateLike(message_id){
    console.log("test console");
    console.log("Clicked on like button " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value; 
    updated_likes = Number(likes) + 1; 
    console.log("Updated likes are - " + updated_likes);

    firebase.database().ref(room_name).child(message_id).update({like: updated_likes}); 
}

function logout(){
    localStorage.removeItem("Avatar:");
    localStorage.removeItem("Icon:");
    window.location = "index.html"; 
} 
