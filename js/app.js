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
/** Global Variables: Sections and Number of Sections */
let sections = Array.from(document.getElementsByTagName("section"));
let no_sections = sections.length;
/**
* Begin Helper Functions
*/
/** Helper 1: Removes "your-active-class" if user scrolls before adding the visible one again */
function help_remove_classes() {
    sections.forEach(function (section) { section.classList.remove("your-active-class") });
}

/** Helper 2: Calls isInViewport function to check if an element is visible. Adds "your-active-class" if so.*/
function function_check_viewport_add_class() {
    help_remove_classes();
    sections.forEach(function (section) {
        let x = isInViewport(section);
        if (x == true) {
            section.classList.add("your-active-class");
        }
    });
}

/** Helper 3: Checks if an element is visible. Returns True if so.*/
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
* End Helper Functions
*/

/**
* Begin Main Function
*/

function function_udacity_landing_short() {

    /** Set navigation bar as variable ul */
    const ul = document.getElementById("navbar__list");

    /** Create list element as first item in navigation bar left, start with MAIN */
    const i = 0;

    /** Create sections step by step, append them to navigation bar and add Click EventListener for scrolling */
    sections.forEach(function (section, i) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(section.id));
        ul.appendChild(li);
        ul.childNodes[i].addEventListener('click', function () { section.scrollIntoView({ behavior: 'smooth' }), false });
        i++;
        let new_end = i;
    })

    /** Add Main item to navigation bar to allow the user to scroll to top anytime*/
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Main"));
    ul.appendChild(li).addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }), false });
}

/**
* End Main Function
*/

/**
* Begin Event Listeners
*/

/** If DOM is ready, the navigation bar is build by the main function dynamically; event listeners are added*/
document.addEventListener('DOMContentLoaded', function_udacity_landing_short);
/** If the user scrolls, it shall be checked which section is in the viewport to highlight it in the navigation bar */
document.addEventListener('scroll', function_check_viewport_add_class);

/**
* End Event Listeners
*/
