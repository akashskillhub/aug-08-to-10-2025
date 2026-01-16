let scores: number[] = [80, 90, 70];

function addScore(score: number) {
    scores.push(score);
    scores.push(100);
}

addScore(85);
console.log(scores);
