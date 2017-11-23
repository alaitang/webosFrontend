import React,{Component} from 'react';
import 'font-awesome/css/font-awesome.css';

class SystemItem extends Component{
  constructor(props){
    super(props);
  }

  processClassName(){
    return "";
  }

  render(){
    return (
      <div key={this.props.id} className="mx-auto align-middle systemItem">
        <div> <i className={this.processClassName()}></i></div>
        <div className="align-middle"> {this.props.name} </div>
      </div>
    );
  }
}

export default SystemItem;
