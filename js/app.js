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
document.addEventListener("DOMContentLoaded", function () {
    create_bar();
})
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
/** 
document.addEventListener("DOMContentLoaded", function () {
    test();
})
*/
document.addEventListener("click", function () {
    console.log("test");
}

/**
 * Define Global Variables
*/
/**
const nav_bar_building = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
/**
function create_bar() {

    const NavBar = document.createElement('div');
    nav_bar_building.appendChild(NavBar);

    for (let i = 0; i < (n - 1); i++) {
        const link_sec = document.createElement('a');
        NavBar.appendChild(link_sec);
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
/**
document.head.appendChild(nav_bar_building);

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/);