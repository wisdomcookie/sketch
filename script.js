const board = document.querySelector('.board');

function drawBoard(size){
    
    for(let i = 0; i < size; i++){

        let row = document.createElement('div');
        row.classList.add(`row`);
        row.id = `r.${i}`;

        for(let j = 0; j < size; j++){
            let square = document.createElement('div');
            square.classList.add(`square`);
            square.id = `s.${i-j}`;

            square.style['border'] = 'solid 0px';
            square.style['flex-basis'] = `calc(100% / ${size}`;
            square.style['padding-top'] = `calc(100% / ${size}`;
            square.style['box-sizing'] = 'border-box';
            row.appendChild(square);
        }

        row.style['display'] = 'flex';
        board.appendChild(row);
    }

    let squares = document.querySelectorAll('.square');
    squares.forEach(div => div.addEventListener('mouseover', squareHover));
    //squares.forEach(div => div.addEventListener('mouseout', squareHover));
}


function squareHover(e){
    this.classList.add('hover');
}

const reset = document.querySelector('.reset');
reset.addEventListener('click', resetBoard);

function resetBoard(e){
    size = prompt("Enter number of squares per side");
    let children = document.querySelectorAll('.board > *');
    children.forEach(div => board.removeChild(div));
    drawBoard(size);
}

drawBoard(16);
