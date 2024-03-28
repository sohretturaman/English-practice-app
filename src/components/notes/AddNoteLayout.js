/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AddNoteContext from "./AddNoteContext";
import {
  Camera,
  CameraType,
  PermissionStatus,
  requestCameraPermissionsAsync,
} from "expo-camera";

import { addNote } from "../../store/Reducers";
import { useDispatch } from "react-redux";

const AddNoteLayout = ({info}) => {
  const noteToEdit = info?.data;
  const dispatch = useDispatch(); 
  const [type, setType] = useState(CameraType.back);

  const [permissions, useRequestPermissions] = Camera.useCameraPermissions();
  const getPersmissions = async () => {
    if (permissions?.status === PermissionStatus.UNDETERMINED) {
      const result = await requestCameraPermissionsAsync();
      console.log("result in requestPermissons", result);
      return result.status;
    }
    if (permissions?.status === PermissionStatus.DENIED) {
      //const result =  await  requestCameraPermissionsAsync()
      // console.log("permission is denied?", result.status)
      return;
    }
    if (permissions?.status === PermissionStatus.GRANTED) {
      return permissions.status;
    }
  };

  useEffect(() => {
    getPersmissions();
  });

  const handleSaveNote = (newNote) => {
    dispatch(addNote(newNote)); // Dispatch the addNote action
  };

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <AddNoteContext saveNote={handleSaveNote} noteToEdit={noteToEdit} />
    </View>
  );
};

//
export default AddNoteLayout;

const styles = StyleSheet.create({});
