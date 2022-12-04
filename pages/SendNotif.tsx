// sending push notifications to the student

import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";


const PK = 'c8c026f929b03d5d500b0c37cdfceea3f704288e1678896f24b9f473b0fd7a5d'; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async() => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `AIIMS Delhi`,
        body: `Congratulations you are eligible to get your SBT`
      },
      payload: {
        title: `[sdk-test] payload title`,
        body: `Congratulations you are eligible to get your SBT`,
        cta: '',
        img: ''
      },
      recipients: 'eip155:5:0xCF8D2Da12A032b3f3EaDC686AB18551D8fD6c132', // recipient address
      channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // your channel address
      env: 'staging'
    });
    
    // apiResponse?.status === 204, if sent successfully!
    console.log('API repsonse: ', apiResponse);
  } catch (err) {
    console.error('Error: ', err);
  }
}

sendNotification();

//
