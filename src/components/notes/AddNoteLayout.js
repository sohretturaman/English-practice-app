/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import AddNoteContext from "./AddNoteContext";
import {
  Camera,
  CameraType,
  PermissionStatus,
  requestCameraPermissionsAsync,
} from "expo-camera";

import CustomHeader from "../notes/CustomHeader";
import MenuComp from "./MenuComp";
import { useDispatch } from "react-redux";
import { changeBackButtonState, changeStatus } from "../../store/Reducers";
import { useNavigation } from "@react-navigation/native";


const AddNoteLayout = ({ info }) => {
  const noteToEdit = info?.data;
  const navigation=useNavigation(); 

  const [visible, setVisible] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const headerTitle = noteToEdit ? "Edit Note" : "Add Note";
  const dispatch =useDispatch(); 
  const [isBackPressed,setIsBackPressed] =useState(false); 

 
  useLayoutEffect(() => {
    setTimeout(() => {
      setVisible(false);
      if(isBackPressed){
        dispatch(changeBackButtonState(isBackPressed));//make back button false
        setIsBackPressed(!isBackPressed); 
      }
    },5000)
  },[visible,showImagePicker])
  const onGaleryPress = () => {
    console.log("current show image pickeer in layout comp",showImagePicker);
    dispatch(changeStatus(showImagePicker)); 
    
  };

  const handleBackPress =()=>{
     console.log('pressed on back created to save note data on back button ')
     navigation.navigate("Notes")
      setIsBackPressed(!isBackPressed);

  }

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        header={headerTitle}
        iconName={"clock-edit-outline"}
        onBackPress={handleBackPress}
     /*    MenuComp={() => (
          <MenuComp
            onGaleryPress={onGaleryPress}
            visible={visible}
            setVisible={setVisible}
          />
        )} */
      />

      <AddNoteContext noteToEdit={noteToEdit}  />
    </View>
  );
};

//
export default AddNoteLayout;

const styles = StyleSheet.create({});
