function multiplyByThree(number) {
    return number * 3;
}

function findCorrectAnswer(question, numericData) {
    const result = multiplyByThree(numericData);
    return question + result;
}

console.log(findCorrectAnswer("what's my reald age? " , 10));
console.log(findCorrectAnswer("how much money I have now?" , 0 ));