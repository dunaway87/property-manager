package controllers;

import java.util.LinkedList;

import com.google.gson.JsonObject;

import play.Logger;
import play.mvc.Controller;
import play.vfs.VirtualFile;

public class Slides extends Controller{

	public static void getSlide(int count){
		
		
		String slideName =getSlideName(count);
		
		String slideHtml = VirtualFile.fromRelativePath("app/views/pdf-slides/$slideName$.html".replace("$slideName$", slideName)).contentAsString().replace("$buttons$",getButtonsHtml());
		renderText(slideHtml);
		
	}
	
	
	
	
	
	
	
	
	private static String getButtonsHtml() {

		String buttonsHtml="<div class='row'><div id='next-previous-btns'><button id='next-slide-btn' value='next' class='btn' onclick='nextSlide()'>Next &rArr;</button><button id='previous-slide-btn' value='next' class='btn' onclick='previousSlide()'>&lArr; Previous</button></div></div>";
		
		return buttonsHtml;
	}








	private static String getSlideName(int count){
		Logger.info("%s",count);
		LinkedList<String> list = new LinkedList<String>();
		list.add("personalInfo1");
		list.add("personalInfo2");
		list.add("personalInfo3");
		list.add("personalInfo4");
		list.add("personalInfo5");
		return list.get(count);
	}
	
}
