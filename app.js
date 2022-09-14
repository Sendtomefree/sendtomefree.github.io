
const firebaseConfig = {
    apiKey: "AIzaSyDTH43bYN4h7AG20xLUJcMkIFlcJh1GwRA",
    authDomain: "senttome-2fe0c.firebaseapp.com",
    databaseURL: "https://senttome-2fe0c-default-rtdb.firebaseio.com",
    projectId: "senttome-2fe0c",
    storageBucket: "senttome-2fe0c.appspot.com",
    messagingSenderId: "772680538003",
    appId: "1:772680538003:web:3785677cd5638888047a66"
};
firebase.initializeApp(firebaseConfig);


function send() {
    var msg = getElementVal("msg");
    var reff = getElementVal("refsend");
    if(reff.length > 0 && msg != "") {
        saveMessages(msg, reff);
        alert("Message sent successfully!");
    } else if(reff.length <= 0) {
        alert("Type refference");
    } else if(msg == "") {
        alert("Type message or select an image");
    } else {
        alert("Type Refference and message or select an image");
    }
    
}

const saveMessages = (msg, reff) => {
  
    firebase.database().ref("Messages/"+reff).set({
      refference: reff,
      message: msg
    });
};

function recv() {
    var reff = getElementVal("refrecv");
    document.getElementById("recvMsg").placeholder="Messsage receiving...";
    if(reff.length > 0){
        firebase.database().ref('Messages/'+reff).on('value', function(snapshot){
            document.getElementById("recvMsg").value = snapshot.val().message;
        });
    } else {
        alert('Please enter refference message');
    }
}

function copyMsg() {
    const copyMsg = document.getElementById("recvMsg");

	copyMsg.select();
	document.execCommand("Copy");

}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};



function gotorecv(){
    var sendForm = document.getElementById('send');
    var recvForm = document.getElementById('receive');
    var sendPG = document.getElementById('sendPG');
    var receivePG = document.getElementById('recvPG');

    sendForm.style.left = "-450px";
    recvForm.style.left = "10px";
    sendPG.style.backgroundColor = "white";
    receivePG.style.backgroundColor = "cadetblue";
}

function gotosend(){
    var sendForm = document.getElementById('send');
    var recvForm = document.getElementById('receive');
    var sendPG = document.getElementById('sendPG');
    var receivePG = document.getElementById('recvPG');

    sendForm.style.left = "20px";
    recvForm.style.left = "450px";
    sendPG.style.backgroundColor = "cadetblue";
    receivePG.style.backgroundColor = "white";
}