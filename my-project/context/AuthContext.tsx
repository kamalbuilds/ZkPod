import React,{createContext,useState} from 'react'
import { ethers } from "ethers";



export const AuthContext = createContext(null);

const AuthContextProvider = ({children}) => {
    const [err,setErr]=useState(false);
    const [address,setAddress]=useState("");
    const [userDetails,setUserDetails]=useState(null);
    const [loading,setLoading]=useState(false);
    
    function web3_check_metamask() {
        if (!window.ethereum) {
            console.error('It seems that the MetaMask extension is not detected. Please install MetaMask first.');
            alert('It seems that the MetaMask extension is not detected. Please install MetaMask first.');
            return false;
        }else{
            console.log('MetaMask extension has been detected!!');
            return true;
        }
    } 
    async function login() {
        try {
            setLoading(true);
            if ( web3_check_metamask() ) {
                console.log('Initate Login Process');
    
                // Get the Ethereum provider
                const provider = new ethers.providers.Web3Provider(window.ethereum);                    
                // Get Ethereum accounts
                await provider.send("eth_requestAccounts", []);
                console.log("Connected!!"); 
                // Get the User Ethereum address
                const address = await provider.getSigner().getAddress();
                console.log(address);                    
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setErr(true);
        }
    }
    
    const contextValue={
        userDetails,
        login,
        address
    }
  return (
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider