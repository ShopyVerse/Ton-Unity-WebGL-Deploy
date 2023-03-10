
const tonweb = new TonWeb();
const provider = window.ton;
// Use extension

const onTonReady = () => {
  console.log("tonready");

  if (!window.tonProtocolVersion || window.tonProtocolVersion < 1) {
    alert("Please update your TON Wallet Extension");
    return;
  } 
  console.log("isTonWallet=", provider.isTonWallet);

  provider.on("accountsChanged", function (accounts) {
    console.log("accountsChanged", accounts);
    const account = accounts[0];
    showAccountAddress(account);
  });  
};


function showAccountAddress(address) {
   console.log("my wallet address" , address);
  }


async function connect() {
      // Request account access if needed
      const accounts = await provider.send('ton_requestAccounts');
      // Accounts now exposed, use them
      const account = accounts[0] // We currently only ever provide a single account,
                                  // but the array gives us some room to grow.
      showAccountAddress(account);

      console.log(await provider.send('ton_requestWallets'));
  }


async function BuyWithTon() {
  try {
    console.log(await connect());
   console.log("buywihton console");
    // Send TONs
    provider.send("ton_sendTransaction", [
      {
        to: "EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N", // TON Foundation
        value: "10000", // 10000 nanotons = 0.00001 TONs
        data: "Shopyverse dapp purchase",
        dataType: "text",
      },
    ]);
  } catch (error) {
    // User denied or Error
    console.log(error);
  }
}

// Initialize TON

if (window.ton) {
  onTonReady();
} else {
  window.addEventListener("tonready", () => onTonReady(), false);
}