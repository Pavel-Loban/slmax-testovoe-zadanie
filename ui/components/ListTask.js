import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Dimensions,
} from 'react-native';
import { ItemTask } from './ItemTask';
import { COLORS } from '../../assets/styles';
import { SwipeListView } from 'react-native-swipe-list-view';
import { setDelTask } from '../../bll/taskSlise';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import loading from '../../assets/images/loading.png'

export const ListTask = () => {


    const { taskList,theme } = useSelector((state) => state.task)
    const dispatch = useDispatch();


      const HiddenItem = props => {
        const { data } = props;

        const [count,setCount] = React.useState(5)
        const [del,setDel] = React.useState(false)


        const filterTask = (id) => {
            setDel(true)

       }

       const notRemove= () => {
        setDel(false)
        setCount(5)
       }

       React.useEffect(() => {
        if (del && count > 0) {
            const viewDel = setInterval(() => {
                setCount(count - 1)
            },1000)
          return () => clearInterval(viewDel);
        } else if(count === 0){
            dispatch(setDelTask(data.item.id))
            setDel(false)
            setCount(5)
        }
      }, [del,count])


        return (
        <View style={theme ? styles.rowBack : styles.rowBack2}>
            {!del ?
            <TouchableOpacity style={styles.btnDeleteBlock} onPress={() => {
                filterTask(data.item.id)
            }} >

                <View style={styles.btnBox}><Text style={styles.btnDelete}> Удалить</Text></View>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.btnDeleteBlock} onPress={notRemove} >

                <View style={styles.btnBox}>
                <Image
                                style={styles.tinyLogo}
                                source={loading}
                            />
                    <Text style={styles.btnDelete2}>
                      {count}</Text></View>
            </TouchableOpacity>

            }


        </View>
        )
      }

      const renderItem = (data,rowMap) => (
        <ItemTask data={data} rowMap={rowMap} />
      );

      const renderHiddenItem = (data,rowMap) => (
        <HiddenItem  data={data} rowMap={rowMap} />
      );

  return (
    <SafeAreaView style={theme ? styles.itemTask : styles.itemTask2}>
        <SwipeListView
        data={taskList}
        renderItem={renderItem}
        renderHiddenItem={ renderHiddenItem}
        rightOpenValue={-150}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    rowBack: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: Dimensions.get('window').width*.8,
        backgroundColor:COLORS.yellow,

    },
    rowBack2: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: Dimensions.get('window').width*.8,
        backgroundColor:COLORS.cyan,

    },
    btnBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor:'red',
        width: 150,
        height:50,
        borderRadius: 20,
    },

    btnDelete2:{
        position:'relative',
        left: -36,
        top: 1,
        color: COLORS.white,
    },
    btnDelete: {
        color: Colors.white,
        fontSize: 20,

    },
    btnDeleteBlock: {

    },
    itemTask: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: COLORS.yellow,
    },
    itemTask2: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: COLORS.cyan,
    },
    itemBlock: {
        marginTop: 15,
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'black',
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius:10,
        width: 300,
        paddingLeft:12,
    },
    itemIndex: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',

    },
    itemDescription: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
    },
    separatorLine: {
        height:1,
        backgroundColor: 'black',
    }

})
