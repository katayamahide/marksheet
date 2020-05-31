'use strict';

//ラベル(id="question")取得
const question = document.getElementById('question');
//セレクト(設問の数) 作成
const selectQ = document.createElement('select');
selectQ.setAttribute('name', 'nQuestion');
selectQ.setAttribute('id', 'nQuestion');
question.appendChild(selectQ);

//オプション作成
for (let i = 1; i <= 100; i++) {
    const option = document.createElement('option');
    option.innerText = i;
    option.setAttribute('value', i);
    selectQ.appendChild(option);
}

//ラベル(id="choice")取得
const choice = document.getElementById('choice');
//セレクト(選択肢の数) 作成
const selectC = document.createElement('select');
selectC.setAttribute('name', 'nChoice');
selectC.setAttribute('id', 'nChoice');
choice.appendChild(selectC);

//オプション作成
for (let i = 1; i <= 100; i++) {
    const option = document.createElement('option');
    option.innerText = i;
    option.setAttribute('value', i);
    selectC.appendChild(option);
}


const btn = document.getElementById('create');
btn.addEventListener('click', () => {

    //問題数=numQを取得
    const nQuestion = document.getElementById('nQuestion');
    let numQ = nQuestion.value;

    //選択肢数=numCを取得
    const nChoice = document.getElementById('nChoice');
    let numC = nChoice.value;

    //選択肢の種類=typeを取得
    const type1 = document.getElementById("setting");
    let type = type1.typeC.value;

    //選択肢の文字=wordを取得
    const word1 = document.getElementById("setting");
    let word = word1.wordC.value;

    const alphabet = new Array('?', 'a', 'b', 'c', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');


    for (let i = 1; i <= numQ; i++) {
        const main = document.getElementById('target');
        const div = document.createElement('div');
        div.classList.add('answer');
        let id = "q" + i;
        div.setAttribute('id', id);
        div.innerHTML = "問" + i + " ";
        main.appendChild(div);
        // おっさん
        if (type === 'single') {
            for (let i = 1; i <= numC; i++) {
                const radio = document.createElement('input');
                let ic = "a" + i;
                radio.setAttribute('type', 'radio');
                radio.setAttribute('id', id + ic);
                radio.setAttribute('name', id);
                radio.setAttribute('value', i);
                let label = document.createElement('label');
                label.setAttribute('for', id + ic);
                if (word === "number") {
                    label.textContent = i + "  ";
                } else if (word === "word") {
                    label.textContent = alphabet[i] + "  ";
                } else {
                    label.textContent = i + "  ";
                }
                div.appendChild(label);
                label.insertBefore(radio, label.firstChild);
            }

        } else if (type === 'multi') {
            for (let i = 1; i <= numC; i++) {
                const checkbox = document.createElement('input');
                let ic = "a" + i;
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('id', id + ic);
                checkbox.setAttribute('name', id);
                checkbox.setAttribute('value', i);
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
                label.insertBefore(checkbox, label.firstChild);
            }
        } else {
            for (let i = 1; i <= numC; i++) {
                const checkbox = document.createElement('input');
                let ic = "a" + i;
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('id', id + ic);
                checkbox.setAttribute('name', id);
                checkbox.setAttribute('value', i);
                let label = document.createElement('label');
                label.setAttribute('for', id + ic);
                label.textContent = i + " ";
                div.appendChild(label);
                label.insertBefore(checkbox, label.firstChild);
            }
        }
    }
});