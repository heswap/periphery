const HeswapRouter02 = artifacts.require("HeswapRouter02");
const FACTORY_ARTIFACT  = require('../../core/build/contracts/HeswapFactory.json');
module.exports = async function (deployer) {

  await deployer.deploy(HeswapRouter02, FACTORY_ARTIFACT.networks["97"].address, '0xae13d989dac2f0debff460ac112a837c89baa7cd');
  let instanceRouter = await HeswapRouter02.deployed();
};
