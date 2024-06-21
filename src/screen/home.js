import React from 'react'
import { FlatList, StyleSheet, View, Text, openModal } from 'react-native'
import CustomButton from '../component/customButton'


const NoteCard = ({ item, editNote, deleteNote, setCurrentPage }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text>{item.desc}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#FFC300"
        color="#151D3B"
        text="Ubah"
        fontSize={12}
        width={100}
        onPress={() => {
          editNote(item)
          setCurrentPage('editNote')
        }}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => {deleteNote(item.id)}}
      />
    </View>
  </View>
)

const Home = ({ setCurrentPage, noteList,  deleteNote, editNote }) => (
  <View style={styles.container}>
    <CustomButton
      backgroundColor="transparant"
      color="cyan"
      text="Tambahkan Note"
      width="100%"
      height='300'
      onPress={() => {
        setCurrentPage('addNote')
      }}
    />
    <FlatList
          data={noteList}
          renderItem={({ item }) => (
            <NoteCard
              item={item}
              setCurrentPage={setCurrentPage}
              deleteNote={() => deleteNote(item.id)}
              editNote={editNote}
            />
          )}
          keyExtractor={({ id }) => id}
    />
      
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    borderColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: '600',
    color: '#203239',
    fontSize: 16,
    marginBottom: 5,
  },
  buttons: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    
  },


})

export default Home