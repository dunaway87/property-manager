$('#add-user').click(function(){

	if($("#first_name").val()  == ''){
		$('#firstNameRequired').show();
	} else if($("#last_name").val()  == ''){
		$('#lastNameRequired').show();
	} else if(!($("#password").val()==$("#password_confirmation").val())){
		$('#retypePWError').show();
	} else {






		var userData = {
				firstName:$("#first_name").val(),
				lastName:$("#last_name").val(),
				email:$("#new_email").val(),
				password:$("#password").val(),
				retypedPassword:$("#password_confirmation").val(),
		}

		console.log(userData);

		$.post("signup", userData, function(data){
			console.log(data);
			if(data.members.alreadyUser.value == true){
				console.log('already user');
				$('#emailExistsAlready').show();
				
			} else {
				window.location = '../buyerInfo'
			}
		});


	}

});