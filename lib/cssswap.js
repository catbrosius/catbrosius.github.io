window.onload = () => {
    const myForm = document.getElementById('sort-type');


    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;
        if (value.toLowerCase() === 'basic') {
            const defaults = document.getElementById('default');
            const basic = document.getElementById('basic');

            disableStylesheet(defaults);
            enableStylesheet(basic);
        } else {
            const defaults = document.getElementById('default');
            const basic = document.getElementById('basic');

            disableStylesheet(basic);
            enableStylesheet(defaults);
        }
    });
}

function enableStylesheet(node) {
    node.rel = 'stylesheet';
};

function disableStylesheet(node) {
    node.rel = 'alternate stylesheet';
}; 