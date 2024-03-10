import React from 'react';
import provider from '../ethers';

class YieldOptimization extends React.Component {
  async componentDidMount() {
    const signer = provider.getSigner();
    const accounts = await signer.getAddress();
    console.log(accounts);
  }

  render() {
    return <div>Yield Protocol</div>;
  }
}

export default YieldOptimization;