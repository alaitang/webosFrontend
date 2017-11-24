import React,{Component} from 'react';
import Window from './Window';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          preObj:null
        },
        rootData:data.Desktop
      }
    );
  }

  render(){
    const obj = super.render();
    return (
      <div>
        <Header />
        {obj}
        <footer>
        </footer>
    </div>);
  }
}

export default Desktop;
