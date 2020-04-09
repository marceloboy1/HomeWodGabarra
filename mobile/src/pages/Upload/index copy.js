import FormData from 'form-data';
import axios from 'axios';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Video } from 'expo-av';
import styles from './styles'

const createFormData = (photo, body) => {
  const data = new FormData();
  data.append('file', {
      name: photo.filename,
      uri: Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
  });

  Object.keys(body).forEach(key => {
      data.append(key, body[key]);
  });

  return data;
};


export default function Upload() {
  let [selectedImage, setSelectedImage] = useState(null);
 
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({mediaTypes: ImagePicker.MediaTypeOptions.Videos,});

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ 
      localUri: pickerResult.uri,
      name: pickerResult.name,
      type: pickerResult.type,
      widht: pickerResult.width,
      height: pickerResult.height
    });
  };

  if (selectedImage !== null) {
    
    return (
      
      <View style={styles.container}>
        <Video
                source={{ uri: selectedImage.localUri}}
                rate={1.0}
                volume={1.0}
                muted={false}
                useNativeControls={true}
                resizeMode="cover"
                usePoster = {true}
                style={{ width: selectedImage.widht /2 , height: selectedImage.height / 2 }}
         />
        
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.action}>
        <Text style={styles.actionText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}
