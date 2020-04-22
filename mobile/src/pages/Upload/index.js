import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, TextInput, Alert} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions'

import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'
import logoImg from '../../assets/logo.png'

import { ButtonGroup } from 'react-native-elements';

class BtnGroup extends React.Component {

  constructor () {
    super()
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
    
  }
  
  updateIndex (selectedIndex) {
      
      this.setState({selectedIndex})
      this.props.onChange(selectedIndex)
      console.log(selectedIndex)
    }
  


  render () {
    const buttons = this.props.buttons;
    const { selectedIndex } = this.state
    
    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 50}}
      />
    )
  }
}

export default function Upload() {

  const navigation = useNavigation();

  function navigateBack(){
      navigation.goBack()
  }

  const [video, setVideo] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [intensidade, setIntensidade] = useState(0);
  const [categoria, setCategoria] = useState(0);

  async function videoPicker() {
    
    if (Constants.platform.ios) {
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status != "granted") {
         alert("Permissão necessária");
         return;
      };
    }

    console.log("Abrindo biblioteca"); 
    const file = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });
    console.log("Video escolhido");
    console.log(file);

    console.log("TESTE");
    if (file.cancelled){
      console.log("CANCELADO");
      return;
    }

    if (!file.uri){
      console.log("URI INVALIDA");
      return;
    }

    console.log("SUCESSO");
    setVideo(file);
  }

  function handleIntensidade(receivedIndex){
    setIntensidade(receivedIndex);
    console.log("Intensidade");
    console.log(intensidade)
  }

  function handleCategoria(receivedIndex){
    setCategoria(receivedIndex);
    console.log("Categoria");
    console.log(categoria)
  }

  async function uploadVideo(){

    var movVideo = {
      uri: video.uri,
      type: 'video/mp4',
      name: (title)+'.mp4'
    }

    var body = new FormData();
    body.append('file', movVideo);
    body.append('title', title);
    body.append('description', description);
    body.append('intensidade', intensidade);
    body.append('categoria', categoria);

    fetch('http://192.168.0.106:3333/upload', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'authorization': 'c99afe28'
      },
      body: body,
    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert("UPLOAD COMPLETO");
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


      <BtnGroup onChange={handleCategoria} buttons={["Pilates", "Crossfit", "Idoso"]} />
      <BtnGroup onChange={handleIntensidade} buttons={["Iniciante", "Intermediário", "Avançado"]} />

      
      <TouchableOpacity onPress={videoPicker} style={styles.action}>
        <Text style={styles.actionText}>Escolha o video</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={uploadVideo} style={styles.action}>
        <Text style={styles.actionText}>Fazer Upload</Text>
      </TouchableOpacity>

    </View>
  )
}
  