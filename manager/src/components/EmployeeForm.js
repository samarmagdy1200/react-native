import React from "react";
import { Text, StyleSheet, Picker } from "react-native";
import { connect } from "react-redux";

import { Card, CardSection, Input } from "../components/common";
import { employeeFormUpdate } from "../actions/employeeFormActions";

class EmployeeForm extends React.Component {
    render() {
        return (
            <Card>
                    <CardSection>
                        <Input 
                            label="Name" 
                            placeholder="Jane" 
                            value={this.props.name}
                            onChangeText={name => this.props.employeeFormUpdate("name", name)}
                        />
                    </CardSection>

                    <CardSection>
                        <Input 
                            label="Phone" 
                            placeholder="010-123456789" 
                            value={this.props.phone}
                            onChangeText={phone => this.props.employeeFormUpdate("phone", phone)}
                        />
                    </CardSection>

                    <CardSection>
                        <Text style={styles.textStyle}>Shift</Text>
                        <Picker
                            style={{ flex: 2 }}
                            selectedValue={this.props.shift || "Saturday"}
                            onValueChange={(shift, index) => this.props.employeeFormUpdate("shift", shift)}
                        >
                            <Picker.Item value="Saturday" label="Saturday" />
                            <Picker.Item value="Sunday" label="Sunday" />
                            <Picker.Item value="Monday" label="Monday" />
                            <Picker.Item value="Tuesday" label="Tuesday" />
                            <Picker.Item value="Wednesday" label="Wednesday" />
                            <Picker.Item value="Thursday" label="Thursday" />
                            <Picker.Item value="Friday" label="Friday" />
                        </Picker>
                    </CardSection>
                </Card>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        marginLeft: 20,
        flex: 1,
        color: '#000'
    }
});

const mapStateToProps = ({ employeeForm }) => {
    return {
        name: employeeForm.name,
        phone: employeeForm.phone,
        shift: employeeForm.shift
    }
}

export default connect(mapStateToProps, { employeeFormUpdate  })(EmployeeForm);