var firebaseConfig = {
  apiKey: "AIzaSyDdiKWYtACpp6rBYFR-KcPEDz78QbNP770",
  authDomain: "kwitter-ac15b.firebaseapp.com",
  databaseURL: "https://kwitter-ac15b-default-rtdb.firebaseio.com",
  projectId: "kwitter-ac15b",
  storageBucket: "kwitter-ac15b.appspot.com",
  messagingSenderId: "6807181148",
  appId: "1:6807181148:web:ab26c9986f0bf131289399"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
          console.log("room_name - " + Room_names )
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'  >4"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML+= row;

      });});}
getData();


function addRoom()
{
  room_name = document.getElementById(room_name).value

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name)

  window.location = "kwitter_page.html";
}