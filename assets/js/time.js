/*jshint esversion: 6 */
/*:::::::::::::DOM CACHE:::::::::::*/
var headings = ["Employee Name", "Role", "Start Date", "Months Worked", "Monthly Rate ($)", " Total Billed ($)"];

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

var query = firebase.database().ref();
query.on("child_added", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
      console.log(childData);
  });
});

// database.ref().on("child_added", function(snapshot) {
//   console.log(snapshot.val());
  
//   var tableRow = $("<tr>");
//   var tableData = $("<td>");
  
//   snapshot.forEach(function(childSnapshot) {
//     var name = childSnapshot.eName;
//     var role = childSnapshot.eRole;
//     var year = childSnapshot.eYr;
//     var employeeRate = childSnapshot.eRate;
//     var monthlyRate = childSnapshot.mRate;
//     var billed = childSnapshot.totBilled;

//     console.log(name);
//     console.log(role);
//     console.log(year);
//   });


function results() {
  var table = $("<table class='table'>");
  var tblHD = $("<thead>");
  var tr = $("<tr>");
  for (var i = 0; i < headings.length; i++) {
    var th = $("<th scope='col'>");
    th.text(headings[i]);
    tr.append(th);
    console.log("hththt");
  }
  tblHD.append(tr);
  table.append(tblHD);
  $(".tableResults").html(table);
  console.log(table);


}
results();

/*END JAVASCRIPT*/