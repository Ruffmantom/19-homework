import React, { Component } from "react";
import Employee from "../components/Employee/Employee";
import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper";

// need button click functions
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
        name: "Moze Grader",
        language: "Javascript"
    },
]
// getting the btns
const sortBtn = document.getElementsByClassName("sort-btn");
const filterBtn = document.getElementsByClassName("filter-btn");

class Home extends Component {

    state = {
        employeeList: []
    };

    sortEmployees = (event) => {
        alert("sort worked!");


    }

    filterEmployees = (event) => {
        alert("filter worked")
    }

    render() {
        return (
            <div>
                <Header
                    sortEmployees={this.sortEmployees}
                    filterEmployees={this.filterEmployees}
                />
                <Wrapper>
                    <Employee
                        employees={employees}
                    />
                </Wrapper>
            </div >
        )
    }

}
export default Home;