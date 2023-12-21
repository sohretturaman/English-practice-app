/** @format */
import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
//import RNDateTimePicker from "@react-native-community/datetimepicker";

const AddTime = ({ handleNotificaionTime }) => {
  const currentDate = new Date();
  currentDate.getUTCDate;
  // console.log("current date", currentDate.toLocaleString());

  const [isVisible, setIsVisible] = useState(false);
  const [date, setDate] = useState(currentDate);
  const [showPicker, setShowPicker] = useState(false);
  const [pickedTime, setPickedTime] = useState(currentDate);

  const handleCancel = () => {
    setIsVisible(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date.toLocaleString());
    setDate(date);
    setIsVisible(false);
    handleNotificaionTime(date);
  };

  return (
    <View>
      <Text>AddTime</Text>
      <Button title="show date picker" onPress={() => setIsVisible(true)} />
      <DateTimePickerModal
        onChange={(date) => {
          console.log("pressed date", date);
        }}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        isVisible={isVisible}
        mode="datetime" //have date option
        display="spinner"
      />
      <Text>{date ? date.toLocaleString() : ""}</Text>
    </View>
  );
};

export default AddTime;

const styles = StyleSheet.create({});
