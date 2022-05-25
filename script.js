function createFlashcard(){
    let category  = document.getElementById('category');
    let question = document.getElementById('question');
    let answer = document.getElementById('answer');

    let json = {
        "category": category.value,
        "question": question.value,
        "answer": answer.value
    };

    setDoc(doc(db, category.value, question.value), json);
      
}

