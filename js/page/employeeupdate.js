$(document).ready(function () {
  $(document).on("click", ".updatevalue", function(){
        console.log("Am in");
	const requestURL1 = '/employee/update/';
	console.log('making ajax request to:', requestURL1);
	
	var memvalue = {
		employeeNumber :$('#enumber').val(), 
		firstName : $('#efname').val(), 
		lastName : $('#elname').val(),
		jobTitle : $('#etitle').val(),
		email : $('#eemail').val(),
		extension : $('#eexten').val(),
	};
	console.log($('#enumber').val().toString());
	$.ajax({
	// all URLs are relative to http://localhost:3000/
	url: requestURL1,
	type: 'POST',
	data: memvalue,
	dataType: 'json', // this URL returns data in JSON format
	});
    console.log(memvalue);
    location.reload(true);
  });
$(document).on("click", ".deletevalue", function(){
    console.log("Am in");
const requestURL2 = '/employee/delete/';
console.log('making ajax request to:', requestURL2);

var memvalue = {
    employeeNumber :$('#enumber').val()};
$.ajax({
url: requestURL2,
type: 'DELETE',
data: memvalue,
dataType: 'json', // this URL returns data in JSON format
});
location.reload(true);
console.log(memvalue);
});
$(document).on("click", ".cancle", function(){
    location.reload(true);
});

});