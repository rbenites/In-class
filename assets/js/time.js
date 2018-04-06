/*jshint esversion: 6 */
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
var eName = "";
var eRole = "";
var eYr = "";
var eRate = "";
var mRate = "";
var totBilled = "";
var nowDate = Date.now();

$("#submit").on("click", function () {
  event.preventDefault();
  eName = $("#eName").val().trim();
  eRole = $("#eRole").val().trim();
  eYr = $("#eYr").val().trim();
  eRate = $("#eRate").val().trim();
  mRate = nowDate - eYr;
  totBilled = eRate * mRate;


  database.ref().push({
    eName: eName,
    eRole: eRole,
    eYr: eYr,
    eRate: eRate,
    mRate: nowDate - eRate,
    totBilled: eRate * mRate
  }, function (errorObject) {
    console.log("Brian made a mistake");
  });

});

// Get elements from the database
database.ref().on("child_added", function(snapshot) {
  console.log(snapshot.val());
  
  var tableRow = $("<tr>");
  var tableData = $("<td>");
  
  snapshot.forEach(function(childSnapshot) {
    var name = childSnapshot.eName;
    var role = childSnapshot.eRole;
    var year = childSnapshot.eYr;
    var employeeRate = childSnapshot.eRate;
    var monthlyRate = childSnapshot.mRate;
    var billed = childSnapshot.totBilled;

    
  });

  
});

/*END JAVASCRIPT*/