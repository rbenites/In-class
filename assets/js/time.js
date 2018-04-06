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

$("#submit").on("click", function () {
  event.preventDefault();
  eName = $("#eName").val().trim();
  eRole = $("#eRole").val().trim();
  eYr = $("#eYr").val().trim();
  eRate = $("#eRate").val().trim();




});

/*END JAVASCRIPT*/