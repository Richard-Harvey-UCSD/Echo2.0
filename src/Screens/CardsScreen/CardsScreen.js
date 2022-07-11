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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Lottie from 'lottie-react-native';

const DATA = [
  {
    id: 1,
    title: 'Card 1',
    subtitle: 'This is a test subtitle',
  },
];

function CardsScreen() {
  const [data, setData] = useState(DATA);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => (
        <Modal
          animationType="fade"
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View>
            <Text>Hello</Text>
          </View>
        </Modal>
      )}>
        <Text style={styles.text}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const addCard = () => {
    console.log('Pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        contentInset={{right: 0, top: 0, left: 0, bottom: 10}}
        renderItem={renderItem}
      />
      <TouchableOpacity style={styles.addButton} onPress={addCard}>
        <Lottie
          source={require('../../../assets/AddButton.json')}
          autoPlay
          loop
        />
      </TouchableOpacity>
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
  modalTextTitle: {
    textAlign: 'left',
    marginLeft: 35,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: -15,
    marginTop: 10,
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
  addButton: {
    height: 75,
    width: 75,
    borderRadius: 35,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    right: 0,
  },
});

export default CardsScreen;
