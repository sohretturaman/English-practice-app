/** @format */

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Image,
  Button,
  Dimensions,
  Pressable,
} from "react-native";
import React, {
  useDebugValue,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import {
  Camera,
  CameraType,
  PermissionStatus,
  requestCameraPermissionsAsync,
} from "expo-camera";

import * as ImagePick from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import Colors from "../../contants/Colors";
import { changeBackButtonState, changeStatus } from "../../store/Reducers";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { nanoid } from "@reduxjs/toolkit";


const { height, width } = Dimensions.get("window");
//update noteobject here and send data to redux
const ImagePicker = ({ saveImage, images }) => {
  console.log("images in picker **", images.length);
  const [image, setImage] = useState({});
  const selector = useSelector((state) => state.imagePicker);

  const showImagePicker = selector.pickerStatus;
  const dispatch = useDispatch();

  const [permissionInfo, useRequestPermissionInfo] =
    ImagePick.useMediaLibraryPermissions();

  const getPersmissions = async () => {
    if (permissionInfo?.status === PermissionStatus.UNDETERMINED) {
      const result = await useRequestPermissionInfo();
      return result?.status;
    }
    if (permissionInfo?.status === PermissionStatus.DENIED) {
      //const result =  await  requestCameraPermissionsAsync()
      return;
    }
    if (permissionInfo?.status === PermissionStatus.GRANTED) {
      return permissionInfo.status;
    }
  };
  useEffect(() => {
    getPersmissions();
  }, [permissionInfo]);

  const pickImage = async () => {
    const IsGranted = getPersmissions();
    if (!IsGranted) {
      return;
    }
    let result = await ImagePick.launchImageLibraryAsync({
      mediaTypes: ImagePick.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("result", result);
    /*   let response = await ImagePick.getCameraPermissionsAsync();
    console.log('response in image picker', response) */

    if (!result.canceled) {
      const newImage = {
        imageId: nanoid(),
        imageUri: result.assets[0].uri,
        imageWidth: result.assets[0].width,
        imageHeight: result.assets[0].height,
      };
      setImage(newImage);
      console.log("new image value", newImage);
      saveImage(newImage);
    }
  };

  const NoImages = () => {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.infoContainer,
          pressed && { opacity: 0.5 },
        ]}
      >
        <View style={styles.iconsWrapper}>
          <MaterialCommunityIcons
            name="camera"
            size={25}
            color={Colors.darkGray}
            onPress={takeImage}
            style={styles.icon}
          />
          <MaterialCommunityIcons
            name="file-image-plus"
            size={25}
            color={Colors.darkGray}
            onPress={pickImage}
            style={styles.icon}
          />
        </View>
        <Text style={styles.infoText}>No images yet!</Text>
      </Pressable>
    );
  };
  const ImagesList = () => {
    return images.map((img, index) => {
      return (
        <View key={index} style={styles.imageWrapper}>
          <Image source={{ uri: img?.imageUri }} style={styles.image} />
        </View>
      );
    });
  };

  const takeImage = async () => {
    console.log("pressed on take image");
    const IsGranted = getPersmissions();
    if (!IsGranted) {
      return;
    }
    let result = await ImagePick.launchCameraAsync({
      mediaTypes: ImagePick.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      
      const newImage = {
        imageId: nanoid(),
        imageUri: result.assets[0].uri,
        imageWidth: result.assets[0].width,
        imageHeight: result.assets[0].height,
      };
      
      setImage(newImage);
      console.log("new image fromcamera value", result);
      saveImage(newImage);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.taskTitle}> Images List</Text>
        {images.length > 0 && (
          <View style={styles.iconsWrapper}>
            <MaterialCommunityIcons
              name="camera"
              size={24}
              color={Colors.secondary}
              onPress={takeImage}
              style={styles.icon}
            />
            <MaterialCommunityIcons
              name="file-image-plus"
              size={24}
              color={Colors.secondary}
              onPress={pickImage}
              style={styles.icon}
            />
          </View>
        )}
      </View>
      {images.length === 0 && <NoImages />}
      {images.length > 0 && <ImagesList />}
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: width * 0.3,
  },
  imageWrapper: {
    height: width * 0.6,
    width: width * 0.8,
    backgroundColor: "blue",
    marginVertical: width * 0.02,
    borderRadius: width * 0.02,
    elevation: 1,
  },

  image: {
    borderRadius: width * 0.02,
    height: width * 0.6,
    width: width * 0.8,
    resizeMode: "contain",
  },
  infoText: {
    fontSize: width * 0.04,
    color: Colors.darkGray,
    fontWeight: "500",
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightGray,
    height: width * 0.3,
    width: width * 0.8,
    borderRadius: width * 0.02,
  },
  titleWrapper: {
    width: width * 0.9,
    flexDirection: "row",
    height: width * 0.15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.darkGray,
    marginBottom: 10,
    marginLeft: width * 0.02,
  },
  iconsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: width * 0.02,
    marginBottom: width * 0.02,
  },
  icon: {
    marginLeft: width * 0.05,
    padding: width * 0.02,
  },
});
