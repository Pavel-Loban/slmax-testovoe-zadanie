import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Dimensions
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../../assets/styles'
import { setTaskList , setCount } from '../../bll/taskSlise';
import heart from '../../assets/images/rightg.png'

export const CreateNewTask = () => {

  const dispatch = useDispatch();
  const {count, taskList, theme} = useSelector((state) => state.task);

  const inputRef = React.useRef();

  const [titleValueTask, setTitleValueTask] = React.useState('');
  const [textValueTask, setTextValueTask] = React.useState('');


  const date = new Date();

  const onAdded = (value1,value2) => {
    if(value1 !== '' && value2 !== '' ){
      const addTasks =
      {
        title: value1,
        text: value2,
        id: count,
        date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
        active: false,
      }

    dispatch(setTaskList(addTasks));
    inputRef.current.blur()
    }else{
      alert('Заполните поля!!')
    }
  }



  const addTask = () => {
    dispatch(setCount(count + 1));
    onAdded(titleValueTask,textValueTask);
    setTitleValueTask('');
    setTextValueTask('');
  }

  return (
    <SafeAreaView style={theme ?  styles.container : styles.container2}>
      <View style={styles.inputContainer} >
        <View>
          <TextInput style={styles.input}
            placeholder="новая заметка"
            ref={inputRef}
            onChangeText={setTitleValueTask}
            value={titleValueTask}
            maxLength={25}
          />
        </View>

        <View style={styles.addBlock} >
          <TextInput style={styles.inputText}
            ref={inputRef}
            placeholder="описание заметки"
            multiline={true}
            numberOfLines={4}
            onChangeText={setTextValueTask}
            value={textValueTask}
          />
          <TouchableOpacity style={styles.btnAdd} onPress={addTask}>
          <Image
        style={styles.tinyLogo}
        source={heart}
      />
          </TouchableOpacity>

        </View>
      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.yellow,
    marginBottom:20,
  },
  container2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.cyan,
    marginBottom:20,
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    height: 40,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
  },
  inputText: {
    height: 40,
    textAlignVertical: 'top',
    marginLeft: 12,
    padding: 10,
  },
  tinyLogo: {
    width: 20,
    height: 20,

  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    width: 190,
  },
  btnAdd:{
    marginRight: 30,

  },
  wrapperBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: Dimensions.get('window').width*.8,
  }

});
