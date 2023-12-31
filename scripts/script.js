const parent = document.getElementById('bingo-card');
const bingoCard = document.createDocumentFragment();


fetch('https://api.jsonbin.io/v3/b/658b2557266cfc3fde6ea608')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let bingoText = data.record.bingotext.prompts;
    bingoText = shuffleshufflebingo(bingoText);

    i=0;
    bingoText.slice(0, 25).forEach(function (bingogay) {
      let bingoPrompt = bingogay;


      let bingoCon = document.createElement('div');
      bingoCon.classList.add("bingo-cell");
      bingoCon.addEventListener('click', () => toggleCell(bingoCon));

      let bingoTextBox = document.createElement('p');
      bingoTextBox.classList.add("bingo-text");

      if (i == 12) {
        let textNode = document.createTextNode('Free Space');
        bingoTextBox.appendChild(textNode);
        bingoCard.appendChild(bingoCon);
        bingoCon.appendChild(bingoTextBox);
      } else {
        let textNode = document.createTextNode(bingoPrompt);
        bingoTextBox.appendChild(textNode);
      }

      bingoCard.appendChild(bingoCon);
      bingoCon.appendChild(bingoTextBox);   
      i++;
    });

    parent.appendChild(bingoCard);
  });

  function shuffleshufflebingo(shufflebingo) {
    for (let i = shufflebingo.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shufflebingo[i], shufflebingo[j]] = [shufflebingo[j], shufflebingo[i]];
    }
    return shufflebingo;
  }

// Toggle cell marking
function toggleCell(cell) {
  cell.classList.toggle('bingo-cell-marked');
}