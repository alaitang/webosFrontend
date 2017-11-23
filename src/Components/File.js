import React,{Component} from 'react';
import SystemItem from './SystemItem';

class File extends SystemItem{

    processClassName(){
      return "fa font-3 fa-file";
    }
  render(){
    return super.render();
  }
}

export default File;
