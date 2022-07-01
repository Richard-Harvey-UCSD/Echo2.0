import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'Card 1',
    //subtitle: 'This is a test subtitle',
  },
  {
    id: 2,
    title: 'Card 2',
    //subtitle: 'This is a test subtitle',
  },
  {
    id: 3,
    title: 'Card 3',
    //subtitle: 'This is a test subtitle',
  },
  {
    id: 4,
    title: 'Card 4',
    //subtitle: 'This is a test subtitle',
  },
];

function CardsScreen() {
  const [data, setData] = useState(DATA);
  const [isRender, setIsRender] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputText, setInputText] = useState();
  const [editItem, setEditItem] = useState();

  const onPressItem = item => {
    setIsModalVisible(true);
    setInputText(item.title);
    setEditItem(item.id);
  }

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => onPressItem(item)}>
        <Text style={styles.text}>{item.title}</Text>
        {/* <Text style={styles.subtext}>{item.subtitle}</Text> */}
      </TouchableOpacity>
    );
  };

  const handleEditItem = (editItem) => {
    const newData = data.map(item => {
      if (item.id == editItem) {
        item.title = inputText;
        return item;
      }
      return item;
    })
    setData(newData);
    setIsRender(!isRender)
  };

  const onPressSaveEdit = () => {
    handleEditItem(editItem);
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        extraData={isRender}
      />
      <Modal
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalView}>
          <Text style={styles.text}>Change Text: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={title => setInputText(title)}
            defaultValue={inputText}
            editable={true}
            multiline={false}
            maxLength={1000}
          />
          <TouchableOpacity
            onPress={() => onPressSaveEdit()}
            style={styles.touchableSave}>
            <Text style={styles.modalText}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flex: 0.5,
    width: '95%',
    marginTop: 20,
    paddinTop: 5,
    marginHorizontal: 10,
  },
  text: {
    marginVertical: 10,
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 25,
  },
  subtext: {
    marginVertical: 10,
    marginLeft: 10,
    fontSize: 20,
  },
  modalText: {
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableSave: {
    backgroundColor: 'black',
    paddingHorizontal: 50,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 25,
  },
  textInput: {
    backgroundColor: '#e6e6e6',
    width: '90%',
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginTop: 20,
  },
});

export default CardsScreen;
