//https://eth-goerli.g.alchemy.com/v2/jEsh9kdnltWFo2Lp6ztPVh_3o_aFmDyF

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks: {
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/jEsh9kdnltWFo2Lp6ztPVh_3o_aFmDyF',
      accounts :['72cadfa6490fa2702855b2d00d266bcba75b0c03b22596cfa1db16b449dad9ad']
    }
  }
}