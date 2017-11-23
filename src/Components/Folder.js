import React,{Component} from 'react';
import SystemItem from './SystemItem';

class Folder extends SystemItem{

  constructor(props){
    super(props);
  }

  processClassName(){
    return "fa fa-folder font-3";
  }

  render(){
    console.log(this.iconMapping);
    return super.render();
  }
}

export default Folder;
