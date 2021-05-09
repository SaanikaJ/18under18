var firebaseConfig = {
    apiKey: "AIzaSyANnivuiB7pCzo5lLgiSVFB8hKGtA8X87s",
    authDomain: "build-a-friend-username.firebaseapp.com",
    projectId: "build-a-friend-username",
    storageBucket: "build-a-friend-username.appspot.com",
    messagingSenderId: "995778116819",
    appId: "1:995778116819:web:a92098200ef0fef62b6826",
    measurementId: "G-TE2KJKVQVJ"
  };
  firebase.initializeApp(firebaseConfig);

user__ = document.getElementById("user_name").value;
console.log("name is " + user__); 

function check_user(){
  user__ = document.getElementById("user_name").value;
  var array_names = []; 
  array_names.push(user__); 

  var array_names1 = [];
  array_names1.push(array_names, user__); 

  window.location("index_pg5.html"); 
  console.log("Back to the chat room!")
} 

var array_names = []; 
array_names.push(user__); 
console.log(array_names);  