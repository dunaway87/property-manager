var count=0;
var slideTag = '';

var slideInnerName;
var slideName ;
function getSlide(){
	$(slideName).fadeOut(0);

	var slideData = {'count':count};
	 
	slideTag =getSlideTag(count);
	
	
	slideInnerName = '#slide-inner'+slideTag;
	slideName = '#slide'+slideTag;
	
	
	
	console.log("slide-inner-name: "+ slideInnerName)
	
	$.get('slide',slideData,function(data){
		$(slideInnerName).html(data);
		

			$(slideName).fadeIn(0);

			

		count = count+1;
	});
	
	return $.Deferred().resolve();
}

function nextSlide(){
	getSlide();
}
function previousSlide(){
	count--;
	count--;
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