 $(document).ready(function () {
	
	 $('.main-slider').slick({
		  dots: true,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  adaptiveHeight: true
		});
	 $(".type-element").typed({
        strings: ["loves simple designs.", "like to get things done.", "is good at communication."],
        typeSpeed: 30,
		 loop: true,
		  backDelay: 2000,
      });
	
 });
