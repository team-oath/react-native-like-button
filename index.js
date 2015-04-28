
var React = require('react-native');

var { TouchableOpacity, Image, } = React;

class LikeButton extends React.Component {

  constructor(props){
    this.state = {
      liked: props.liked || false
    };
  }

  render(){
    if ( this.state.liked ) {
      return (
        <TouchableOpacity onPress={this._handlePress.bind(this)}>
          <Image
            source={{uri: 'http://i.imgur.com/SXHb8nG.png?1'}}
            style={{width:30, height:30}}
          />
        </TouchableOpacity>
      )

    } else {
      return (
        <TouchableOpacity onPress={this._handlePress.bind(this)}>
          <Image
            source={{uri: 'http://i.imgur.com/97rSbCf.png?1'}}
            style={{width:30, height:30}}
          />
        </TouchableOpacity>
      );
    }
  }

  _handlePress(){
    this.setState({
      liked: this.state.liked ? false : true
    });
  }

};

module.exports = LikeButton;
