import { useState } from "react";
import './Search.css';
function Search(){
    const [inputText,setInputText]=useState("");

    function handleClick(){
        setInputText("");
    }
    return(
        <>
            <div className="Search-container">
                <div className="Search-bar">
                    <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} placeholder="Search for movies"/>
                    <button onClick={handleClick}>Search</button>
                </div>
            </div>

        </>
    )
}
export default Search;