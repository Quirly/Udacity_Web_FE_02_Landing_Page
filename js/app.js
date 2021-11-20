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
let sections = Array.from(document.getElementsByTagName("section"));
/**
* Begin Helper Functions
*/
/** Remove classes if a section is clicked in navigation bar */
function help_remove_classes() {
    let sections = Array.from(document.getElementsByTagName("section"));
    sections.forEach(function (section) { section.classList.remove("your-active-class") });
}

function addClass() {

    sections.forEach(function (section) {
        if (isInViewport(section)) {
            section.classList.addClass("Your-active-class");
        }
    })
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
* End Helper Function
*/

/**
* Begin Main Function
*/
function function_udacity_landing_short() {
    /**
    * Set navigation bar as variable ul
    */
    const ul = document.getElementById("navbar__list");

    let sections = Array.from(document.getElementsByTagName("section"));
    let no_sections = sections.length;

    /** Create list element as first item in navigation bar left, start with MAIN */
    const i = 0;

    sections.forEach(function (section, i) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(section.id));
        ul.appendChild(li);
        ul.childNodes[i].addEventListener('click', function () { section.scrollIntoView({ behavior: 'smooth' }); help_remove_classes(), false });
        i++;
        let new_end = i;
    })

    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Main"));
    ul.appendChild(li).addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); help_remove_classes(), false });
}



/** If DOM is ready, the navigation bar is build by the main function dynamically; event listeners are added*/
document.addEventListener('DOMContentLoaded', function_udacity_landing_short);
document.addEventListener('scroll', addClass());