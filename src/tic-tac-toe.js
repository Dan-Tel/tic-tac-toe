class TicTacToe {
    constructor() {
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.turnCount = 0;
    }

    getCurrentPlayerSymbol() {
        return this.turnCount % 2 === 0 ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex].splice(columnIndex, 1, this.getCurrentPlayerSymbol());
            this.turnCount++;
        }
    }

    isFinished() {
        return this.getWinner() !== null || this.isDraw();
    }

    getWinner() {
        for(let i = 0; i < this.matrix.length; i++) {
            let horPlayerSymbol = this.matrix[i][0];
            if(this.matrix[i].every(elem => elem === horPlayerSymbol)) return horPlayerSymbol;
            for(let j = 0; j < this.matrix.length; j++) {
                let vertPlayerSymbol = this.matrix[0][i];
                if (this.matrix[1][i] === vertPlayerSymbol && this.matrix[2][i] === vertPlayerSymbol) return vertPlayerSymbol;
            }
        }

        let mDiagPlayerSymbol = this.matrix[0][0];
        if (this.matrix[1][1] === mDiagPlayerSymbol && this.matrix[2][2] === mDiagPlayerSymbol) return mDiagPlayerSymbol;

        let sDiagPlayerSymbol = this.matrix[0][2];
        if (this.matrix[1][1] === sDiagPlayerSymbol && this.matrix[2][0] === sDiagPlayerSymbol) return sDiagPlayerSymbol;

        return null;
    }

    noMoreTurns() {
        for(let i = 0; i < this.matrix.length; i++) {
          if (this.matrix[i].includes(null)) return false;
        }
        return true;
    }

    isDraw() {
        return this.getWinner() === null && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;