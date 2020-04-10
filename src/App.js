import React from "react";
import Employee from "./components/Employee";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper";
function App() {
    return (
        <div>
            <Header />
            <Wrapper>
                <Employee />
            </Wrapper>
        </div>
    )
}
export default App;