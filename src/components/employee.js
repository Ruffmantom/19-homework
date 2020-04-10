import React from "react";

function Employee(props) {
    return (
        <ul className="list-group">
            {props.employees.map(employee => (
                <li className="employee">
                    <p>{employee.name}</p>
                    <p>{employee.language}</p>
                </li>
            ))}
        </ul>
    )
}

export default Employee;