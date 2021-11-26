# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Project Goal

As this project refers to a landing page we have to tackle flexibility. We never know how many sections will be published as this can vary. Thus we have to ensure that - despite of this fact - the navigation bar will contain the
correct items and is reconstructed everytime the DOM changes. Moreover the functionality of the navigation bar has to
be ensured. If the user clicks on the respective section, the page shall be scrolled smoothly to the section clicked.
If a section is visible in the viewport, this section shall be highlighted in the navigation bar. The page shall be
responsive.

## Project Approach

As it is best practices to separate styling (css), structure (html) and functionality (javascript), I have added the
app.js-file to the index.html file. I put it on the end to ensure, that every DOM element had been rendered and interpreted before code will be applied to it. Event listening will only start if the DOM is loaded which is ensured by the "DOMContentLoaded" event listener in app.js.

## Dynamic number of sections

Event Listener 1: DOM is loaded

Function "function_udacity_landing_short()" is executed. The number of sections is represented in an array. Each
element in array represents a section. For each section a child element is appended to the navigation bar. The text 
corresponds to the element id (e.g. "section 1"). In the end an event listener (Event Listener 2) is added for each navigation bar item. On click the respective section is scrolled into view.

Event Listener 3: User or JavaScript code triggers scrolling

Function "function_check_viewport_add_class)" is excecuted. It checks if the section is visible on the screen.
If so, markers are added to section and link in navigation bar ("your-active-class" and "active-section"). This
classes lead to a different CSS styling. All other elements (sections, links) are cleaned which means if there
were the classes ("your-active-class" and "active-section") applied, they are removed. This ensures that only
the visible section is highlighted and all others are not.

The page layout is responsive. If the screen is small, the navigation bar is arranged in rows instead of

## User Manual

- Simply add or delete new sections dynamically in the index.html


