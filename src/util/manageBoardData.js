import { boardList } from "../data/boardList";

export const manageBoardData = () => {
    let localStoredData = JSON.parse(localStorage.getItem("boardList"));

    if(!localStoredData){
        localStorage.setItem('boardItem', JSON.stringify(boardList));
    }
}