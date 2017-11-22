import React,{Component} from 'react';

class SystemItem extends Component{

  render(){
    return (
      <div className={props.type}>
      <div> <img src={props.iconUrl} /> </div>
      <span> {props.name} </span>
      </div>
    );
  }
}

export default SystemItem;
