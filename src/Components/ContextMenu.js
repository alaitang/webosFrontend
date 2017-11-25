import React,{Component} from 'react';
import '../ContextMenu.css';

class ContextMenu extends Component{

  constructor(props){
    super(props);

    this.state = {
      position: {...this.props.position},
      isActived:false
    };
    this.setActiveStatus = this.setActiveStatus.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  handleClick(e){
    if(!this.node.contains(e.target)){
        this.setActiveStatus(false);
    }
  }

  setPostion(top,left){
    this.setState({
      position: {
        top: top,
        left: left
      }
    });
  }

  setActiveStatus(active){
    this.setState({
      isActived:active
    });
  }


  render(){
    return (
      <div ref={(curr)=>this.node = curr}  className={"ContextMenu "+(this.state.isActived ? "active":"") } style={this.state.position}>
      <ul>
        <li>Create Folder</li>
          <li>Create File</li>
            <li>Refresh</li>
      </ul>
    </div>);
  }
}

export default ContextMenu;
