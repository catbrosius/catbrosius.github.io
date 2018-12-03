window.onload = () => {

    const appearanceButtonNavy = document.getElementById('appearanceAction');
    const appearanceButtonDefault = document.getElementById('appearanceActionDefault');

    appearanceButtonNavy.onclick = () => {
        const defaults = document.getElementById('default');
        const basic = document.getElementById('basic');

        disableStylesheet(defaults);
        enableStylesheet(basic);

        // if (defaults.rel = "stylesheet") {
        //     disableStylesheet(defaults);
        //     enableStylesheet(basic);
        // } else if (defaults.rel = "alternate stylesheet") {
        //    disableStylesheet(basic);
        //    enableStylesheet(defaults);
        // }
    }

appearanceButtonDefault.onclick = () => {
    const defaults = document.getElementById('default');
        const basic = document.getElementById('basic');

        disableStylesheet(basic);
        enableStylesheet(defaults);
}

}

function enableStylesheet(node) {
    node.rel = 'stylesheet';
}

function disableStylesheet(node) {
    node.rel = 'alternate stylesheet';
}  
