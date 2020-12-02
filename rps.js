let imageCoordinate = '0';
const dictionary = { // 딕셔너리 자료구조
    바위: '0',
    가위: '-135px',
    보: '-284px'
};

function computerPick(imageCoordinate) {
    return Object.entries(dictionary).find(function(v) {
        return v[1] === imageCoordinate;
    })[0];
}

let interval;

function intervalMaker() {
    interval = setInterval(function() {
        if (imageCoordinate === dictionary.바위) {
            imageCoordinate = dictionary.가위
        } else if (imageCoordinate === dictionary.가위) {
            imageCoordinate = dictionary.보;
        } else {
            imageCoordinate = dictionary.바위;
        }
        document.querySelector("#computer").style.background =
            'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + imageCoordinate + ' 0';
    }, 100); 
}

intervalMaker();

const score = {
    가위: 1,
    바위: 0,
    보: -1
};

document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        clearInterval(interval);
        intervalMaker();
        const myPick = this.textContent;
        const myScore = score[myPick];
        const computerScore = score[computerPick(imageCoordinate)];
        const scoreGap = myScore - computerScore;
        if (scoreGap === 0) {
            alert('비겼어요!');
        } else if ([-1, 2].includes(scoreGap)) {
            alert('이겼어요!');
        } else {
            alert('졌어요!');
        }
    });
});