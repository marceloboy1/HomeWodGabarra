import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, TextInput} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions'

import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import Axios from "axios";
import styles from './styles'

import logoImg from '../../assets/logo.png'
import ButtonGroup from 'react-native-button-group';

export default function Upload() {

  const navigation = useNavigation();

  function navigateBack(){
      navigation.goBack()
  }

  const [video, setVideo] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categoria, setCategoria] = useState('');
  const [intensidade, setIntensida] = useState('');
  

  //função que da vida aos grupos de botçoes
  // function groupButtonCategoria(value){
  //   setCategoria(value)
  // }

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
    
    console.log(video.uri)
    var movVideo = {
      uri: video.uri,
      type: 'video/mp4',
      name: (title)+'.mp4'
    }

    var body = new FormData();
    body.append('file', movVideo);
    body.append('title', title);
    body.append('description', description);

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
  }


 return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather style={styles.back} name="arrow-left"/>
        </TouchableOpacity>
      </View>
      
      <View style={styles.form}>
        <TextInput 
          style={styles.inputText}
          placeholder="Escolha o nome"
          onChangeText={title => setTitle(title)}
          defaultValue={title}
        />
      </View>

      <View style={styles.formField}>
        <TextInput 
          style={styles.inputText}
          placeholder="Descrição"
          onChangeText={description => setDescription(description)}
          defaultValue={description}
          multiline={true}
        />
      </View>
      
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={() => {}} style={styles.group}>
          <Text style={styles.groupText}>Pilates</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.group}>
          <Text style={styles.groupText}>Crossfit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.group}>
          <Text style={styles.groupText}>Idoso</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={() => {}} style={styles.group}>
          <Text style={styles.groupText}>Iniciante</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.group}>
          <Text style={styles.groupText}>Intermed.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.group}>
          <Text style={styles.groupText}>Avançado</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={videoPicker} style={styles.action}>
        <Text style={styles.actionText}>Escolha o video</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={uploadVideo} style={styles.action}>
        <Text style={styles.actionText}>Fazer Upload</Text>
      </TouchableOpacity>

    </View>
  )
}
  