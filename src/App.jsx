import React, { Component } from 'react';

import PennyAuction from './PennyAuction';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
    
    this.update();
    setInterval(() => this.update(), 1000);
  }

  update() {
    fetch('https://pennyauctionserver.herokuapp.com/auctions')
    .then((response) => {
      return response.json();
    }).then((response) => {
      this.setState({items: response});
    }).catch((response) => {
      console.log('Error!', response);
    });
  }

  render() {
    let pennyItems = this.state.items.map((item, index) => {
      return <PennyAuction key={index} item={item} index={index} />
    });

    return (
      <div className="container">
        <div className="row">
          {pennyItems}
        </div>
      </div>
    );
  }
}

export default App;
