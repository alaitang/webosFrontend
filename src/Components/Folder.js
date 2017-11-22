import React,{Component} from 'react';
import SystemItem from './SystemItem';

class Folder extends SystemItem{

  render(){
    let newProps = {...this.props};
    return super.render();
  }
}

export default Folder;
