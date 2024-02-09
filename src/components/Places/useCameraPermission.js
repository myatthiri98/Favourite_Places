import { useEffect, useState } from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import { Camera } from 'react-native-vision-camera';

const hasCameraPermission = async () => {
  if (Platform.OS === 'ios') {
    const status = await Camera.requestCameraPermission();
    return status === 'authorized';
  } else {
    const granted = await PermissionsAndroid.check('android.permission.CAMERA');
    if (!granted) {
      const requestResult = await PermissionsAndroid.request('android.permission.CAMERA');
      return requestResult === 'granted';
    } else {
      return true;
    }
  }
};

const useCameraPermission = () => {
  const [cameraPermissionStatus, setCameraPermissionStatus] = useState(null);

  const requestCameraPermission = async () => {
    const permission = await hasCameraPermission();
    setCameraPermissionStatus(permission);
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  return { cameraPermissionStatus, requestCameraPermission };
};

export default useCameraPermission;