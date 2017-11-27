import React,{Component} from 'react';
import Folder from './Folder';
import File from './File';
import ContextMenu from './ContextMenu';
import Clock from './CustomTool/Clock';
import ContextMenuItem from '../Models/ContextMenuItem';
import uuidv4 from 'uuid/v4';

class Window extends Component{

    constructor(props){
      super(props);
      this.state = {
        data: {
          items:[],
          preObj:null
        }
      };
      this.handleMenuClick = this.handleMenuClick.bind(this);

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

  handleMenuClick(type){
    switch (type) {
      case "folder":
        var newItem = {
          "id":uuidv4(),
          "name":"folder_name",
          "type":"folder",
          "key":uuidv4(),
          "items":[],
          "isNew":true
        };
        var newList = [...this.state.data.items,newItem];
        this.setState({
          data:{
            items:newList
          }
        });
        break;
      case "file":
        var newItem = {
          "id":uuidv4(),
          "name":"file_name",
          "type":"file",
          "key":uuidv4(),
          "items":[],
          "isNew":true
        };
        var newList = [...this.state.data.items,newItem];
        this.setState({
          data:{
            items:newList
          }
        });
        break;
      default:

    }
    this.contextMenu.setActiveStatus(false);
  }

  render(){

    let currentItems = this.state.data.items.map((item)=>{
      if(item.type=="folder"){
        return (<Folder {...item} isNew={item.isNew} handleOpenFolder={this.handleOpenFolder.bind(this)}/>);
      }else{
        return (<File {...item} isNew={item.isNew} handleOpenFolder={this.handleOpenFolder.bind(this)}/>);
      }
    });

    const menuList = [
      new ContextMenuItem("Create Folder",()=>{this.handleMenuClick("folder")}),
      new ContextMenuItem("Create File",()=>{this.handleMenuClick("file")}),
      new ContextMenuItem("Refresh",()=>{this.handleMenuClick("refresh")})
    ];

    return (
      <div className="container Window" onContextMenu={this.handleContextMenu.bind(this)}>
        <ContextMenu ref={(menu)=>this.contextMenu = menu} menuItems={menuList} />
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
