'use strict';

window.onload = function () {
    window.addEventListener('beforeunload', function (e) {
        e.returnValue = "ページを離れます。よろしいですか？";
    }, false);
}


//ラベル(id="question")取得
const question = document.getElementById('question');
//セレクト(設問の数) 作成
const selectQ = document.createElement('select');
selectQ.setAttribute('name', 'nQuestion');
selectQ.setAttribute('id', 'nQuestion');
question.appendChild(selectQ);

//オプション作成
for (let i = 1; i <= 999; i++) {
    const option = document.createElement('option');
    option.innerText = i;
    option.setAttribute('value', i);
    selectQ.appendChild(option);
}
selectQ.options[99].selected = true;

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
selectC.options[9].selected = true;

const alphabet = new Array('?', 'a', 'b', 'c', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');

const btn4 = document.getElementById("answer")
btn4.addEventListener('click', () => {

    const elements = document.getElementsByName("ans");
    let sum = 0;
    console.log("--- 選択したオプションは以下の通りです ---");

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            sum = sum + parseInt(elements[i].value);
            console.log(elements[i].value);
        }
    }

    let ratio = Math.floor(sum / elements.length * 100);
    const score = document.getElementById("score");
    score.innerHTML = "正解数：" + sum + "/" + elements.length + "　　　正答率：" + ratio + "%";
})


const btn3 = document.getElementById('print')
btn3.addEventListener('click', () => {
    window.print();
})

const btn2 = document.getElementById('remove')
btn2.addEventListener('click', () => {
    const main2 = document.getElementById('target');
    main2.innerHTML = "";
});

for (let i = 1; i <= 100; i++) {
    const main = document.getElementById('target');
    const div = document.createElement('div');
    div.classList.add('answer');
    let id = "q" + i;
    div.setAttribute('id', id);
    div.innerHTML = "<span>問" + i + "</span>";
    main.appendChild(div);

    for (let i = 1; i <= 10; i++) {
        const checkbox = document.createElement('input');
        let ic = "a" + i;
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', id + ic);
        checkbox.setAttribute('name', id);
        checkbox.setAttribute('value', i);
        let label = document.createElement('label');
        label.setAttribute('for', id + ic);
        label.textContent = i;
        div.appendChild(label);
        label.insertBefore(checkbox, label.firstChild);
    }

    const memo = document.createElement('input');
    memo.setAttribute('type', 'text')
    memo.setAttribute('placeholder', 'メモ')
    div.appendChild(memo);

    const label = document.createElement('label');
    label.innerHTML = "正解";
    const answer = document.createElement('input');
    answer.setAttribute('type', 'checkbox');
    answer.setAttribute('name', 'ans');
    answer.setAttribute('value', 1);
    label.insertBefore(answer, label.firstChild);
    div.appendChild(label)
}





const btn = document.getElementById('create');
btn.addEventListener('click', () => {
    const main2 = document.getElementById('target');
    main2.innerHTML = "";

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



    for (let i = 1; i <= numQ; i++) {
        const main = document.getElementById('target');
        const div = document.createElement('div');
        div.classList.add('answer');
        let id = "q" + i;
        div.setAttribute('id', id);
        div.innerHTML = "<span>問" + i + "</span>";
        main.appendChild(div);


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
                    label.textContent = i;
                } else if (word === "word") {
                    label.textContent = alphabet[i];
                } else {
                    label.textContent = i;
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
                    label.textContent = i;
                } else if (word === "word") {
                    label.textContent = alphabet[i];
                } else {
                    label.textContent = i;
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
                label.textContent = i;
                div.appendChild(label);
                label.insertBefore(checkbox, label.firstChild);
            }
        }
        const memo = document.createElement('input');
        memo.setAttribute('type', 'text')
        memo.setAttribute('placeholder', 'メモ')
        div.appendChild(memo);

        const label = document.createElement('label');
        label.innerHTML = "正解";
        const answer = document.createElement('input');
        answer.setAttribute('type', 'checkbox');
        answer.setAttribute('name', 'ans');
        answer.setAttribute('value', 1);
        label.insertBefore(answer, label.firstChild);
        div.appendChild(label)
    }
});