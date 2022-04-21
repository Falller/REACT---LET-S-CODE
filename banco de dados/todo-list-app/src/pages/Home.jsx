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

localStorage.setItem("abc","seu item");
sessionStorage.setItem("def", "teste")

    return (
        <div className="container">
            {itemsArray.map(({id, text, checked}) => {
                return <TodoListItem key={id} id={id} text={text} checked={checked} />
            })}
            <hr />

            {itemsArray2.map((obj) => {
                return <TodoListItem key={obj.id}{...obj} />
            })}
        </div>
    )
}