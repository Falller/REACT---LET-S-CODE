import { useEffect, useState } from 'react';
import { TodoListItem } from '../components/TodoListItem';
import './Home.css';

export function Home () {
    const [itemsArray, setitemsArray] = useState(() => 
    {
        let array = [
            {id: 1, text:"Acordar as 7h", checked: false},
            {id: 2, text:"Almoçar as 12h", checked: false},
            {id: 3, text:"Dormir as 22h", checked: false}
        ]
        const storedArray = localStorage.getItem("itemsArray")
        console.log(localStorage.getItem("itemsArray"))

        if(storedArray != null) {
            array = JSON.parse(storedArray)
        } else {
            const itemsArrayString = JSON.stringify(array)
            localStorage.setItem("itemsArray", itemsArrayString)
        }
        return array;
    })

    console.log("array sem mudança",itemsArray);


    function changeArray (id, bool) {
        const index = itemsArray.findIndex((itemsArray) => itemsArray.id == id)
        console.log("index", index);
        itemsArray[index].checked = bool
        console.log("aqui o array deve estar mudado",itemsArray)   
        localStorage.setItem("itemsArray", JSON.stringify(itemsArray))   
    };

    return (
        <div className="container">
            {itemsArray.map(({id, text, checked}) => {
                return (
                <TodoListItem key={id} id={id} text={text} checked={checked} changeArray={changeArray}/>
                )
            })}
        </div>
    )
}

/**function addItemTodoList (id, checked) {
    const ultimoId = itemsArray[itemsArray.length - 1].id
    setitemsArray([...itemsArray, {
        id: ultimoId + 1, 
        text: "Qualquer tarefa importante", 
        checked: false
    }])
}*/
/**useEffect(() => {
    const storedArray = localStorage.getItem("itemsArray");
    console.log(localStorage.getItem("itemsArray"));
    if(storedArray != null) {
        array = JSON.parse(storedArray)
        setitemsArray(array);
    } else {
        const itemsArrayString = JSON.stringify(itemsArray);
        localStorage.setItem("itemsArray", itemsArrayString)
    }
}, [])
*/