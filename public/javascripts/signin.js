$('#signin-btn').click(function(){
	
	var userData = {
		email:$("#inputEmail").val(),
		password:$("#inputPassword").val(),
	}
	
	console.log(userData);
	
	$.post("signin", userData, function(data){

		if(data.members.login.value == 'success'){
			console.log("logged in");
			window.location = '/theDeepDarkPlace';
		} else {
			$('#invalidUserOrPW').show();
			console.log("not logged in");
		}
	});
	
	
	
	
});