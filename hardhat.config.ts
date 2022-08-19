import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config({ path: ".env" });

const ALCHEMY_RINKEBY_API_KEY_URL = process.env.ALCHEMY_RINKEBY_API_KEY_URL;

const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;

type HttpNetworkAccountsUserConfig = any;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {

    goerli: {
      url: ALCHEMY_RINKEBY_API_KEY_URL as HttpNetworkAccountsUserConfig | undefined,
      accounts: [ACCOUNT_PRIVATE_KEY] as HttpNetworkAccountsUserConfig | undefined,
    }
    // hardhat: {
    //   forking: {
    //     url: "https://mainnet.infura.io/v3/03d788641a7647049042a8195da2a233", 
    //   }
    // }
  }
};

export default config;
