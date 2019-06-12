import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import RNCommunications from "react-native-communications";

import { Card, CardSection, Button } from "../components/common";
import Confirm from './Confirm';
import { employeeFormUpdate } from "../actions/employeeFormActions";
import { employeeEdit, employeeDelete } from "../actions/employeeActions";
import EmployeeForm from "./EmployeeForm";

class EmployeeEdit extends Component {
    state = {
        visible: false
    };

    componentWillMount() {
        const { name, phone, shift } = this.props.employee;

        this.props.employeeFormUpdate('name', name);
        this.props.employeeFormUpdate('phone', phone);
        this.props.employeeFormUpdate('shift', shift);
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        const { id } = this.props.employee;

        this.props.employeeEdit(id, name, phone, shift);
    }

    onTextPress() {
        const { name, phone, shift } = this.props;

        RNCommunications.text(phone, `Hello ${name}, your shift has been changed to ${shift}!`);
    }

    onFirePress() {
        this.setState({ visible: true });
    }

    onConfirmPress() {
        const { id } = this.props.employee;

        this.props.employeeDelete(id);
    }

    render() {
        return (
            <Card>
                <EmployeeForm />

                <Confirm visible={this.state.visible}>
                    <View>
                        <Card>
                            <CardSection>
                                <Text style={styles.textStyle}>Are you sure?</Text>
                            </CardSection>
                            <CardSection>
                                <Button onPress={this.onConfirmPress.bind(this)}>Ok</Button>
                                <Button onPress={() => this.setState({ visible: false})}>Cancel</Button>
                            </CardSection>
                        </Card>
                    </View>
                </Confirm>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onFirePress.bind(this)}>Fire</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: 'red'
    }
});

const mapStateToProps = ({ employeeForm }) => {
    return {
        name: employeeForm.name,
        phone: employeeForm.phone,
        shift: employeeForm.shift
    }
};

export default connect(mapStateToProps, { employeeFormUpdate, employeeEdit, employeeDelete })(EmployeeEdit);