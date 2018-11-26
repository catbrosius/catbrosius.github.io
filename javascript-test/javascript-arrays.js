window.onload = () => {

    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
        languages: ["Javascript", "HTML", "CSS", "Java", "C#", "Python", "C/C++"],
        rankedLanguages: [
            {
                language: "Javascript",
                rank: 1
            },
            {
                language: "Java",
                rank: 2
            },
            {
                language: "Python",
                rank: 3
            },
            {
                language: "PHP",
                rank: 4
            },
            {
                language: "C++",
                rank: 5
            },
            {
                language: "C#",
                rank: 6
            },
            {
                language: "Type Script",
                rank: 7
            }
        ],
        getLanguageRank: function () {
            'use strict';
            return this.language + ' rank: ' + this.rank;
        }
    };



    const showNumbersButton = document.getElementById('numbers-action');
    const languageNamesButton = document.getElementById("tech-language-names-action");
    const languageRankButton = document.getElementById("tech-language-popularity-action");

    showNumbersButton.onclick = () => {

        const numbersDisplay = document.getElementById('numbers-display');
        for (let value of arrays.numbers) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            numbersDisplay.appendChild(li);
        }

        const sortedArray = arrays.numbers.sort(function (a, b) { return a - b });
        for (let sortedNumber of sortedArray) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(sortedNumber));
            numbersDisplay.appendChild(li);
        }
    }

    languageNamesButton.onclick = () => {

        const languagesDisplay = document.getElementById("tech-language-names-display");
        const sortedLanguages = arrays.languages.sort();
        for (let word of sortedLanguages) {

            const li = document.createElement("li");
            li.appendChild(document.createTextNode(word));
            languagesDisplay.appendChild(li);
        }
    }

    languageRankButton.onclick = () => {
        const languageRankDisplay = document.getElementById("tech-language-popularity-display");
        const languageRank = arrays.getLanguageRank();

        for (let displayWords of languageRank) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(displayWords));
            languageRankDisplay.appendChild(li);
        }
    }
}



// for (let value of arrays.numbers) {
//     console.log(arrays.numbers[value]);

//Another Way to Write For Loop (from above)
//for (let i = 0; i <= 10; i++) {
    //console.log(arrays.numbers[i]);
//}