import React, { Component } from "react";
import Employee from "../components/Employee/Employee";
import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper";

// dont know if this data should be in this file
const employees = [
    {
        name: "Tom Ruff",
        language: "Javascript"
    },
    {
        name: "John Mondy",
        language: "HTML"
    },
    {
        name: "Brent Carter",
        language: "Javascript"
    },
    {
        name: "Ashley Sworensin",
        language: "Javascript"
    },
    {
        name: "Emily Hope",
        language: "HTML"
    },
    {
        name: "Robert Bovee",
        language: "CSS"
    },
    {
        name: "Blaise Laurel",
        language: "Javascript"
    },
    {
        name: "Moze Gader",
        language: "Javascript"
    },
]
// this filter method works
var filteredEmployees = employees.filter(function (employ) {
    return employ.language == "Javascript";
});
console.log(filteredEmployees);
console.log(employees.sort());

class Home extends Component {

    state = {
        employeeList: []
    };
    // render state functions
    defaultState = () => {
        this.setState({ employeeList: employees })
    }
    // sort employees
    sortEmployees = (event) => {
        function compare(a, b) {
            // Use toUpperCase() to ignore character casing
            const employeeA = a.name.toUpperCase();
            const employeeB = b.name.toUpperCase();

            let comparison = 0;
            if (employeeA > employeeB) {
                comparison = 1;
            } else if (employeeA < employeeB) {
                comparison = -1;
            }
            return comparison;
        }

        console.log(employees.sort(compare));
        var sortedEmployees = employees.sort(compare);
        this.setState({ employeeList: sortedEmployees });

    }
    // filtering the employees to just show javascript coders
    filterEmployees = (event) => {
        var filteredEmployees = employees.filter(function (employ) {
            return employ.language == "Javascript";
        });
        this.setState({ employeeList: filteredEmployees });
    }

    render() {
        return (
            <div>
                <Header
                    defaultState={this.defaultState}
                    sortEmployees={this.sortEmployees}
                    filterEmployees={this.filterEmployees}
                />
                <Wrapper>
                    <Employee
                        employees={this.state.employeeList}
                    />
                </Wrapper>
            </div >
        )
    }

}
export default Home;