import React,{Component} from 'react';
import Window from './Window';

class Desktop extends Window{

    constructor(props){
      super(props);
      fetch('http://localhost:4000/user').then(this.getResponse.bind(this)).then(this.handleResponse.bind(this));
    }

  getResponse(response){
    return response.json();
  }

  handleResponse(data){
    this.setState({
      data:{
          items:data.Desktop,
          preObj:{}
        }
      });
  }

  render(){
    const obj = super.render();
    return obj;
  }
}

export default Desktop;
