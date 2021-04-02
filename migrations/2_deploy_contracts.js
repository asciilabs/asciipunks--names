const AsciiPunksNames = artifacts.require('AsciiPunksNames')
const AsciiPunkFactory = artifacts.require('AsciiPunkFactory')
const AsciiPunks = artifacts.require('AsciiPunks')

// RINKEBY
//const asciiPunkFactoryAddress = '0x324f2a0F784ED60a0Cf6EBE9D26dae6B321E2675'
//const asciiPunksAddress = '0x5395919c59133499182cee2460B039Cd485c6221'

// MAINNET
const asciiPunkFactoryAddress = '0x3c24A5DF4F69199962b163CB5762be1E8367CbEb'
const asciiPunksAddress = '0x5283Fc3a1Aac4DaC6B9581d3Ab65f4EE2f3dE7DC'

module.exports = async function (deployer, network, accounts) {
  AsciiPunkFactory.address = asciiPunkFactoryAddress
  AsciiPunks.address = asciiPunksAddress
  // deployer.deploy(AsciiPunks)
  // await deployer.link(AsciiPunkFactory, [AsciiPunks, AsciiPunksNames])
  await deployer.link(AsciiPunks, AsciiPunksNames)
  return deployer.deploy(AsciiPunksNames, asciiPunksAddress, {
    from: accounts[0],
    gas: 3000000,
    gasPrice: web3.utils.toWei(process.env.GAS_PRICE || '130', 'gwei'),
  })
}
