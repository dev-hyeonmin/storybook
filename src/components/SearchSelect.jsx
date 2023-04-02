import { useState } from "react";
import Select from "./Select";

export default function SearchSelect({ list }) {
    const [focus, setFocus] = useState(false);
    const [text, setText] = useState("");
    const onChanage = (e) => {        
        setText(e.target.value);
        setFocus(true);
    };

    const onKeyDown = (e) => {     
        if (e.code === 'Escape') {
            setFocus(false);
        }
    };

    const onSelected = (id, title) => {
        setText(title);
        setFocus(false);        
    };

    const onBlur = (active) => {
        setTimeout(function() {
            setFocus(active)
        }, 150);
    }
    return (
        <div className='search-input'>
            <input
                type='text'
                value={text}
                onChange={onChanage}
                onKeyDown={onKeyDown}
                onFocus={() => setFocus(true)}
                onBlur={() => onBlur(false)}
            />

            {focus &&
                <Select
                    list={list}
                    keyword={text}
                    onSelected={onSelected} />}
        </div>
    );
}
