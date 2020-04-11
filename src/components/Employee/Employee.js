import React from "react";
import "./style.css";

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