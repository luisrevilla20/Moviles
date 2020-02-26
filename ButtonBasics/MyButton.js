import React, { Component } from 'react';
import { Alert, Button } from 'react-native';

const MyButton = () => {
    return(
        <Button
            title = "Puchame"
            color = "#f194ff"
            onPress={() => Alert.alert("Button has been pressed")}
        />
    );
};

export default MyButton;