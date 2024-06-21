import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Modal } from 'react-native'
import CustomTextInput from "../component/customTextInput";
import CustomButton from "../component/customButton";




const EditNote = ({ setCurrentPage, currentNote, editCurrentNote }) =>{
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')


    useEffect(() =>{
       
        setTitle(currentNote.title);
        setDesc(currentNote.desc);
//     
        
    }, [currentNote])


    return (
        <View style={styles.container}>
          <Text style={styles.pageTitle}>Edit Note</Text>
          <CustomTextInput
            text={title}
            onChange={setTitle}
            label="Judul"
            placeholder="Judul"
            numberOfLines={1}
            multiline={false}
            value={title}
          />
          <CustomTextInput
            text={desc}
            onChange={setDesc}
            label="Deskripsi"
            placeholder="Deskripsi"
            multiline
            numberOfLines={4}
            value={desc}
          />
          <View style={styles.spacerTop}>
            <CustomButton
              backgroundColor="#247881"
              color="#fff"
              text="Simpan"
              width="100%"
              onPress={() => {
                editCurrentNote({
                  id: currentNote.id,
                  title: title,
                  desc: desc,
                });
                setCurrentPage("home");
              }}
              disabled={title === ""}
            />
          </View>
          <View style={styles.spacerTop}>
            <CustomButton
              backgroundColor="#DDDDDD"
              color="#203239"
              text="Kembali ke Home"
              width="100%"
              onPress={() => {
                  setCurrentPage('home')}}
            />
          </View>
        </View>
      )

} 

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 20,
    },
    pageTitle: {
      marginTop: 20,
      fontSize: 20,
      fontWeight: '700',
      textAlign: 'center',
      color: '#203239',
    },
    spacerTop: {
      marginTop: 30,
    },
  })
  



export default EditNote