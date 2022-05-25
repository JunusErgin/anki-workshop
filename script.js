function createFlashcard() {
    let category = document.getElementById('category');
    let question = document.getElementById('question');
    let answer = document.getElementById('answer');

    let json = {
        "category": category.value,
        "question": question.value,
        "answer": answer.value
    };

    setDoc(doc(db, category.value, question.value), json);
    showSnackbar();
    category.value = '';
    question.value = '';
    answer.value = '';
}

const CATEGORIES = [
    'Angular',
    'CSS',
    'HTML',
    'JavaScript',
    'Python',
    'Theorie'
];

function showSnackbar() {
    let snackbarContainer = document.querySelector('#snackbar-example');
    let handler = function (event) { };
    let data = {
        message: 'Aufgabe hinzugefügt',
        timeout: 2000,
        actionHandler: handler,
        actionText: 'Schließen'
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
}


function renderCategories(){
    let pageContent = document.getElementById('pageContent');
    pageContent.innerHTML = '';
    for (let i = 0; i < CATEGORIES.length; i++) {
        const category = CATEGORIES[i];
        pageContent.innerHTML += `
        <div onclick="goto('${category}')" class="mdl-card mdl-shadow--2dp full-width mb-32 menu-card">
            ${category}
        </div>
        `;
    }
}

function goto(category) {
    window.location.href = 'game.html?category=' + category;
}

