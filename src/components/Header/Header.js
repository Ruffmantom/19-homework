import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="main">
            <div className="headerDiv">
                <h1>Employee Veiw</h1>
                <div className="btnDiv">
                    <button className="sort-btn btn " type="submit" onClick={props.defaultState}> Show Employees</button>
                    <button className="sort-btn btn " type="submit" onClick={props.sortEmployees}> Sort Alphabetically</button>
                    <button className="filter-btn btn" type="submit" onClick={props.filterEmployees}> Filter by JS coders</button>
                </div>
            </div>
        </div>
    )
}

export default Header;