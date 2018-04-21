$( document ).ready(function() {
    // THIS IS AN AJAX REQUEST THAT GETS AN URL ARGUMENT FROM
    //  CLICKING ON ACCORDION IMAGES AND CHANGES THE API
    // IT CONTAINS IMAGES HEADINGS AND PARAGRAPHS THAT ARE NECESSARY
    function changeURL(URL){

        var finalURL = URL;
        RequestSend(finalURL);
        console.log(finalURL);
        
        // ajax request
        function RequestSend(url){
            var request = new XMLHttpRequest();
            request.open("GET", url);
            request.type = "json";
            request.onload = function(){
                
                var jsonObject = JSON.parse(request.response);
                
                for(var i = 0; i < jsonObject.cards.length; i++){
                    // changes headers
                    $(".changableH1").eq(i).text(jsonObject.cards[i].header);
                    
                    // changes paragraphs
                    $(".changableP").eq(i).text(jsonObject.cards[i].paragraph);
                    
                    // changes card images
                    $(".changableImg").eq(i).attr("src",jsonObject.cards[i].imageSource);



                    // This function is in charge of loading different content from apis depending on
                    // selected card.
                    contentChange();
                    function contentChange() {
                            $("h6").eq(0).click(function () {
                                for (let i = 0; i < jsonObject.images.length; i++) {
                                    $(".displayedImages").eq(i).attr("src", jsonObject.images[i].bigImageSource1);
                                    $(".galleryImage").eq(i).attr("href", jsonObject.images[i].bigImageSource1);

                                }
                                    // changes expanded card header of the 1st card click
                                    $("#bigHeading").text(jsonObject.cards[0].header);

                                    // changes the long paragraph of the 1st card click
                                    $("#longParagraph").text(jsonObject.cards[0].longParagraph);

                            });
                            $("h6").eq(1).click(function () {
                                for (let i = 0; i < jsonObject.images.length; i++) {
                                    $(".displayedImages").eq(i).attr("src", jsonObject.images[i].bigImageSource2);
                                    $(".galleryImage").eq(i).attr("href", jsonObject.images[i].bigImageSource2);

                                }
                                    // changes expanded card header of the 2nd card click
                                    $("#bigHeading").text(jsonObject.cards[1].header);

                                    // changes the long paragraph of the 2nd card click
                                    $("#longParagraph").text(jsonObject.cards[1].longParagraph);

                            });
                            $("h6").eq(2).click(function () {
                                for (let i = 0; i < jsonObject.images.length; i++) {
                                    $(".displayedImages").eq(i).attr("src", jsonObject.images[i].bigImageSource3);
                                    $(".galleryImage").eq(i).attr("href", jsonObject.images[i].bigImageSource3);

                                }
                                    // changes expanded card header of the 3rd card click
                                    $("#bigHeading").text(jsonObject.cards[2].header);

                                    // changes the long paragraph of the 3rd card click
                                    $("#longParagraph").text(jsonObject.cards[2].longParagraph);

                            });
                        
                    }

                }
                return jsonObject;
            }

            request.send();
            
        }

        // changes expanded view of the card

    };
    // Checking if both accordions are hidden so that they
    // stay hidden on resize of other pages, but it should still switch accordions on the first page
    // WHAT I TRIED:
    // if($("#accordionWrapper").is(":hidden")  && $(".accordionWrapperMobile").is(":hidden"))
    // if(document.querySelector("#accordionWrapper").style.display === "none" && document.querySelector(".accordionWrapperMobile").style.display === "none")

    var areHidden = false;
    window.addEventListener("resize",function checkResize() {
        if(areHidden === true){
            
            $(".accordion").hide();
            $(".accordionWrapperMobile").hide();

        }

        else if(window.innerWidth < 992){
            $(".accordionWrapperMobile").fadeIn(1500);
            $(".accordion").hide();

        }else if (window.innerWidth > 992){
            $(".accordionWrapperMobile").hide(0);
            $(".accordion").fadeIn(1500);

        }
    });

    // Onload resize accordion
    if(window.innerWidth < 992){
        $(".accordionWrapperMobile").fadeIn(1500);
        $(".accordion").hide();
        console.log("Loaded mobile");

    }else{
        $(".accordionWrapperMobile").hide(0);
        $(".accordion").fadeIn(1500);
        console.log("Loaded Desktop")

    }
    
    // PAGE CHANGES
    // Back to home button

    $(".backButton").click(function(){
        $(".options").hide(800);
        $(".expanded").hide(800);
        $(".contact").hide(800);
        $(".backButton").hide(800);
        areHidden = false;
        if(window.innerWidth < 992){
            $(".accordionWrapperMobile").fadeIn(1500);
            $(".accordion").hide();

        }else{
            $(".accordionWrapperMobile").hide(0);
            $(".accordion").fadeIn(1500);

        }
   
    });

    // Change page depending on clicked image- on click changes the api and sends
    // it to a function that changes the content
    // API's
    var pageContentURL = [
        "http://api.myjson.com/bins/10juab",
        "http://api.myjson.com/bins/10juab",
        "http://api.myjson.com/bins/10juab",
        "http://api.myjson.com/bins/10juab",
        "http://api.myjson.com/bins/10juab",
    ]
    // DESKTOP API CHANGE
    for (let i = 0; i < $(".accordion").children().length; i++) {

        $(".accordion").children().eq(i).click(function(){
            pageContentURL[i];
            changeURL(pageContentURL[i]);
            
        });
        
    }
    // MOBILE API CHANGE
    for (let i = 0; i < $(".accordion").children().length; i++) {

        $(".accordionWrapperMobile").children().eq(i).click(function(){
            pageContentURL[i];
            changeURL(pageContentURL[i]);
            
        });
        
    }

    // Link to options
    // Accordion links
    $(".accordion").children().click(function(){
        $(".accordion").hide(800);
        $(".options").fadeIn(1500);
        $(".backButton").fadeIn(1500);
        areHidden = true;

    });
    
    // ACCORDION LINKS MOBILE

    $(".accordionWrapperMobile").children().click(function(){
        $(".accordionWrapperMobile").hide(800);
        $(".options").fadeIn(1500);
        $(".backButton").fadeIn(1500);
        areHidden = true;
        
    });

    
    // Link to extended view
    $("h6").click(function(){
        $(".options").hide(800);
        $(".expanded").fadeIn(1500);
        $(".backButton").fadeIn(1500);
        areHidden = true;

        
    });
    
    // Link to the contact page
    $(".contactLink").click(function(){
        $(".options").hide(500);
        $(".expanded").hide(500);
        $(".accordion").hide(500);
        $(".contact").fadeIn(1500);
        $(".backButton").fadeIn(1500);
        $(".accordionWrapperMobile").hide(800);
        areHidden = true;

        
    });
    
    // Link to homepage
    $(".logo").click(function(){
        $(".options").hide(800);
        $(".expanded").hide(800);
        $(".contact").hide(800);
        $(".backButton").hide(800);
        areHidden = false;

        if(window.innerWidth < 992){
            $(".accordionWrapperMobile").fadeIn(1500);
            $(".accordion").hide();

        }else{
            $(".accordionWrapperMobile").hide(0);
            $(".accordion").fadeIn(1500);

        }
 
    });
    
    // HAMBURGER
    $('#nav-icon').click(function(){
        $(this).toggleClass('animate-icon');
        $('#overlay').fadeToggle();

    });
    
    $('#overlay').click(function(){
        $('#nav-icon').removeClass('animate-icon');
        $('#overlay').toggle();

    });
    
    // FORM VALIDATION
    
    var form = document.getElementById('form');
    form.addEventListener("submit", validation);
    
    function validation(event) {
        event.preventDefault();

        var verified = true;

        // REGEX FOR NAME
        var name = document.getElementById('name').value;
        var nameREGEX = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
        var nameResult = nameREGEX.test(name);
        console.log(nameResult);
        
        if(nameResult === false){
            verified = false;
            document.getElementById('name').style.borderColor = "red";
            
        }
        
        // REGEX FOR EMAIL
        var email = document.getElementById('email').value;
        var emailREGEX =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
        var emailResult = emailREGEX.test(email);
        console.log(emailResult);
        
        if(emailResult === false){
            verified = false;
            document.getElementById('email').style.borderColor = "red";
            
        }
        
        // REGEX FOR PHONE
        var phone = document.getElementById('phone').value;
        var phoneREGEX = /^[0-9]+$/gm;
        var phoneResult = phoneREGEX.test(phone);
        console.log(phoneResult);
        
        if(phoneResult === false){
            verified = false;
            document.getElementById('phone').style.borderColor = "red";
            
        }
        // Submit form if verified
        console.log(verified);
        
        if (verified) {
            form.submit();
            document.getElementById('name').style.borderColor = "black";
            document.getElementById('email').style.borderColor = "black";
            document.getElementById('phone').style.borderColor = "black";
        }
        
    }

    
});
