package models;

import javax.persistence.Entity;

import play.db.jpa.Model;

@Entity
public class Users extends Model{

	public String firstName;
	public String lastName;
	public String email;
	public String pw;
	
	
}
