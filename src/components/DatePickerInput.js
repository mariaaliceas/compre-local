import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Modal } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const DatePickerInput = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };

    return (
        <View>
            <TouchableOpacity onPress={showDatePicker}>
                <TextInput
                    style={{ height: 40, borderColor: 'green', borderWidth: 1, borderRadius: 10, margin: 12 }}
                    editable={false}
                    placeholder="Selecione uma data"
                    value={selectedDate ? moment(selectedDate).format('DD/MM/YYYY') : ''}
                />
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

export default DatePickerInput;