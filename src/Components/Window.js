import React,{Component} from 'react';
import Folder from './Folder';
import File from './File';
import ContextMenu from './ContextMenu';
import Clock from './CustomTool/Clock';

class Window extends Component{

    constructor(props){
      super(props);
      this.state = {
        data: {
          items:[],
          preObj:null
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
    if (this.state.data.preObj) {
      this.setState({data:this.state.data.preObj});
    }
  }

  handleContextMenu(e){
    this.contextMenu.setPostion(e.pageY+"px",e.pageX+"px");
    this.contextMenu.setActiveStatus(true);
    e.preventDefault();
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
      <div className="container Window" onContextMenu={this.handleContextMenu.bind(this)}>
        <ContextMenu ref={(menu)=>this.contextMenu = menu} />
        <div className="toolbar">
          <i onClick={this.goback.bind(this)} className={"fa fa-arrow-left font-2 btn "+ (this.state.data.preObj == null ? 'disabled' : '')} aria-hidden="true"></i>
          </div>
        <div className="row">
            <div className="col-lg-10">{currentItems}</div>
            <div className="col-lg-2">
            <Clock />
            </div>
        </div>
      </div>
    );
  }
}

export default Window;
