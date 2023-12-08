// things to reuse

blankList = "";

function funName() {
    const myXML = new XMLHttpRequest();
    myXML.open("GET", "https://");
    myXML.addEventListener("load", function () {
        us_celebrities = JSON.parse(myXML.responseText);
    })
    myXML.send();
};

getfunName();