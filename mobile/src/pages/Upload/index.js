import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, Alert } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions'

import Axios from "axios";
import styles from './styles'


export default function Upload() {

  const [video, setVideo] = useState();

  async function videoPicker() {
    if (Constants.platform.ios) {
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status != "granted") {
         alert("Permissão necessária");
         return;
      };
    }

    const file = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos
    });

    if (file.cancelled){
      return;
    }


    if (!file.uri){
      return;
    }

    setVideo(file)
  }



  async function uploadVideo(){

    var movVideo = {
      uri: video.uri,
      type: 'video/mp4',
      name: 'teste123.mp4'
    }

    var body = new FormData();
    body.append('file', movVideo);
    body.append('title', 'VIDEO DE TESTE');
    body.append('description', 'A beautiful video!');

    fetch('http://192.168.0.106:3333/upload', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'authorization': '2963d222'
      },
      body: body,
    }).then((response) => response.json())
      .then((responseJson) => {
        //only the first frame of the video got uploaded
        console.log(responseJson);
    });

    
    console.log("FIM");
    
  }


 return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity onPress={videoPicker} style={styles.action}>
        <Text style={styles.actionText}>Escolha o video</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={uploadVideo} style={styles.action}>
        <Text style={styles.actionText}>Fazer Upload</Text>
      </TouchableOpacity>


    </View>
  )
}
  