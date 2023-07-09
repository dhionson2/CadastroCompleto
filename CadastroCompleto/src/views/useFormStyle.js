import { StyleSheet } from 'react-native';

export default function useFormStyle() {
  const styles = StyleSheet.create({
    input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    margin: 10,
    padding: 10,
    },
    inputFocused: {
    backgroundColor: '#69d2e7',
    borderColor: 'blue',
    color: 'white',
    },
    inputUnfocused: {
    backgroundColor: '#e0e4cc',
    borderColor: 'gray',
    color: 'black',
    },
    form: {
        padding: 12,
    }
});

  return styles;
}
