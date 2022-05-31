// ==UserScript==
// @name        Twitter Image Original Size
// @match       https://pbs.twimg.com/media/*
// @version     1.0
// @author      -
// ==/UserScript==

(function () {
    const myArray = window.location.href.split("&");
    if (myArray[1]!=="name=orig") {
        let origSize = myArray[0]+"&name=orig";
        window.location.replace(origSize);
    }
})();