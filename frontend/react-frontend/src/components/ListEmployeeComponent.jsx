import React, { Component } from 'react';
import EmployeeServices from '../services/EmployeeServices';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees : []
        }
    }

    componentDidMount(){
        EmployeeServices.getEmployeeList().then((resp) => {
            this.setState({employees: resp.data})
        }) 
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <table className="table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Id</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                        <tr key={employee.id}>
                                            <td>{employee.fName}</td>
                                            <td>{employee.lName}</td>
                                            <td>{employee.emailId}</td>
                                        </tr>            
                                    
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default ListEmployeeComponent;