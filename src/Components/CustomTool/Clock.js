import React,{Component} from 'react';
import "./Clock.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class Clock extends Component{

  constructor(props){
    super(props);
    this.UpdateClock = this.UpdateClock.bind(this);
    this.state = {
      hourAngle : 0,
      minAngle : 0,
      secondAngle : 0
    };
    this.UpdateClock();
    setInterval(this.UpdateClock, 1000);
  }

  UpdateClock(){
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let second = now.getSeconds();

    let totalSecond = hour*60*60+min*60+second;

    let hourAngle = (totalSecond / 86400 * 720)-90;
    let minAngle = (min /60 * 360)-90;
    let secondAngle = (second / 60 * 360)-90;

    this.setState({
      hourAngle : hourAngle,
      minAngle : minAngle,
      secondAngle : secondAngle
    });
  }



  componentDidMount() {

  }

  componentWillUnmount() {

  }


  render(){


    return (
      <div className="Board">
        <div className="Center"></div>
          <hr className="Hand Minute" style={ {transform: "translate(100px,100px) rotate("+this.state.minAngle+"deg)"}}/>
          <hr className="Hand Second" style={ {transform: "translate(100px,100px) rotate("+this.state.secondAngle+"deg)"}}/>
          <hr className="Hand Hour" style={ {transform: "translate(100px,100px) rotate("+this.state.hourAngle+"deg)"}}/>
      </div>
    );
  }
}

export default Clock;
