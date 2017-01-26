import React, { Component } from 'react';

class PennyAuction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeLeft: this.props.item.seconds_left
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {this.tick()}, 1000);
  }

  render() {
    return ( 
      <div className="col-xs-3">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.item.title}</h3>
          </div>
          <div className="panel-body text-center">
            <img className="img-responsive" src={this.props.item.img} />
            <p>{this.state.timeLeft} Seconds Left!</p>
            <p className="text-success">{this.props.item.price}</p>
            <p>{this.props.item.username}</p>
            <button onClick={() => {this.bid()}} className="btn btn-warning center-block">Bid</button>
          </div>
        </div>
      </div>
    );
  }

  bid() {
    clearInterval(this.timer);
    this.setState({timeLeft: this.props.item.seconds_left});
    this.timer = setInterval(() => {this.tick()}, 1000);
  }

  tick() {
    if(this.state.timeLeft <= 0) {
      return;
    }

    this.setState({timeLeft: this.state.timeLeft - 1});
  }
}

export default PennyAuction;