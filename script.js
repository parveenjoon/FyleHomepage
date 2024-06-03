$(document).ready(function(){
    // Open contact form modal on button click
    $("#contactUsBtn").click(function(){
        $("#contactUsModal").css("display", "block");
    });

    // Close contact form modal on close button click
    $(".close").click(function(){
        $("#contactUsModal").css("display", "none");
    });

    // Close contact form modal on outside click
    $(window).click(function(event) {
        if (event.target == $("#contactUsModal")[0]) {
            $("#contactUsModal").css("display", "none");
        }
    });

    // Handle form submission
    $("#contactForm").submit(function(event){
        event.preventDefault();
        // Send form data to getform.io endpoint using AJAX
        $.ajax({
            url: "https://getform.io/your-endpoint",
            method: "POST",
            data: $(this).serialize(),
            success: function(response){
                console.log("Form submitted successfully");
                // Optionally, display success message or redirect user
            },
            error: function(xhr, status, error){
                console.error("Error:", error);
                // Optionally, display error message to user
            }
        });
    });

    // Slider functionality for "What We Do" section
    var slideIndex = 0;

    function showSlides() {
        var slides = $(".slide");
        var dots = $(".dot");
        
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        
        slideIndex++;
        
        if (slideIndex > slides.length) { 
            slideIndex = 1; 
        }
        
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        slides[slideIndex - 1].style.display = "block";  
        dots[slideIndex - 1].className += " active";
        
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    showSlides();

    // Handle "Read More" button in "What We Do" section
    $("#readMoreBtn").click(function() {
        window.open("https://fylehq.com", "_blank");
    });

    // Dynamic image change based on content clicked in "Our Project" section
    $(".project-content").click(function() {
        var contentId = $(this).attr("id");
        var imageSrc = "image_" + contentId + ".jpg"; // Assuming images are named accordingly
        $("#projectImage").attr("src", imageSrc);
    });

    // Hover highlight effect for cards
    $(".card").hover(function() {
        $(this).addClass("highlight");
    }, function() {
        $(this).removeClass("highlight");
    });
});
