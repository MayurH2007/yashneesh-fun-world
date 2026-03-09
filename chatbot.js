const input = document.getElementById("chatInput");
const chatBody = document.getElementById("chatBody");

input.addEventListener("keypress", function(e){

if(e.key === "Enter"){

let userMessage = input.value.toLowerCase();

let reply = "Sorry, I didn't understand.";

if(userMessage.includes("ticket")){
reply = "Adult ticket is ₹390 and kids ticket is ₹250.";
}

else if(userMessage.includes("time")){
reply = "The park usually opens around 10 AM and closes at 5 PM.";
}

else if(userMessage.includes("location")){
reply = "Yashneesh Fun World is located near Jain Engineering College in Belagavi.";
}

else if(userMessage.includes("rides")){
reply = "The park has water slides, rain dance, kids pool and many fun attractions.";
}

chatBody.innerHTML += "<p><b>You:</b> " + userMessage + "</p>";
chatBody.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";

input.value = "";

}

});