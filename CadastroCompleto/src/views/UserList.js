import React, { useContext }from "react";
import { View, Text, FlatList, Alert } from 'react-native';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements';
import UsersContext from "../context/UsersContext";
import users from "../data/users";

export default function UserList(props) {
    const {state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user) {
      Alert.alert('Excluir Usuário', 'Deseja excluir usuário ?', [
        {
            text: 'Sim',
            onPress() {
              dispatch({
                  type:'deleteUser',
                  payload: user,

                })
            }
        },
        {
          text: 'Não'
        }
      ])
    }

    function getUserItem({ item: user }) {
      return (
        <ListItem
          key={user.id}
          onPress={() => props.navigation.navigate('UserForm', user)}
          bottomDivider
        >
          <Avatar source={{ uri: user.avatarUrl }} />
          <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button
                onPress={() => props.navigation.navigate('UserForm', user)}
                type="clear"
                icon={<Icon name="edit" size={25} color="orange" />}
              />
              <Button
                onPress={() => confirmUserDeletion(user)}
                type="clear"
                icon={<Icon name="delete" size={25} color="red" />}
              />
            </View>
          </ListItem.Content>
        </ListItem>
      );
    }
    
    

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
}
