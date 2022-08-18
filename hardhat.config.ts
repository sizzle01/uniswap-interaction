import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      forking: {
        url: "https://mainnet.infura.io/v3/03d788641a7647049042a8195da2a233", 
      }
    }
  }
};

export default config;
