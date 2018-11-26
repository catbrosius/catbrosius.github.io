window.onload = () => {
    const myForm = document.getElementById('sort-type');
    

    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;
        // const checkedSorterRadio = document.querySelector('input[name="sorter"]:checked');
        // const value = checkedSorterRadio.value;
        if (value.toLowerCase() === 'language') {
            showChoice(value);
        } else {
            showChoice(value);
        }
    });
}

function showChoice (value) {
    console.log(value);
    const userDisplay = document.getElementById('user-choice');
    userDisplay.textContent = value;
}