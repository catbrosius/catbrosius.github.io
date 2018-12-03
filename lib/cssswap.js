window.onload = () => {

    const appearanceButton = document.getElementById('appearanceAction');

    appearanceButton.onclick = () => {
        const defaults = document.getElementById('default');
        const basic = document.getElementById('basic');

        if (defaults.rel = "stylesheet") {
            disableStylesheet(defaults);
            enableStylesheet(basic);
        } else if (defaults.rel = "alternate stylesheet") {
           disableStylesheet(basic);
           enableStylesheet(defaults);
        }
    }

}

function enableStylesheet(node) {
    node.rel = 'stylesheet';
}

function disableStylesheet(node) {
    node.rel = 'alternate stylesheet';
}  
