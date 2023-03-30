import { useState } from "react";
import Select from "./Select";

export default function SearchSelect({ list }) {
    const [text, setText] = useState('');
    const onChanage = (e) => {
        setText(e.target.value);
    }
    return (
        <div className="search-input">
            <input type="text" value={text} onChange={onChanage} />

            <Select list={list} keyword={text} />
        </div>
    )
}