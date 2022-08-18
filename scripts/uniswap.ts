import { ethers } from "hardhat";

async function main() {
    
  //interact with uniswap swapExactTokensForTokens and swapTokensForExactETH function
  //swap usdt to dai
  //TO-DO
  //erc20 token interface
  //Approve the uniswap contract
  //check balance of signer before swap
  //swap token caling the function
  //check balance after swap.
   
  const USDTAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
  const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const WETHAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
  const UNIRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  const amountOut = 2500;

  const helpers = require("@nomicfoundation/hardhat-network-helpers");
  const USDTHolder = "0xf584f8728b874a6a5c7a8d4d387c9aae9172d621";
  await helpers.impersonateAccount(USDTHolder);
  const impersonatedSigner = await ethers.getSigner(USDTHolder);

  //fetch USDT contract from IERC20
  const USDT = await ethers.getContractAt(
    "IERC20",
    USDTAddress,
    impersonatedSigner
  );

  //fetch DAI contract from IERC20
  const DAI = await ethers.getContractAt("IERC20", DAIAddress);
  
  const ROUTER = await ethers.getContractAt(
    "IUniswap",
    UNIRouter,
    impersonatedSigner
  ); 

  //Calling approve function on USDT 
  await USDT.approve(UNIRouter, amountOut);
      const usdtBal = await USDT.balanceOf(USDTHolder);
    const daiBal = await DAI.balanceOf(USDTHolder);

    console.log("balance before swap", usdtBal);

 
   
  await ROUTER.swapExactTokensForTokens(
    amountOut,
    3000,
    [USDTAddress, DAIAddress],
    USDTHolder,
    Math.floor(Date.now() / 1000) + (60 * 10)
  );
  
  
  const usdtBalAfter1 = await USDT.balanceOf(USDTHolder);
  const daiBalAfter1 = await DAI.balanceOf(USDTHolder);
  
  

  await USDT.approve(UNIRouter, amountOut);
  await ROUTER.swapTokensForExactETH(
    amountOut,
    2500,
    [USDTAddress, WETHAddress],
    USDTHolder,
    Math.floor(Date.now() / 1000) + (60 * 10)
  );
  
    //@ts-ignore
  const usdtBalAfter2 = await USDT.balanceOf(USDTHolder);
  const daiBalAfter2 = await DAI.balanceOf(USDTHolder);
   
  console.log("balance after swap Token to Token", usdtBalAfter1, daiBalAfter1);

  console.log("balance after swap Token to Exact Eth", usdtBalAfter2, daiBalAfter2);

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});