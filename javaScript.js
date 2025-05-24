const gridButton = document.querySelector(".gridButton");
const clearButton = document.querySelector(".clearButton");
const body = document.querySelector("body");
let boxPerRow = 16;

function changeDivColor()
{
    this.style.backgroundColor = "black";
}

function setGrid(boxAmount = 16)
{
    clearGrid();
    const container = document.querySelector(".container");
    for (let i = 0; i < boxAmount; i++)
    {
        for (let i = 0; i < boxAmount; i++)
        {
            const div = document.createElement("div");
            div.style.width = 800/boxAmount + "px";
            div.addEventListener("mouseover", changeDivColor);
            container.appendChild(div);
        }
    }
}

function clearGrid()
{
    const container = document.querySelector(".container");
    container.remove();
    const newContainer = document.createElement("div");
    newContainer.className = "container";
    body.appendChild(newContainer);
}

setGrid();

gridButton.onclick = () => {
    do
    {
        boxPerRow = prompt("Enter the amount of boxes per row: ");
    } while (boxPerRow > 100 || boxPerRow <= 0);
    setGrid(boxPerRow)
};

clearButton.onclick = () => setGrid(boxPerRow);