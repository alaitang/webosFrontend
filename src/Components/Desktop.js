import React,{Component} from 'react';

class Desktop extends Component{

    constructor(props){
      super(props);
      this.state = {
        data:{
          name:"000"
        }
      };
      fetch('http://localhost:4000/user').then(this.getResponse.bind(this)).then(this.handleResponse.bind(this));
    }

  getResponse(response){
    let obj = response.json();

        console.log(obj);
    this.setState({data:{name:"110"}});
    return obj;
  }
    handleResponse(data){
        console.log(data.length);
        console.log(data.username);
            console.log(data);
        this.setState({data:{name:"111"}});
    }

  render(){

    return (
        <div>
        {this.state.data.name}
        </div>
    );
  }
}

export default Desktop;
