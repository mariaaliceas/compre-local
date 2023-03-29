import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

class Periodicidade extends Component {
    state = {
        selectedOption: 'opcao1'
    }

    handleOptionChange = (value) => {
        this.setState({ selectedOption: value })
    }

    render() {
        return (
            <View>
                <Picker
                    selectedValue={this.state.selectedOption}
                    onValueChange={this.handleOptionChange}
                >
                    <Picker.Item label="Periodo 1" value="opcao1" />
                    <Picker.Item label="Periodo 2" value="opcao2" />
                    <Picker.Item label="Periodo 3" value="opcao3" />
                </Picker>
            </View>
        );
    }
}

export default Periodicidade;
