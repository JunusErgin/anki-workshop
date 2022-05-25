let flashcardList = [];
let currentFlashcard;
let category;

async function startGame() {
    const urlParams = new URLSearchParams(window.location.search);
    category = urlParams.get('category');
    let flashcardCol = collection(db, category);
    const flashcardSnapshot = await getDocs(flashcardCol);
    flashcardList = flashcardSnapshot.docs.map(doc => doc.data());
    nextFlashcard();
}

function nextFlashcard() {
    currentFlashcard = flashcardList[Math.floor(Math.random() * flashcardList.length)];
    console.log(currentFlashcard);
    showFlashcard(currentFlashcard.question, '', 'Antwort anzeigen', 'showAnswer()');
}

function showAnswer() {
    showFlashcard(currentFlashcard.question, currentFlashcard.answer, 'Nächste Flashcard', 'nextFlashcard()');
}

function showFlashcard(question, answer, buttonText, buttonFn) {
    let pageContent = document.getElementById('pageContent');
    pageContent.innerHTML = `
    <div class="full-width mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">${question}</h2>
        </div>
        <div class="mdl-card__supporting-text">
        ${answer}
        </div>

        <div class="mdl-card__actions mdl-card--border">
        <a onclick="${buttonFn}" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          ${buttonText}
        </a>
      </div>
      <div class="mdl-card__menu">
    <button onclick="deleteCurrentFlashcard()" class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
      <i class="material-icons">delete</i>
    </button>
  </div>
    </div>
    `;
}

async function deleteCurrentFlashcard() {
    await deleteDoc(doc(db, category, currentFlashcard.question));
    showSnackbar('Die Frage wurde gelöscht.');
    nextFlashcard();
}