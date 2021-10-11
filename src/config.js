let config = {

    // https://data-seed-prebsc-1-s1.binance.org:8545 for testnet
    // https://bsc-dataseed.binance.org/ for mainnet
    rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    
    // 97 for testnet, 56 for mainnet
    chainId: 97,

    // https://testnet.bscscan.com/ for testnet
    // https://bscscan.com/ for mainnet
    blockExplorerUrl: 'https://testnet.bscscan.com/',

    // Lottery smart contract address
    lotteryContractAddress: '0x68420eDf30844BF1C5D17b578c311A188b6AF018'
}
  
module.exports = config
  