import { StyleSheet, Text, TouchableOpacity, View,Platform,Image,Button } from "react-native";
import React, { useEffect, useState } from "react";
import {
    Camera,
    CameraType,
    PermissionStatus,
    requestCameraPermissionsAsync,
  } from "expo-camera";
  



const LaunchCamera = () => {
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
  
  
  
    function toggleCameraType() {
      setType((current) =>
        current === CameraType.back ? CameraType.front : CameraType.back
      );
    }

    const takeImage=()=>{
      const IsGranted = getPersmissions();
      if(!IsGranted){
        return;
       }
      let result = ImagePick.launchCameraAsync({
        mediaTypes: ImagePick.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        const newImage = {
          imageId:result.assets[0].assetId,
          imageUri:result.assets[0].uri,
          imageWidth: result.assets[0].width,
          imageHeight: result.assets[0].height
        }
        setImage(newImage);
        console.log('new image fromcamera value', newImage);
        saveImage(newImage);   
         
      }
      
    }

    
  return (
    
    <View style={styles.container}>
    <Camera style={styles.camera} type={type}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </Camera>
  </View>
  );
};

export default LaunchCamera;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });
