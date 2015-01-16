package secure;

import models.Users;
import play.Logger;
import play.mvc.Scope.Session;

public class Secure {

	public static Users getUser(){
		
		String userId = Session.current().get("userId");
		Logger.info(userId);
		
		if(userId == null){
			Users guest = new Users(); 
			guest.email = null;
			guest.firstName = null;
			guest.lastName = null;
			
			return guest;
		}
		Users user = Users.findById(Long.parseLong(userId));
		return user;
	}
	
	
	
}
