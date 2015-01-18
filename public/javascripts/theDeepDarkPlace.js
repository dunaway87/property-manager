var count=0;
var slideTag = '';
var slideHeight = 0;
var slideWidth = 0;
var slideInnerName;
var slideName ;
function getSlide(){
	var slideData = {'count':count};
	 
	slideTag =getSlideTag(count);
	
	
	slideInnerName = '#slide-inner'+slideTag;
	slideName = '#slide'+slideTag;
	
	
	
	console.log("slide-inner-name: "+ slideInnerName)
	$(slideName).slideUp();
	
	$.get('slide',slideData,function(data){
		$(slideInnerName).html(data);
		$(slideInnerName).append("<div id='next-previous-btns'><button id='next-slide-btn' value='next' class='btn' onclick='nextSlide()'>Next &rArr;</button><button id='previous-slide-btn' value='next' class='btn'>&lArr; Previous</button></div>");
		slideHeight = $(slideInnerName).height();
		slideWidth = $(slideInnerName).width();
		
		console.log(slideInnerName+' height:' + slideHeight);
		$(slideName).height(slideHeight);
		
		$('#next-previous-btns').width(slideWidth);
		console.log('slide:'+slideName+" to height "+slideHeight);
		$(slideName).height(slideHeight);
		$(slideName).slideDown();
		count = count+1;
	});
	
	return $.Deferred().resolve();
}
function nextSlide(){
	
	
	getSlide();
	
}

getSlide();

function isEven(n) 
{
   return  (n % 2 == 0);
}


function getSlideTag(count) {
	if(isEven(count)){
		return '';
	} else{
		return '-two';
	}
}