'use strict';
const btn = document.getElementById('create');
btn.addEventListener('click', () => {

    //問題数=numQを取得
    const nQuestion = document.getElementById('nQuestion');
    let numQ = nQuestion.value;
    console.log(numQ);

    //選択肢数=numCを取得
    const nChoice = document.getElementById('nChoice');
    let numC = nChoice.value;

    //選択肢の種類=typeを取得
    const type1 = document.getElementById("setting");
    let type = type1.typeC.value;
    console.log(type);

    //選択肢の文字=wordを取得
    const word1 = document.getElementById("setting");
    let word = word1.wordC.value;

    const alphabet = new Array('?', 'a', 'b', 'c', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');


    for (let i = 1; i <= numQ; i++) {
        const main = document.getElementById('target');
        console.log(main);
        const div = document.createElement('div');
        div.classList.add('answer');
        let id = "q" + i;
        div.setAttribute('id', id);
        div.innerHTML = "問" + i + " ";
        main.appendChild(div);

        if (type === 'single') {
            for (let i = 1; i <= numC; i++) {
                const radio = document.createElement('input');
                let ic = "a" + i;
                radio.setAttribute('type', 'radio');
                radio.setAttribute('id', id + ic);
                radio.setAttribute('name', id);
                radio.setAttribute('value', i);
                div.appendChild(radio);
                let label = document.createElement('label');
                label.setAttribute('for', id + ic);
                if (word === "number") {
                    label.textContent = i + " ";
                } else if (word === "word") {
                    label.textContent = alphabet[i] + " ";
                } else {
                    label.textContent = i + " ";
                }
                div.appendChild(label);
            }

        } else if (type === 'multi') {
            for (let i = 1; i <= numC; i++) {
                const checkbox = document.createElement('input');
                let ic = "a" + i;
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('id', id + ic);
                checkbox.setAttribute('name', id);
                checkbox.setAttribute('value', i);
                div.appendChild(checkbox);
                let label = document.createElement('label');
                label.setAttribute('for', id + ic);
                if (word === "number") {
                    label.textContent = i + " ";
                } else if (word === "word") {
                    label.textContent = alphabet[i] + " ";
                } else {
                    label.textContent = i + " ";
                }
                div.appendChild(label);
            }
        } else {
            for (let i = 1; i <= numC; i++) {
                const checkbox = document.createElement('input');
                let ic = "a" + i;
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('id', id + ic);
                checkbox.setAttribute('name', id);
                checkbox.setAttribute('value', i);
                div.appendChild(checkbox);
                let label = document.createElement('label');
                label.setAttribute('for', id + ic);
                label.textContent = i + " ";
                div.appendChild(label);
            }
        }
    }
});