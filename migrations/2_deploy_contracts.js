const AsciiPunksNames = artifacts.require("AsciiPunksNames");
const AsciiPunkFactory = artifacts.require('AsciiPunkFactory')
const AsciiPunks = artifacts.require('AsciiPunks')

module.exports = function(deployer) {
  deployer.deploy(AsciiPunkFactory);
  deployer.link(AsciiPunkFactory, [AsciiPunks, AsciiPunksNames]);
  deployer.deploy(AsciiPunks);
  deployer.link(AsciiPunks, AsciiPunksNames);
  deployer.deploy(AsciiPunksNames);
};
