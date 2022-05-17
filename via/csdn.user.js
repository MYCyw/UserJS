// CSDN 净化
// blog.csdn.net


(function(){
// create an element
const style = document.createElement('style');

// add CSS styles
style.innerHTML = `
    .feed-Sign-span {
        display: none !important;
}
`;

// append to DOM
document.head.appendChild(style);


const openApp = document.querySelector('.open-app.open-app-weixin');
openApp.addEventListener("load", openApp.click());
})();