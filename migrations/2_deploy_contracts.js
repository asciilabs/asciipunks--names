const AsciiPunksNames = artifacts.require('AsciiPunksNames')
const AsciiPunkFactory = artifacts.require('AsciiPunkFactory')
const AsciiPunks = artifacts.require('AsciiPunks')

// RINKEBY
const asciiPunkFactoryAddress = '0x324f2a0F784ED60a0Cf6EBE9D26dae6B321E2675'
const asciiPunksAddress = '0x5395919c59133499182cee2460B039Cd485c6221'

// MAINNET
// const asciiPunkFactoryAddress = '0x324f2a0F784ED60a0Cf6EBE9D26dae6B321E2675'
// const asciiPunksAddress = '0x5395919c59133499182cee2460B039Cd485c6221'

module.exports = async function (deployer) {
  AsciiPunkFactory.address = asciiPunkFactoryAddress
  AsciiPunks.address = asciiPunksAddress
  // deployer.deploy(AsciiPunks)
  // await deployer.link(AsciiPunkFactory, [AsciiPunks, AsciiPunksNames])
  await deployer.link(AsciiPunks, AsciiPunksNames)
  return deployer.deploy(AsciiPunksNames)
}
