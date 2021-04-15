var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        var searchBody = document.querySelector("body");
        searchBody.addEventListener("click", logInfo);
        searchBody.addEventListener("keyup", logInfo);
        var searchDiv = document.querySelectorAll("div");
        for (var i = 0; i < searchDiv.length; i++) {
            searchDiv[i].addEventListener("click", logInfo);
            searchDiv[i].addEventListener("keyup", logInfo);
        }
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        var searchSpan = document.querySelector("span"); // In der Variable let searchSpan ist hier mein Span
        var target = _event.target; // Target aus meinem Event
        var clientX = _event.clientX + 20;
        var clientY = _event.clientY + 20;
        searchSpan.innerHTML = "";
        searchSpan.innerHTML = clientX + "x " + clientY + "y" + target + "target";
        searchSpan.style.left = clientX + "px";
        searchSpan.style.top = clientY + "px";
    }
    function logInfo(_event) {
        console.log("Type Event: " + _event.type);
        console.log("Target: " + _event.target);
        console.log("Current Targen: " + _event.currentTarget);
        console.log(_event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=eventinspector.js.map