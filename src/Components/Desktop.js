import React,{Component} from 'react';
import Window from './Window';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class Desktop extends Window{

    constructor(props){
      super(props);
      this.getResponse = this.getResponse.bind(this);
      this.handleResponse = this.handleResponse.bind(this);
      fetch('http://localhost:4000/userinfo?userid=5a1b6f1fe85669426c3e18aa')
      .then(this.getResponse)
      .then((data)=>{
        fetch('http://localhost:4000/folder?userid=5a1b6f1fe85669426c3e18aa')
        .then(this.getResponse)
        .then(this.handleResponse);
      });
    }

  getResponse(response){
    return response.json();
  }

  handleResponse(data){
    this.setState({
      data:{
          items:data.data,
          preObj:null
        },
        rootData:data.data
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
