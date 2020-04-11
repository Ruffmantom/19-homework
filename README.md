This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### The Deployed app is here
[https://obscure-waters-02735.herokuapp.com/] 

The function of this app is for the user to be able to sort and filter their employees. It was a good exercise for me to get started with react and figuring out how to add components and change state when an event is taking place.  

Being able to change state just by using this

```
this.setState({ employeeList: employees })
```
is pretty great and I love that the component
```
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
                        employees={this.state.employeeList} <<<-----------
                    />
                </Wrapper>
            </div >
        )
    }
```
 re-renders right away. It makes it super quick.

 ---
##  License and Copyright 
© Tom Ruff, U of U Full Stack Bootcamp