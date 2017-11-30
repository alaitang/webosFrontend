import React,{Component} from 'react';
import SystemItem from './SystemItem';

class Folder extends SystemItem{

  processClassName(){
    return "fa fa-folder font-3";
  }

  handleClick(e){
    this.state.item.handleOpenFolder(this.state.item.id);
  }

  render(){
    return super.render();
  }
}

export default Folder;
