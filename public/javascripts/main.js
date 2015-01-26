var firstName = $("#firstName").val();
var lastName = $("#lastName").val();
var email = $("#email").val();

$("#logout-btn").click(function(){
	
	$.get('logout',function(data){
		
		window.location='';
		
	});
	
});
console.log('main');
if(email==''){
	$('#loggedInDropdown').hide();
	$('#login-tab').show();
} else {
	$('#loggedInDropdown').show();
	$('#login-tab').hide();	
}


$('#startPaperwork').click(function(){
	window.location='buyerInfo';
})

$('#exploreMap').click(function(){
	window.location='/cheyenne';
})