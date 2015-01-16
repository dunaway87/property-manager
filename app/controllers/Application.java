package controllers;

import play.*;
import play.libs.Crypto;
import play.mvc.*;
import play.mvc.Scope.Session;
import secure.Secure;

import java.util.*;

import com.google.gson.JsonObject;

import models.*;

public class Application extends Controller {

	public static void login() {
		Users user = Secure.getUser();
		renderArgs.put("user", user);
		render();
	}

	public static void home() {
		Users user = Secure.getUser();
		renderArgs.put("user", user);
		render();
	}

	public static void buyer(){
		Users user = Secure.getUser();
		renderArgs.put("user", user);
		render();

	}
	public static void seller(){
		Users user = Secure.getUser();
		renderArgs.put("user", user);
		render();

	}
	public static void realtor(){
		Users user = Secure.getUser();
		renderArgs.put("user", user);
		render();

	}

	public static void signup(){
		Users user = Secure.getUser();
		renderArgs.put("user", user);
		render();

	}

	public static void theDeepDarkPlace(){
		Users user = Secure.getUser();
		if(user.email != null){
			renderArgs.put("user", user);
			render();
		} else{
			renderText("oops... I don't know who you are");
		}
		
	}
	

	public static void addUser(String firstName, String lastName, String email, String password, String retypedPassword){
		Logger.info("eeeeeemail"+ firstName);
		JsonObject response = new JsonObject();
		boolean alreadyUser =  Users.find("byEmail", email).fetch().size()>0;
		response.addProperty("alreadyUser",alreadyUser);

		if(!alreadyUser){
			Users user = new Users();
			user.firstName = firstName;
			user.lastName = lastName;
			user.email = email;
			String encrypedPW = Crypto.encryptAES(password);
			user.pw = encrypedPW;
			user.save();
			Session.current().put("userId", user.id);
		}
		renderJSON(response);
	}

	public static void signinUser(String email, String password){
		Logger.info("email %s" ,email);
		Logger.info("pw %s" ,password);

		
		JsonObject response = new JsonObject();
		List<Users> userList = Users.find("byEmail", email).fetch();
		if(userList.size() == 0){
			response.addProperty("login", "user not found");
		} else {
			Users user = userList.get(0);


			if(Crypto.decryptAES(user.pw).equals(password)){
				response.addProperty("login", "success");
				
				Session.current().put("userId", user.id);
				
			} else {
				response.addProperty("login", "bad pw");
			}
		}
		
		renderJSON(response);

	}

	public static void logout(){
		Session.current().remove("userId");
		
	}
	
}

