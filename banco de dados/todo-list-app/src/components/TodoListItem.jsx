import { useState } from "react";
import { Home } from "../pages/Home"

export function TodoListItem ({id, text, checked = false, changeArray}) {
    const [checkedState, setCheckedState] = useState(checked);
    
    function changeCheckboxValue() {
        setCheckedState(!checkedState);
        changeArray(id, !checkedState);
    }

    return (
        <>
            <input id={`check-${id}`} type="checkbox" onChange={changeCheckboxValue} checked={checkedState}/>
            <label htmlFor={`check-${id}`}>{ text }</label>
            <br/>
        </>
    );
}
