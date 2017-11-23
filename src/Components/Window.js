import React,{Component} from 'react';
import Folder from './Folder';
import File from './File';

class Window extends Component{

    constructor(props){
      super(props);
      this.state = {
        data: {
          items:[],
          preObj:{}
        }
      };
    }

  handleOpenFolder(data){
      let preObj = this.state.data;
      this.setState({
        data:{
            items:data.items,
            preObj:preObj
          }
        });
  }

  goback(){
    this.setState({data:this.state.data.preObj});
  }

  render(){
    let currentItems = this.state.data.items.map((item)=>{
      if(item.type=="folder"){
        return (<Folder {...item} handleOpenFolder={this.handleOpenFolder.bind(this)}/>);
      }else{
        return (<File {...item} handleOpenFolder={this.handleOpenFolder.bind(this)}/>);
      }
    });
    return (
      <div className="container">
        <div className="toolbar">
          <i onClick={this.goback.bind(this)} class="fa fa-arrow-left font-2 btn" aria-hidden="true"></i>
          </div>
        <div>{currentItems}</div>
      </div>
    );
  }
}

export default Window;
