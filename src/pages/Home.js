import React, { Component } from "react";
import Employee from "../components/Employee";
import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper";

// need button click functions
const employees = [
    {
        name: "Tom",
        language: "Javascript"
    },
    {
        name: "John",
        language: "HTML"
    },
    {
        name: "Brent",
        language: "Javascript"
    },
    {
        name: "Ashley",
        language: "Javascript"
    },
    {
        name: "Emily",
        language: "HTML"
    },
    {
        name: "Robert",
        language: "CSS"
    },
    {
        name: "Blaise",
        language: "Javascript"
    },
    {
        name: "Moze",
        language: "Javascript"
    },
]
const sortBtn = document.getElementsByClassName("sort-btn");
const filterBtn = document.getElementsByClassName("filter-btn");

class Home extends Component {

    sortEmployees = () => {
        sortBtn.addEventListener("click", function () {
            alert("filter worked!");
        })
    }

    filterEmployees = () => {
        filterBtn.addEventListener("click", function () {
            alert("filter worked!");
            var javaEmployees = employees.filter(function (Javascript) {
                return Javascript.language == "Javascript";
            });
        })

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