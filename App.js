import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Dimensions, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function App() {
  const LoadMeme = () => {
    axios.get('https://meme-api.com/gimme').then(result => {
      setMemeTitle(result.data.title)
      setImage(result.data.url)
      setAuthor(result.data.author)
    })
  }
  useEffect(() => { LoadMeme() }, [])
  const [isFullScreen, setIsFullScreen] = useState(false)
  const { width, height } = Dimensions.get('window')

  const [memeTitle, setMemeTitle] = useState('')
  const [image, setImage] = useState('')
  const [author, setAuthor] = useState('')
  return (
    <View style={{
    flex: 1,
    backgroundColor: isFullScreen ? 'black' : 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
      <Text style={{ fontSize: 45, marginTop: 100 }}>{memeTitle}</Text>
      <TouchableOpacity onPress={() => setIsFullScreen(!isFullScreen)}>
        <Image style={{ width: isFullScreen? width : 300, height: isFullScreen? height : 300, resizeMode: 'contain' }} source={{ uri: image }} />
      </TouchableOpacity>
      <Text style={{ marginTop: 10, fontSize: 15, marginBottom: 15 }}>Made by {author}</Text>
      <Button onPress={LoadMeme} title="New Meme" />
      <Text style={{ fontSize: 10, marginTop: 30 }}>Note: When you press the button, it might take some time to load a meme, so please be patient.</Text>
    </View>
  );
}
