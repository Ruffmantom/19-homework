import React from "react";

function Header() {
    return (
        <div>
            <div className="headerDiv">
                <h1>Employee Veiw</h1>
                <div className="btnDiv">
                    <button className="sort" type="submit"> Sort Alphabetically</button>
                    <button className="filter" type="submit"> Filter by JS coders</button>
                </div>
            </div>
        </div>
    )
}

export default Header;