$('#signin-btn').click(function(){
	
	var userData = {
		email:$("#inputEmail").val(),
		password:$("#inputPassword").val(),
	}
	
	console.log(userData);
	
	$.post("signin", userData, function(data){
		console.log(data);
		console.log(data.members.login.value);
		
		var loginSuccess = data.members.login.value;
		if(loginSuccess === undefined){
			var loginSuccess = data.members.login;
		}
		
		if(loginSuccess == 'success'){
			console.log("logged in");
			window.location = '../';
		} else {
			$('#invalidUserOrPW').show();
			console.log("not logged in");
		}
	});

});


if(email==''){
	$('#homeNotLoggedIn').show();
	$('#homeLoggedIn').hide();

} else {
	$('#homeNotLoggedIn').hide();
	$('#homeLoggedIn').show();
}