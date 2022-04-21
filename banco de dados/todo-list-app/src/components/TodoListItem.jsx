import { useState } from "react";

export function TodoListItem ({id, text, checked = false}) {
    const [checkedState, setCheckedState] = useState(checked);

    function changeCheckboxValue() {
        setCheckedState(!checkedState);
    }

    return (
        <>
            <input id={`check-${id}`} type="checkbox" onChange={changeCheckboxValue} checked={checkedState}/>
            <label htmlFor={`check-${id}`}>{ text }</label>
            <br/>
        </>
    );
}
