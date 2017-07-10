function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function() {
    var p = document.createElement('p');
    p.innerText = 'I was dynamically added!';
    p.style.color = 'red';
    
    // Insert new paragraph into body
    document.body.appendChild(p);
});
