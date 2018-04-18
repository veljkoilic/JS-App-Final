'use strict';

agCookie.create('example-cookie', "im a cookie", 1);

var readValue = agCookie.read('example-cookie');

console.log(readValue);
'use strict';

console.log('I have entered this file.');
console.log('This is crystal clear evidence that this works.');

var calculation = 200 + 223;

console.log('Sanity Check: 200 + 223 = ' + calculation);
console.log('bye.');
"use strict";
"use strict";
"use strict";

$(document).ready(function () {
    // THIS IS AN AJAX REQUEST THAT GETS AN URL ARGUMENT FROM
    //  CLICKING ON ACCORDION IMAGES AND CHANGES THE API
    // IT CONTAINS IMAGES HEADINGS AND PARAGRAPHS THAT ARE NECESSARY
    function changeURL(URL) {

        var finalURL = URL;
        RequestSend(finalURL);
        console.log(finalURL);

        // ajax request
        function RequestSend(url) {
            var request = new XMLHttpRequest();
            request.open("GET", url);
            request.type = "json";
            request.onload = function () {

                var jsonObject = JSON.parse(request.response);

                for (var i = 0; i < jsonObject.cards.length; i++) {
                    // changes headers
                    $(".changableH1").eq(i).text(jsonObject.cards[i].header);

                    // changes paragraphs
                    $(".changableP").eq(i).text(jsonObject.cards[i].paragraph);

                    // changes card images
                    $(".changableImg").eq(i).attr("src", jsonObject.cards[i].imageSource);

                    // changes expanded view of the card
                    $(".fakeSmall").eq(i).attr("src", jsonObject.images[i].bigImageSource1);
                    $(".galleryImage").eq(i).attr("href", jsonObject.images[i].bigImageSource1);
                }
            };

            request.send();
        }
    };

    // Link to options
    $(".accordion").children().click(function () {
        $(".accordion").hide(800);
        $(".options").fadeIn(1500);
    });

    // Change page depending on clicked image
    // FIRST
    $(".accordion").children().eq(0).click(function () {
        console.log("you clicked the first");
        var pageContentURL = "https://api.myjson.com/bins/10juab";
        changeURL(pageContentURL);
    });

    // SECOND
    $(".accordion").children().eq(1).click(function () {
        console.log("you clicked the second");
        var pageContentURL = "https://api.myjson.com/bins/10juab";
        changeURL(pageContentURL);
    });

    // THIRD
    $(".accordion").children().eq(2).click(function () {
        console.log("you clicked the third");
        var pageContentURL = "https://api.myjson.com/bins/10juab";
        changeURL(pageContentURL);
    });

    // FOURTH
    $(".accordion").children().eq(3).click(function () {
        console.log("you clicked the fourth");
        var pageContentURL = "https://api.myjson.com/bins/10juab";
        changeURL(pageContentURL);
    });

    // FIFTH
    $(".accordion").children().eq(4).click(function () {
        console.log("you clicked the fifth");
        var pageContentURL = "https://api.myjson.com/bins/10juab";
        changeURL(pageContentURL);
    });

    // Link to extended view
    $("h6").click(function () {
        $(".options").hide(800);
        $(".expanded").fadeIn(1500);
    });

    // Link to the contact page
    $(".contactLink").click(function () {
        $(".options").hide(500);
        $(".expanded").hide(500);
        $(".accordion").hide(500);
        $(".contact").fadeIn(1500);
    });

    // Link to homepage
    $(".logo").click(function () {
        $(".options").hide(800);
        $(".expanded").hide(800);
        $(".contact").hide(800);
        $(".accordion").fadeIn(1500);
    });

    // HAMBURGER
    $('#nav-icon').click(function () {
        $(this).toggleClass('animate-icon');
        $('#overlay').fadeToggle();
    });

    $('#overlay').click(function () {
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
        var nameREGEX = /^[ ',-\.A-Za-z\xC0-\xCF\xD1-\xD6\xD8-\xDD\xDF-\xE5\xE7-\xF6\xF8-\xFD\xFF\u0104-\u0107\u010C\u010D\u0116-\u0119\u012E\u012F\u0141-\u0144\u0152\u0160\u0161\u016A\u016B\u0172\u0173\u0178-\u017E\u2202]+$/;
        var nameResult = nameREGEX.test(name);
        console.log(nameResult);

        if (nameResult === false) {
            verified = false;
            document.getElementById('name').style.borderColor = "red";
        }

        // REGEX FOR EMAIL
        var email = document.getElementById('email').value;
        var emailREGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
        var emailResult = emailREGEX.test(email);
        console.log(emailResult);

        if (emailResult === false) {
            verified = false;
            document.getElementById('email').style.borderColor = "red";
        }

        // REGEX FOR PHONE
        var phone = document.getElementById('phone').value;
        var phoneREGEX = /^[0-9]+$/gm;
        var phoneResult = phoneREGEX.test(phone);
        console.log(phoneResult);

        if (phoneResult === false) {
            verified = false;
            document.getElementById('phone').style.borderColor = "red";
        }
        console.log(verified);

        if (verified) {
            form.submit();
            document.getElementById('name').style.borderColor = "black";
            document.getElementById('email').style.borderColor = "black";
            document.getElementById('phone').style.borderColor = "black";
        }
    }
});