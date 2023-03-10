const marketplaceAbi = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        { indexed: false, internalType: "bool", name: "approved", type: "bool" },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "seller",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
        { indexed: false, internalType: "bool", name: "sold", type: "bool" },
      ],
      name: "MarketItemCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: "address", name: "from", type: "address" },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "createMarketSale",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "string", name: "tokenURI", type: "string" },
        { internalType: "uint256", name: "price", type: "uint256" },
      ],
      name: "createToken",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "fetchItemsListed",
      outputs: [
        {
          components: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "address payable", name: "seller", type: "address" },
            { internalType: "address payable", name: "owner", type: "address" },
            { internalType: "uint256", name: "price", type: "uint256" },
            { internalType: "bool", name: "sold", type: "bool" },
          ],
          internalType: "struct NFTMarketplace.MarketItem[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "fetchMarketItems",
      outputs: [
        {
          components: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "address payable", name: "seller", type: "address" },
            { internalType: "address payable", name: "owner", type: "address" },
            { internalType: "uint256", name: "price", type: "uint256" },
            { internalType: "bool", name: "sold", type: "bool" },
          ],
          internalType: "struct NFTMarketplace.MarketItem[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "fetchMyNFTs",
      outputs: [
        {
          components: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "address payable", name: "seller", type: "address" },
            { internalType: "address payable", name: "owner", type: "address" },
            { internalType: "uint256", name: "price", type: "uint256" },
            { internalType: "bool", name: "sold", type: "bool" },
          ],
          internalType: "struct NFTMarketplace.MarketItem[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "getApproved",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getListingPrice",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "operator", type: "address" },
      ],
      name: "isApprovedForAll",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "ownerOf",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "tokenId", type: "uint256" },
        { internalType: "uint256", name: "price", type: "uint256" },
      ],
      name: "resellToken",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
        { internalType: "bytes", name: "data", type: "bytes" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "operator", type: "address" },
        { internalType: "bool", name: "approved", type: "bool" },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
      name: "supportsInterface",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "tokenURI",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_listingPrice", type: "uint256" },
      ],
      name: "updateListingPrice",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ];
  
  var web3 = undefined;
  var address = undefined;
  var mpContract = undefined;
  var listingPrice = undefined;
  
  const connectWallet = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        /* request wallet connection */
        await window.ethereum.request({ method: "eth_requestAccounts" });
        /* create web3 instance */
        web3 = new Web3(window.ethereum);
        /* get list of accounts */
        const accounts = await web3.eth.getAccounts();
  
        address = accounts[0];
  
        /* create local contract copy */
        mpContract = new web3.eth.Contract(
          marketplaceAbi,
          "0x04b4aB999C513b4e72575A481fbB9A11Ab9Bda6e"
        );
        return true;
      } catch (err) {
        console.log(err);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };
  
  /**
   * It creates a market sale for a token
   * @param tokenId - The token ID of the token you want to sell.
   * @returns A result as boolean value.
   */
  const createMarketSale = async (tokenId) => {
    const isSuccess = await connectWallet();
    if (!isSuccess) return false;
  
  
    try {
      const res = await mpContract.methods
        .createMarketSale(tokenId)
        .send({ from: address, value: "10000" });
      console.log(res);
  
      GlobalUnityInstance.SendMessage("Api", "ReceiveBuyNFT");
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  
  /**
   * It fetches the items listed on the marketplace
   * @param from - The address of the account that is calling the function.
   * @returns a result as boolean.
   */
  const fetchItemsListed = async (from) => {
    
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      web3 = new Web3(window.ethereum);
      mpContract = new web3.eth.Contract(
        marketplaceAbi,
        "0x04b4aB999C513b4e72575A481fbB9A11Ab9Bda6e"
      );
  
    } else { return; }
  
    try {
      const res = await mpContract.methods.fetchItemsListed().call({ from });
  
      console.log(res);
  
      let tokensStr = "";
      res.forEach((item) => (tokensStr += item[0] + ","));
      tokensStr = tokensStr.substring(0, tokensStr.length - 1);
  
      GlobalUnityInstance.SendMessage('Api', 'ReceiveFetchItemsListed', from + ":" + tokensStr);
      return true;
  
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  
  