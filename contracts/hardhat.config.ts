import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
    solidity: "0.8.12",

    networks: {
        mumbai: {
            url: process.env.RPC_URL,
            accounts: [process.env.KEY as string],
        },
    },
};

export default config;
