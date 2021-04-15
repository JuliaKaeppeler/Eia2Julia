namespace EventInspector {
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let searchBody: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        searchBody.addEventListener("click", logInfo);
        searchBody.addEventListener("keyup", logInfo);

        let searchDiv: NodeListOf<HTMLDivElement> = document.querySelectorAll("div"); 
        for (let i: number = 0; i < searchDiv.length; i++) {
            searchDiv[i].addEventListener("click", logInfo);
            searchDiv[i].addEventListener("keyup", logInfo);
        }

        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }


    function setInfoBox(_event: MouseEvent): void {
        let searchSpan: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span"); // In der Variable let searchSpan ist hier mein Span
        let target: HTMLElement = <HTMLElement>_event.target; // Target aus meinem Event
        let clientX: number = _event.clientX + 20;
        let clientY: number = _event.clientY + 20;

        searchSpan.innerHTML = "";
        searchSpan.innerHTML = clientX + "x " + clientY + "y" + target + "target";

        searchSpan.style.left = clientX + "px";
        searchSpan.style.top = clientY + "px";

    }

    function logInfo(_event: Event): void {
        console.log("Type Event: " + _event.type);
        console.log("Target: " + _event.target);
        console.log("Current Targen: " + _event.currentTarget);
        console.log(_event);
    }

}