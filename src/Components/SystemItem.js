import React,{Component} from 'react';
import 'font-awesome/css/font-awesome.css';

class SystemItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      item : props,
      isNew : props.isNew
    }
  }

  processClassName(){
    return "";
  }

  handleClick(e){

  }

  completeName(e){
    var currentItem = Object.assign({}, this.state.item);
    currentItem.name = e.target.value;
    this.setState({
      item:currentItem,
      isNew:false
    });
  }

  render(){

    return (
      <div key={this.props.id} onDoubleClick={this.handleClick.bind(this)} className="mx-auto align-middle systemItem">
        <div> <i className={this.processClassName()}></i></div>
        { this.state.isNew ?
            <div className="align-middle"> <input onBlur={this.completeName.bind(this)} type="text" defaultValue={this.props.name}  /></div>
            :
            <div className="align-middle"> {this.state.item.name} </div>
        }
      </div>
    );
  }
}

export default SystemItem;
