
let siteLogo = document.querySelectorAll(".logo")
siteLogo.forEach((e) => {
    e.innerHTML = `
        <defs>
            <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
                <feOffset dx="20" dy="20"/>
                <feGaussianBlur result="blur" stdDeviation="10"/>
                <feFlood flood-color="#050107" flood-opacity=".4"/>
                <feComposite in2="blur" operator="in"/>
                <feComposite in="SourceGraphic"/>
            </filter>
            <filter id="drop-shadow-2" filterUnits="userSpaceOnUse">
                <feOffset dx="20" dy="20"/>
                <feGaussianBlur result="blur-2" stdDeviation="10"/>
                <feFlood flood-color="#050107" flood-opacity=".4"/>
                <feComposite in2="blur-2" operator="in"/>
                <feComposite in="SourceGraphic"/>
            </filter>
        </defs>
        <polyline id="mr-triangle" class="mr-triangle" points="10 581 10 10.33 295.5 295.83"/>
        <polygon id="r-letter" class="r-letter" points="52.33 580 113.5 580 580 112 580 519 394.43 333.45 364.5 363.38 364.56 363.44 149 580 209.5 580 395.48 394.52 580 580 620.33 580 620.33 12 52.33 580"/>
    `
})
