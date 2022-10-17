import React, { Component,Button,View,Text} from 'react'

class AlarmButton extends Component {

    constructor(props){
        super(props);
        this.state={
            buttonValue: 'Off'
        }
    }
  render() {
    return (
        <View>
            <Text>Hi</Text>
        </View>
        // <Button
        //     onPress='Ba'
        //     title={this.state.buttonValue}
        //     color="#841584"
        //     accessibilityLabel="Learn more about this purple button"
        // />
        
      
    )
  }
}


export default AlarmButton;

