import React,{Component} from 'react';
import SystemItem from './SystemItem';

class File extends SystemItem{

    processClassName(){
      return "fa font-3 fa-file";
    }

    handleClick(e){
      alert("TODO: open file");
    }
    
    render(){
      return super.render();
    }
}

export default File;
