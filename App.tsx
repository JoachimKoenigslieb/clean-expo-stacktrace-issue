import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center',
  },
});

interface Comp {
	body: string,
}

const Component = ({ body, }: Comp) => {
	return (
		<Text>
			din mor g er du her {body}
		</Text>
	)
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Very cool app laver goe ting</Text>
	  {!Component()}
      <StatusBar style="auto" />
    </View>
  );
}
