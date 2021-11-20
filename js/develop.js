
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


function function_udacity_landing() {
    /**
    * Set navigation bar as variable ul
    */
    const ul = document.getElementById("navbar__list");

    /** Create list element as first item in navigation bar left, start with MAIN */
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Main"));
    ul.appendChild(li);
    ul.childNodes[0].addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); }, false)

    /** Create list element as second item in navigation bar left, start with Section 1 */
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Section 1"));
    ul.appendChild(li);
    ul.childNodes[1].addEventListener('click', function () { section1.scrollIntoView({ behavior: 'smooth' }); }, false)

    /** Create list element as third item in navigation bar left, continue with Section 2 */
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Section 2"));
    ul.appendChild(li);
    ul.childNodes[2].addEventListener('click', function () { section2.scrollIntoView({ behavior: 'smooth' }); }, false)

    /** Create list element as fourth item in navigation bar left, continue with Section 3 */
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Section 3"));
    ul.appendChild(li);
    ul.childNodes[3].addEventListener('click', function () { section3.scrollIntoView({ behavior: 'smooth' }); }, false)

}

document.addEventListener('DOMContentLoaded', function_udacity_landing);
