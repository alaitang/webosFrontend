import React,{Component} from 'react';
import Window from './Window';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class Desktop extends Window{

  constructor(props){
    super(props);
    super.loadItems("");
  }

  render(){
    const obj = super.render();
    return (
      <div>
        <Header />
        {obj}
        <footer />
    </div>);
  }
}

export default Desktop;
