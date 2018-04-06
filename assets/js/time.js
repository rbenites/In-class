/* BEGIN JAVASCRIPT*/
var config = {
    apiKey: "AIzaSyDiG1XYSQGN1t2PLA5hdlXdJsuwal2Mo44",
    authDomain: "timecard-database.firebaseapp.com",
    databaseURL: "https://timecard-database.firebaseio.com",
    projectId: "timecard-database",
    storageBucket: "timecard-database.appspot.com",
    messagingSenderId: "241596015367"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
    var inputST = "";
    var eRole = "";
    var eYr = "";
    var eRate = "";

  $("#submit").on("click", function (){
    event.preventDefault();
    database.ref().on("value", function(snapshot){



    })



    
  })

/*END JAVASCRIPT*/