import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
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
  const [memeTitle, setMemeTitle] = useState('')
  const [image, setImage] = useState('')
  const [author, setAuthor] = useState('')
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 45, marginTop: 100 }}>{memeTitle}</Text>
      <Image style={{ justifyContent: 'center', flex: 1, width: '50%', height: '50%', marginBottom: 34 }} source={{ uri: image }} />
      <Text style={{ marginTop: 10, fontSize: 15, marginBottom: 15 }}>Made by {author}</Text>
      <Button onPress={LoadMeme} title="New Meme" />
      <Text style={{ fontSize: 10, marginTop: 30 }}>Note: When you press the button, it might take some time to load a meme, so please be patient.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
