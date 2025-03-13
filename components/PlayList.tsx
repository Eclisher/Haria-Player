
import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

interface PlaylistProps {
  audioFiles: any[];
  onSelectAudio: (uri: string) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ audioFiles, onSelectAudio }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Playlist</Text>
      <FlatList
        data={audioFiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => onSelectAudio(item.uri)}>
            <Text style={styles.text}>{item.filename}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    marginVertical: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default Playlist;