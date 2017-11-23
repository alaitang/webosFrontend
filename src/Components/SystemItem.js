import React,{Component} from 'react';
import 'font-awesome/css/font-awesome.css';

class SystemItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      item : props
    }
  }

  processClassName(){
    return "";
  }

  handleClick(e){

  }

  render(){
    return (
      <div key={this.props.id} onDoubleClick={this.handleClick.bind(this)} className="mx-auto align-middle systemItem">
        <div> <i className={this.processClassName()}></i></div>
        <div className="align-middle"> {this.props.name} </div>
      </div>
    );
  }
}

export default SystemItem;
