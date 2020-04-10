import React, { Component } from "react";
import Employee from "../components/Employee";
import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper";

// need button click functions

class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                <Wrapper>
                    <Employee />
                </Wrapper>
            </div >
        )
    }

}
export default Home;