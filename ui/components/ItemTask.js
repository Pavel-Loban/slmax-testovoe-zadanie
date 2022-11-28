
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Dimensions
} from 'react-native';
import { useSelector } from 'react-redux';
import { COLORS } from '../../assets/styles';
import heart from '../../assets/images/rightg.png'



export const ItemTask = (props) => {


    const { data } = props

    const [modal, setModal] = React.useState(false);
    const openModal = modal ? styles.modal : styles.hide;

    const { taskList,theme } = useSelector((state) => state.task)

    const isVisible = (id) => {
        const itemActive = taskList.filter((item) => {
            if (item.id === id) {
                item.active = !item.active;
                setModal(modal => !modal)
            }

            return item
        })
        return itemActive
    }

    React.useEffect(() => {
    }, [modal])


    return (
        <SafeAreaView style={theme ?  styles.itemTask : styles.itemTask2} >
            <View style={styles.item}>
                <TouchableOpacity style={styles.itemBlock}
                    onPress={() => { isVisible(data.item.id) }}
                >
                    <View style={styles.itemTaskBlock}>
                        <View style={styles.infoTask}>
                            <Text style={styles.title} >
                                {data.item.title}
                            </Text>
                            <Text style={styles.itemDescription} >{data.item.text.slice(0, 20)}</Text>
                        </View>
                        <View style={styles.iconBlock}>

                            <Image
                                style={modal ? styles.tinyLogoOut : styles.tinyLogo}
                                source={heart}
                            />
                        </View>

                    </View>
                </TouchableOpacity>
                <View style={openModal}>
                    <Text style={styles.textDescription}>Дата заметки: {data.item.date}</Text>
                    <Text style={styles.textDescription}>Название: {data.item.title}</Text>
                    <Text style={styles.textDescription}>Описание: {data.item.text}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hide: {
        display: 'none',
    },
    item: {
        width: Dimensions.get('window').width * .8,
    },

    iconBlock: {
        paddingRight:20,
    },
    tinyLogo: {
        width: 20,
        height: 20,
        transform: [{ rotate: '90deg'}],
    },
    tinyLogoOut: {
        width: 20,
        height: 20,
        transform: [{ rotate: '-90deg'}],
    },
    infoTask: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    itemTask: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.yellow,
    },
    itemTask2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.cyan,
    },
    itemBlock: {
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemTaskBlock: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'black',
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 10,
        paddingLeft: 12,
        paddingTop: 10,
        paddingBottom: 10,
        width: Dimensions.get('window').width * .8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        borderRightWidth: 1,
        paddingRight: 10
    },
    textDescription: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        paddingRight: 10
    },
    itemDescription: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        paddingLeft: 10,
    }

})