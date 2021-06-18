const HeswapRouter02 = artifacts.require("HeswapRouter02");
const FACTORY_ARTIFACT  = require('../../core/build/contracts/HeswapFactory.json');
module.exports = async function (deployer) {

  await deployer.deploy(HeswapRouter02, '0x376dD065bA81EB8746dc4D904f153b2AA62B812E', '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd');
  let instanceRouter = await HeswapRouter02.deployed();
};
