import React,{Component} from 'react';
import "./Clock.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class Number extends Component{

  render(){
    return (
      <div className={"Number "+this.props.NumberVal}>
        <div className="NumberBlock First"></div>
        <div className="NumberBlock Second"></div>
      </div>
    );
  }
}

export default Number;
