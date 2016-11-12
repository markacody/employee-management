console.log("connected");
var convertedDate;
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCQ0sysWIKKDflw96M2FMZ6HVPcEXmRNQg",
    authDomain: "employee-billable-hours.firebaseapp.com",
    databaseURL: "https://employee-billable-hours.firebaseio.com",
    storageBucket: "employee-billable-hours.appspot.com",
    messagingSenderId: "262395923194"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

$('#add-user').on('click', function() {
    // Initial Values
    var name = '';
    var role = '';
    var startDate = '';
    var monthlyRate = 0;

    name = $('#name-input').val().trim();
    role = $('#role-input').val().trim();
    startDate = $('#date-input').val().trim();
    monthlyRate = $('rate-input').val().trim();
    convertedDate = moment(new Date(startDate));

    dataRef.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    return false;
});
//Firebase watcher

dataRef.ref().on('child_added', function(childSnapshot) {
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().startDate);
    console.log(childSnapshot.val().monthlyRate);
    console.log(childSnapshot.val().dateAdded);

});
