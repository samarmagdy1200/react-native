import React from "react";
import { View, Text, Modal } from "react-native";

export default Confirm = ({ children, visible }) => {
    return (
        <Modal animationType="slide" visible={visible} transparent={false}>
            {children}
        </Modal>
    );
};