import React from "react";
import { View, Text, FlatList, Image } from 'react-native';
import users from "../data/users";

export default props => {

    function getUserItem({ item: user }) {
     

        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <Image source={{ uri: user.avatarUrl }} style={{ width: 50, height: 50, borderRadius: 25 }} />
                <View style={{ marginLeft: 10 }}>
                    <Text>{user.name}</Text>
                    <Text>{user.email}</Text>
                </View>
            </View>
        );
    }

    return (
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    );
}
