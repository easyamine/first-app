import React, { useState } from "react";
import ReactBarStyle from "./SearchBar.css"


function SearchBar(props) {
const [SearchValue, SetSearchValue] = useState("")

function Changer(event) {
    SetSearchValue(event.target.value)
}
function ClearButton(event) {
    SetSearchValue(" ")
}

const ShouldDisplayClear = SearchValue.length > 0;

const ShowMovies = props.List.filter((Movie) => {
    return Movie .includes(SearchValue)
})
    return (

        <div>
            <input type="text" value={SearchValue} onChange={Changer}></input>
            {ShouldDisplayClear && <button onClick={ClearButton}>Clear</button>}
            <ul>
                {ShowMovies.map((Movie) => {
                    return <li key={Movie}>{Movie}</li>
                })}
            </ul>
        </div>
    )
}

export default SearchBar;