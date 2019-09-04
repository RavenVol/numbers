export const createGameField = () => {
  const gFarray = [];
  let num = 0;

  for (let row = 0; row <= 9; row++) {
    gFarray.push([]);
    for (let col = 0; col <= 9; col++) {
      num = 0;
      gFarray[row].push(num);
      while (num === 0) {
        num = Math.ceil(Math.random()*22 - 11);
        gFarray[row][col] = num;
      }
    }
  }
  return gFarray;
}

export const computerRookie = (row, col, pickInRow, gameField) => {
  let compMove = [row, col];
  let moveOptions = [];

  if (pickInRow) {
   moveOptions = gameField[row]
    .map((number, index) => number > 0 && index)
    .filter(index => typeof(index) === 'number');
  } else {
    for (let i = 0; i <= 9; i++) {
      gameField[i][col] > 0 && moveOptions.push(i);
    }
  }

  if (moveOptions.length === 0) {
    if (pickInRow) {
      moveOptions = gameField[row]
       .map((number, index) => number < 0 && index)
       .filter(index => typeof(index) === 'number');
    } else {
      for (let i = 0; i <= 9; i++) {
        gameField[i][col] < 0 && moveOptions.push(i);
      }
    }
  }

  if (moveOptions.length === 0) {
    return false;
  }

  pickInRow
    ? compMove[1] = moveOptions[Math.floor(Math.random() * moveOptions.length)]
    : compMove[0] = moveOptions[Math.floor(Math.random() * moveOptions.length)];

  return compMove;
}

export const computerEasy = (row, col, pickInRow, gameField) => {
  let compMove = [row, col];
  let moveOptions = [];
  let maxNumber = -10000;
  let maxNumberIndex;

  if (pickInRow) {
    moveOptions = [...gameField[row]];

    for (let i = 0; i <= 9; i++) {
      if (moveOptions[i] !== 0 && moveOptions[i] > maxNumber) {
        maxNumber = moveOptions[i];
        maxNumberIndex = i;
      }
    }

    if (!moveOptions.length) {
      return false;
    }
    compMove = [row, maxNumberIndex];
  } else {
    for (let i = 0; i <= 9; i++) {
      moveOptions.push(gameField[i][col]);
    }

    for (let i = 0; i <= 9; i++) {
      if (moveOptions[i] !== 0 && moveOptions[i] > maxNumber) {
        maxNumber = moveOptions[i];
        maxNumberIndex = i;
      }
    }

    if (!moveOptions.length) {
      return false;
    }
    compMove = [maxNumberIndex, col];
  }

  return compMove;
}

export const computerMedium = (row, col, pickInRow, gameField) => {
  let choice = Math.round(Math.random);

  const result = choice
    ? computerEasy(row, col, pickInRow, gameField)
    : computerHard(row, col, pickInRow, gameField);

  return result;
}

export const computerHard = (row, col, pickInRow, gameField) => {
  let maximum = -100;
  let rowIndex;
  let colIndex;

  if (pickInRow) {
    for (let i = 0; i <= 9; i++) {
      let number = gameField[row][i] !== 0 && gameField[row][i];

      if (number) {
        let localMaximum = -100;

        for (let j = 0; j <= 9; j++) {
          if (j !== row && gameField[j][i] !== 0 && gameField[j][i] > localMaximum) {
            localMaximum = gameField[j][i];
          }
        }

        if (number - localMaximum >= maximum) {
          maximum = number - localMaximum;
          colIndex = i;
        }
      }
    }

    if (typeof(colIndex) !== 'number') {
      return false;
    }
    return ([row, colIndex]);
  } else {
    for (let i = 0; i <= 9; i++) {
      let number = gameField[i][col] !== 0 && gameField[i][col];

      if (number) {
        let localMaximum = -100;

        for (let j = 0; j <= 9; j++) {
          if (j !== col && gameField[i][j] !== 0 && gameField[i][j] > localMaximum) {
            localMaximum = gameField[i][j];
          }
        }

        if (number - localMaximum >= maximum) {
          maximum = number - localMaximum;
          rowIndex = i;
        }
      }
    }

    if (typeof(rowIndex) !== "number") {
      return false;
    }

    return ([rowIndex, col]);
  }
}

