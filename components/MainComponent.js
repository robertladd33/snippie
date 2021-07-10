import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: ''
        };
    }

    render() {
        // return <Directory languages={this.state.languages} />;
        return (
            <View style={styles.container}>
                <Text>
                    Hello World!
                </Text>
            </View>
        )
    }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main;