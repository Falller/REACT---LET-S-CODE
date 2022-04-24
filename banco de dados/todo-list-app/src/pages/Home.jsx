import { useState } from 'react';
import { TodoListItem } from '../components/TodoListItem';
import './Home.css';

export function Home () {
    const itemsArray = [
        {id: 1, text:"Acordar as 7h", checked: false},
        {id: 2, text:"Almoçar as 12h", checked: false},
        {id: 3, text:"Dormir as 22h", checked: false}
    ];
    const itemsArray2 = [
        {id: 4, text:"Acordar as 7h", checked: false},
        {id: 5, text:"Almoçar as 12h", checked: false},
        {id: 6, text:"Dormir as 22h", checked: false}
    ];

//    const [itemsArrayState, setitemsArrayState] = useState(itemsArray);
console.log("array sem mudança",itemsArray);

    function changeArray (id, bool) {
        const index = itemsArray.findIndex((itemsArray) => itemsArray.id == id)
        console.log("index", index);
        itemsArray[index].checked = bool
        console.log("aqui o array deve estar mudado",itemsArray)
        
    }
    
localStorage.setItem("abc","seu item");
sessionStorage.setItem("def", "teste")

    return (
        <div className="container">
            {itemsArray.map(({id, text, checked}) => {
                return (
                <TodoListItem key={id} id={id} text={text} checked={checked} changeArray={changeArray}/>
                )
            })}
            <hr />
            {itemsArray2.map((obj) => {
                return <TodoListItem key={obj.id}{...obj} />
            })}
        </div>
    )
    
}
