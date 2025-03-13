import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import * as MediaLibrary from "expo-media-library";
import Player from "./../../components/Player";
import Playlist from "./../../components/PlayList";
import Header from "./../../components/Header";

const getAudioFiles = async () => {
  const { status } = await MediaLibrary.requestPermissionsAsync();
  if (status !== "granted") return [];
  const media = await MediaLibrary.getAssetsAsync({ mediaType: "audio" });
  return media.assets;
};

const App = () => {
  const [audioFiles, setAudioFiles] = useState<any[]>([]);
  const [selectedAudio, setSelectedAudio] = useState<string | null>(null);

  useEffect(() => {
    const fetchAudioFiles = async () => {
      const files = await getAudioFiles();
      setAudioFiles(files);
    };
    fetchAudioFiles();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Playlist audioFiles={audioFiles} onSelectAudio={setSelectedAudio} />
      {selectedAudio && <Player audioUri={selectedAudio} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;