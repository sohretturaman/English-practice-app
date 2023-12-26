/** @format */

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const PickTimeComp = ({
  handleReminderTime,
  isDatePickerVisible,
  handleCancel,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleConfirm = (date) => {
    //  console.log("A date has been picked: ", date.toLocaleString());
    setSelectedDate(date);
    handleReminderTime(date);
    handleCancel(); // Close the modal after confirming the date
  };

  return (
    <View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        display="spinner"
        date={selectedDate} // Pass the selectedDate as the initial date
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </View>
  );
};

export default PickTimeComp;

const styles = StyleSheet.create({});
