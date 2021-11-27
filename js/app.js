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
const ul = document.getElementById("navbar__list");
/**
* Begin Helper Functions
*/
/** Helper 1: Removes "your-active-class" if user scrolls before adding the visible one again */
function help_remove_classes() {
    sections.forEach(function (section) { section.classList.remove("your-active-class") });
}

/** Helper 2: Calls isInViewport function to check if an element is visible. Adds "your-active-class" if so.*/
function function_check_viewport_add_class() {
    const ul = document.getElementById("navbar__list");
    help_remove_classes();
    let counter = 0;
    let counter_f = 0;
    sections.forEach(function (section) {
        let x = true;
        if (window.screen.width < 900) {
            x = isVisible(section);
        }
        else {
            x = isInViewport(section);
        };
        counter = counter + 1
        if (x == true) {
            /** Highlight section on screen by adding "your-active-class" to section */
            /** all other links are cleaned and "your-active-class" is removed if present */
            /** CSS styling differs if "your-active-class" is present */
            section.classList.add("your-active-class");
            /** Highlight link by adding "active-section" class to navbar item */
            /** all other links are cleaned and "active-section" is removed if present */
            /** CSS styling differs if "active-section" is present */
            counter_f = counter;
            for (let i = 0; i < no_sections; i++) {
                if (i + 1 == counter_f) { ul.childNodes[i].classList.add("active-section"); }
                else { ul.childNodes[i].classList.remove("active-section"); }
            }
            if (window.scrollY == 0) {
                if (typeof section[0] != "undefined") {
                    section[0].classList.add("your-active-class");
                    ul.childNodes[0].classList.add("active-section");
                }
            }
        }
    });
}

/** Helper 3/4: Checks if an element is visible. Returns True if so.*/

/** Helper 3: Check Visibility on Tablet and Laptop screens*/
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        /** Top and left of element are minimum 0 if element is visible on screen */
        /**rect.top >= 0 &&*/
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/** Helper 4: Check Visibility on smaller mobile screens with a width <900px */
function isVisible(ele) {
    const { top, bottom } = ele.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (
        (top > 5 || bottom > 5) &&
        top < vHeight
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

    /** Create list element as first item in navigation bar left, start with MAIN */
    const i = 0;

    /** Create sections step by step, append them to navigation bar and add Click EventListener for scrolling */
    sections.forEach(function (section, i) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(section.id));
        ul.appendChild(li);
        ul.childNodes[i].addEventListener('click', function () { section.scrollIntoView({ behavior: 'smooth' }); help_remove_classes(), false });
        i++;
        let new_end = i;
    })

    /** Add Main item to navigation bar to allow the user to scroll to top anytime*/
    let li = document.createElement("li");
    li.id = "go_to_top";
    li.appendChild(document.createTextNode(">Main<"));
    ul.appendChild(li).addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); ul.childNodes[0].classList.add("your-active-class"); help_remove_classes(), false });
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
