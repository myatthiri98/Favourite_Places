import React, { useState, useEffect } from 'react';
import { View, Button, Alert, Image, StyleSheet } from 'react-native';
import { Camera } from 'react-native-vision-camera';
import useCameraPermission from './useCameraPermission';

const ImagePicker = () => {
  const { cameraPermissionStatus, requestCameraPermission } = useCameraPermission();
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    // Cleanup captured image when component unmounts
    return () => {
      if (capturedImage) {
        URL.revokeObjectURL(capturedImage.uri);
      }
    };
  }, [capturedImage]);

  const takeImageHandler = async () => {
    requestCameraPermission();

    if (cameraPermissionStatus !== true) {
      Alert.alert('Error', 'Camera permission not granted', [{ text: 'OK', onPress: () => {} }]);
      return;
    }

    const image = await Camera.takePictureAsync({
      quality: 0.5, // Adjust quality as needed
    });

    setCapturedImage(image);
  };

  return (
    <View style={styles.container}>
      {/* <Camera style={styles.camera} cameraType={Camera.Constants.Type.back} onCameraReady={requestCameraPermission} /> */}
      <View style={styles.buttonContainer}>
        <Button title="Take Image" onPress={takeImageHandler} />
      </View>
      {/* {capturedImage && (
        <View style={styles.imagePreview}>
          <Image source={{ uri: capturedImage.uri }} style={styles.previewImage} />
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  camera: {
    height: 400,
    width: '100%',
  },
  buttonContainer: {
    margin: 20,
  },
  imagePreview: {
    marginTop: 20,
    alignItems: 'center',
  },
  previewImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default ImagePicker;