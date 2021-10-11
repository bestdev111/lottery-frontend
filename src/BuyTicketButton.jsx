import React from 'react'
import Web3 from 'web3'
import { Button } from '@pancakeswap-libs/uikit'

import { useToast } from './wallet/hooks'
import config from './config'
import ABI from './ABI'


const BuyTicketButton = (props) => {
  const { toastError } = useToast()
  
  // Ticket buying procedure
  const onBuyTicket = () => {
    if (window.ethereum) {

      // Connect web3 to the wallet
      const web3 = new Web3(window.ethereum)
      window.ethereum.enable().then(() => {
  
        // Initialize smart contract client
        const LotteryContract = new web3.eth.Contract(ABI, config.lotteryContractAddress)
        
        // Retrieve user account address
        web3.eth.getAccounts().then((accounts) => {

          // Retrieve current ticket price
          LotteryContract.methods.getTicketPrice().call((err, ticketPrice) => {
            if (err) {
              toastError('Error', err)
              return
            }
            
            // Buy the ticket
            LotteryContract.methods.buyTicket().send({ from:accounts[0], value:web3.utils.toHex(ticketPrice) })
          })
          
        }, () => {
          toastError('Wallet Error', 'There was an error retreiving user address')
        })
        
      }, () => {
        toastError('Wallet Error', 'There was an error initializing wallet provider')
      })
    } else toastError('Wallet Error', 'Please connect the wallet first')
  }
  
  return (
    <Button onClick={onBuyTicket} {...props}>
      Buy Ticket
    </Button>
  )
}

export default BuyTicketButton
