import React from "react";
import "./style.css";

const sort = document.getElementsByClassName("sort-btn");
const filter = document.getElementsByClassName("filter-btn");

function Employee(props) {

    return (
        <ul className="list-group">
            {props.employees.map(employee => (
                <div className="employeeCard">
                    <p>Name: {employee.name}</p>
                    <p>Primary Coding language: {employee.language}</p>
                </div>
            ))}
        </ul>
    )
}

export default Employee;