import { ethers } from "hardhat";

async function main() {

  const Storage = await ethers.getContractFactory("Storage");
  const storage = await Storage.deploy();


  console.log(`My contract was deployed to:  ${storage.address}`);

 await storage.store(10);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
