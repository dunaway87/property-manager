package controllers;

import java.util.LinkedList;

import com.google.gson.JsonObject;

import play.Logger;
import play.mvc.Controller;
import play.vfs.VirtualFile;

public class Slides extends Controller{

	public static void getSlide(int count){
		
		
		String slideName =getSlideName(count);
		
		String slideHtml = VirtualFile.fromRelativePath("app/views/pdf-slides/$slideName$.html".replace("$slideName$", slideName)).contentAsString();
		renderText(slideHtml);
		
	}
	
	
	
	
	
	
	
	
	private static String getSlideName(int count){
		Logger.info("%s",count);
		LinkedList<String> list = new LinkedList<String>();
		list.add("personalInfo");
		list.add("slideTwo");
		list.add("slideThree");
		return list.get(count);
	}
	
}
