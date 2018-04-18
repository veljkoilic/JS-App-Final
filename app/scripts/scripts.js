'use strict';

agCookie.create('example-cookie', true, 1);

var readValue = agCookie.read('example-cookie');

console.log(readValue);

agCookie.erase('example-cookie');

function markoFunkcija(args) {
    console.log(args);

    return true;
}
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

    $(".accordion").children().click(function () {
        $(".accordion").hide(800);
        $(".options").fadeIn(1500);
    });

    $("h6").click(function () {
        $(".options").hide(800);
        $(".expanded").fadeIn(1500);
    });

    $(".contactLink").click(function () {
        $(".options").hide(500);
        $(".expanded").hide(500);
        $(".accordion").hide(500);
        $(".contact").fadeIn(1500);
    });

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
});