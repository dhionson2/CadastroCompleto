import React, {useContext, useState}from "react";
import { Text, TextInput, View, Button } from 'react-native'
import UsersContext from "../context/UsersContext";
import useFormStyle from './useFormStyle'


export default ({route, navigation}) => {
    
    const [user,setUser] = useState(route.params ? route.params : {})
    const styles = useFormStyle();
    const [isFocused, setIsFocused] = useState(false);
    const { dispatch } = useContext(UsersContext)

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const inputStyles = [
        styles.input,
        isFocused ? styles.inputFocused : styles.inputUnfocused,
    ];


    return(
        <View style={styles.form}>
            <Text>Nome</Text>
            <TextInput
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={inputStyles}
                onChangeText={name => setUser({...user, name})}
                placeholder="Digite um nome"
                value={user.name}
            />
   
        
          <Text>Email</Text>
          <TextInput
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={inputStyles}
              onChangeText={email => setUser({...user, email})}
              placeholder="Digite um E-mail"
              value={user.email}
          />
        <Text>Url do Avatar</Text>
          <TextInput
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={inputStyles}
              onChangeText={avatarUrl => setUser({...user, avatarUrl})}
              placeholder="Digite um E-mail"
              value={user.avatarUrl}
          />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
      </View>
        
    )
}

