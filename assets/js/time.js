/*jshint esversion: 6 */
/*:::::::::::::DOM CACHE:::::::::::*/
var headings = ["Employee Name", "Role", "Start Date", "Months Worked", "Monthly Rate ($)", " Total Billed ($)"];
// console.log("fhdhfdk");
/* BEGIN JAVASCRIPT*/

//Brian's Firebase config
// var config = {

//     apiKey: "AIzaSyDiG1XYSQGN1t2PLA5hdlXdJsuwal2Mo44",
//     authDomain: "timecard-database.firebaseapp.com",
//     databaseURL: "https://timecard-database.firebaseio.com",
//     projectId: "timecard-database",
//     storageBucket: "timecard-database.appspot.com",
//     messagingSenderId: "241596015367"
//   };
//   firebase.initializeApp(config);

// Collier's firebase config
var config = {
  apiKey: "AIzaSyCO3lU_iUypaxL8iItexi27kS0H6Z9ytAY",
  authDomain: "employee-timesheet-189fc.firebaseapp.com",
  databaseURL: "https://employee-timesheet-189fc.firebaseio.com",
  projectId: "employee-timesheet-189fc",
  storageBucket: "",
  messagingSenderId: "600732054242"
};
firebase.initializeApp(config);


var database = firebase.database();
var eName = "";
var eRole = "";
var eYr = "";
var eRate = "";
var mRate = "";
var totBilled = "";
var nowDate = Math.floor(Date.now() / 1000);

$("#submit").on("click", function (event) {
  event.preventDefault();
  eName = $("#eName").val().trim();
  eRole = $("#eRole").val().trim();
  eYr = $("#eYr").val().trim();
  eRate = parseFloat( $("#eRate").val().trim() );
  // mRate = nowDate - eYr;
  // totBilled = eRate * mRate;

  database.ref().push({
    eName: eName,
    eRole: eRole,
    eYr: eYr,
    eRate: eRate,
    // mRate: mRate,
    // totBilled: totBilled
  });

});




//   database.ref().set({
//     eName: eName,
//     eRole: eRole,
//     eYr: eYr,
//     eRate: eRate,
//     mRate: nowDate - eRate,
//     totBilled: eRate * mRate
//   }, function (errorObject){
//     console.log("Brian made a mistake");
//   });


// });

database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val().eName);
  console.log(childSnapshot.val().eRole);
  console.log(childSnapshot.val().eYr);
  console.log(childSnapshot.val().eRate);


});

function results(x) {
  var table = $("<table class='table'>");
  var tblHD = $("<thead>");
  var tr = $("<tr>");
  for (var i = 0; i < headings.length; i++) {
    var th = $("<th scope='col'>");
    th.text(headings[i]);
    tr.append(th);
    // console.log("hththt");
  }
  tblHD.append(tr);
  table.append(tblHD);
  $(".tableResults").html(table);
  // console.log(table);
}
results();
/*END JAVASCRIPT*/