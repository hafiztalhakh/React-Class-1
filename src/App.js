import React from 'react';

class App extends React.Component {

    render() {

        //Object Print.
        //Array of Object.
        //Array of Array of Object.
        //Ternitary Operator.

        const userList = {
            L1: {
                Name: "Hamza",
            },
            L2: {
                Name: "Talha"
            }
        };

        const userListArray = [
            {
                Name: "Hamza",
                Age: 23,
            },
            {
                Name: "Batool",
                Age: 20,
            },
            {
                Name: "Talha",
                Age: 23,
            },
        ]

        const infoUser = [
            [
                {
                    Name: "Hamza",
                    Age: 23
                },
                "My name is Hamza"
            ],
            [
                {
                    Name: "Talha",
                    Age: 23
                },
                "My name is Talha"
            ]
        ]

        return (
            <ul>
                <li>{userList.L1.Name}</li>
                {<li>{userList.L2.Name}</li>}
                <p>-------------------------------------------</p>
                {/* Printing Array of object through loops */}
                {
                    userListArray.map((value, index) => {
                        return (
                            <React.Fragment key={index}>
                                <li>Name: {value.Name}, Age: {value.Age}</li>
                            </React.Fragment>
                        )
                    })
                }
                <p>-------------------------------------------</p>
                {/* condition ? ye chalai(TRUE) : ye chalai(FALSE) */}
                {
                    infoUser.map((value, index) => {
                        return (
                            value.map((value2, index2) => {
                                return (
                                    <React.Fragment key={index2}>
                                        {
                                            value2.Name ? <li>Name: {value2.Name}, Age: {value2.Age}</li> :
                                                <li>{value2}</li>
                                        }
                                    </React.Fragment>
                                )
                            })
                        )
                    })
                }
                {
                    infoUser.map((value, index) => {
                        return (
                            value.map((value2, index2) => {
                                return (
                                    <React.Fragment key={index2}>
                                        {
                                            value2.Name ? <li>Name: {value2.Name}, Age: {value2.Age}</li> :
                                                <li>{value2}</li>
                                        }
                                    </React.Fragment>
                                )
                            })
                        )
                    })
                }
            </ul>
        )
    }
}

export default App;