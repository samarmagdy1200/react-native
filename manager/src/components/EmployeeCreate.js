import React, { Component } from "react";
import { connect } from "react-redux";

import { Card, CardSection, Button } from "../components/common";
import { employeeCreate } from "../actions/employeeActions";
import { employeeFormUpdate } from "../actions/employeeFormActions";
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends Component {
    componentWillMount() {
        this.props.employeeFormUpdate('name', '');
        this.props.employeeFormUpdate('phone', '');
        this.props.employeeFormUpdate('shift', '');
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate(name, phone, shift);
    }

    render() {
        return (
            <Card>
                <EmployeeForm />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}

export default connect(null, { employeeFormUpdate, employeeCreate })(EmployeeCreate);