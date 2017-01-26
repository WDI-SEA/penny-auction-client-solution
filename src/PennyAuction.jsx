import React, { Component } from 'react';

class PennyAuction extends Component {
  render() {
    let timeLeft = null;
    if (this.props.item.seconds_left === 0) {
      timeLeft = <p>SOLD!!</p>
    } else {
      timeLeft = <p>{this.props.item.seconds_left} Seconds Left!</p>
    }
    
    return (
      <div className="col-xs-3">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.item.title}</h3>
          </div>
          <div className="panel-body text-center">
            <img className="img-responsive" src={this.props.item.img} />
            {timeLeft}
            <p className="text-success">{this.props.item.price}</p>
            <p>{this.props.item.username}</p>
            <button onClick={() => {this.bid()}} className="btn btn-warning center-block">Bid</button>
          </div>
        </div>
      </div>
    );
  }

  bid() {
    var json = JSON.stringify({username: 'geluso'});
    fetch(`http://pennyauctionserver.herokuapp.com/auctions/${this.props.item.id}`,
      {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: json
    })
    .then((response) => {
      return response.json();
    }).then((response) => {
      console.log("put response", response);
    }).catch((response) => {
      console.log('Error!', response);
    });
  }
}

export default PennyAuction;
