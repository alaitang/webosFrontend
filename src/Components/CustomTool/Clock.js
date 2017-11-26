import React,{Component} from 'react';
import "./Clock.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Number from "./Number";

class Clock extends Component{

  constructor(props){
    super(props);
    this.UpdateClock = this.UpdateClock.bind(this);
    this.state = {
      hourAngle : 0,
      minuteAngle : 0,
      secondAngle : 0,
      hourNumber1:0,
      hourNumber2:0,
      minuteNumber1:0,
      minuteNumber2:0,
      secondNumber1:0,
      secondNumber2:0
    };
    this.mapping = ["Zero","One","Two","Three","Four","Five","Six","Seven","Night","Nine"];
    this.UpdateClock();
    setInterval(this.UpdateClock, 1000);
  }

  UpdateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let totalSecond = hour*60*60+minute*60+second;

    let hourAngle = (totalSecond / 86400 * 720)-90;
    let minuteAngle = (minute /60 * 360)-90;
    let secondAngle = (second / 60 * 360)-90;

    this.setState({
      hourAngle : hourAngle,
      minuteAngle : minuteAngle,
      secondAngle : secondAngle,
      hourNumber1:Math.floor(hour/10),
      hourNumber2:hour%10,
      minuteNumber1:Math.floor(minute/10),
      minuteNumber2:minute%10,
      secondNumber1:Math.floor(second/10),
      secondNumber2:second%10
    });
  }



  componentDidMount() {

  }

  componentWillUnmount() {

  }


  render(){


    return (
      <div>
      <div className="Board">
        <div className="Center"></div>
          <hr className="Hand Minute" style={ {transform: "translate(100px,100px) rotate("+this.state.minuteAngle+"deg)"}}/>
          <hr className="Hand Second" style={ {transform: "translate(100px,100px) rotate("+this.state.secondAngle+"deg)"}}/>
          <hr className="Hand Hour" style={ {transform: "translate(100px,100px) rotate("+this.state.hourAngle+"deg)"}}/>
      </div>
      <div className="NumberBoard">
        <Number NumberVal={this.mapping[this.state.hourNumber1]}/>
          <Number NumberVal={this.mapping[this.state.hourNumber2]} />
            <div className="dotSplit">
              <h3><stong>:</stong></h3>
            </div>
            <Number  NumberVal={this.mapping[this.state.minuteNumber1]}/>
                <Number  NumberVal={this.mapping[this.state.minuteNumber2]} />
                  <div className="col-md-1 dotSplit">
                    <h3><stong>:</stong></h3>
                  </div>
                    <Number  NumberVal={this.mapping[this.state.secondNumber1]}  />
                      <Number  NumberVal={this.mapping[this.state.secondNumber2]} />

        </div>

      </div>
    );
  }
}

export default Clock;
