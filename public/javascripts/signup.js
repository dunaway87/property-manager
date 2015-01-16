$('#add-user').click(function(){
	var userData = {
		firstName:$("#first_name").val(),
		lastName:$("#last_name").val(),
		email:$("#new_email").val(),
		password:$("#password").val(),
		retypedPassword:$("#password_confirmation").val(),
	}
	
	console.log(userData);
	
	$.post("signup", userData);
	
	
	
	
});