import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Task = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.cicular}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',        
    },
    itemText:{
        maxWidth: '80%',
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: "#89CFF0",
        borderRadius: 5,
        marginRight: 15,
        opacity: .3
    },
    cicular:{
        width: 12,
        height: 12,
        borderColor: "#77C3EC",
        borderWidth: 2,
        borderRadius: 5
    },
});

export default Task;