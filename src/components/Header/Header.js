import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="main">
            <div className="headerDiv">
                <h1>Employee Veiw</h1>
                <div className="btnDiv">
                    <button className="sort-btn btn " type="submit"> Sort Alphabetically</button>
                    <button className="filter-btn btn" type="submit"> Filter by JS coders</button>
                </div>
            </div>
        </div>
    )
}

export default Header;