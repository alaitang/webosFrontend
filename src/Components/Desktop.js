import React,{Component} from 'react';
import Folder from './Folder';
import File from './File';

class Desktop extends Component{

    constructor(props){
      super(props);
      this.state = {
        systemItems:[],
        data:[]
      };
      fetch('http://localhost:4000/user').then(this.getResponse.bind(this)).then(this.handleResponse.bind(this));
    }

  getResponse(response){
    return response.json();
  }

  handleResponse(data){
      let currentItems = data.Desktop.map((item)=>{
        if(item.type=="folder"){
          return (<Folder {...item}/>);
        }else{
          return (<File {...item}/>);
        }

      });
      console.log(data.Desktop);
      this.setState({systemItems:currentItems,data:data});
  }

  render(){

    return (
      <div className="container">
        <div>{this.state.systemItems}</div>
        <div className=""></div>
      </div>
    );
  }
}

export default Desktop;
