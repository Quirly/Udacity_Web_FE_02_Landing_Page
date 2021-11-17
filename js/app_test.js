
function myTestFunction() {
    // Insert text
    const test = document.createElement("div");
    test.innerText = "This is the test of the tests.";
    document.getElementById("myDIV").appendChild(test);
}

myDIV.addEventListener('click', myTestFunction);