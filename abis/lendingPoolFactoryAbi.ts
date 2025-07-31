export const lendingPoolFactoryAbi = [
    {
      inputs: [
        { internalType: "address", name: "_isHealthy", type: "address" },
        {
          internalType: "address",
          name: "_lendingPoolDeployer",
          type: "address",
        },
        { internalType: "address", name: "_protocol", type: "address" },
        { internalType: "address", name: "_helper", type: "address" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "chainId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "basicTokenSender",
          type: "address",
        },
      ],
      name: "BasicTokenSenderAdded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "collateralToken",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "borrowToken",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "lendingPool",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "ltv",
          type: "uint256",
        },
      ],
      name: "LendingPoolCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "dataStream",
          type: "address",
        },
      ],
      name: "TokenDataStreamAdded",
      type: "event",
    },
    {
      inputs: [
        { internalType: "address", name: "_token", type: "address" },
        { internalType: "address", name: "_dataStream", type: "address" },
      ],
      name: "addTokenDataStream",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "basicTokenSender",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "collateralToken", type: "address" },
        { internalType: "address", name: "borrowToken", type: "address" },
        { internalType: "uint256", name: "ltv", type: "uint256" },
      ],
      name: "createLendingPool",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "helper",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "isHealthy",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "lendingPoolDeployer",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "poolCount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "pools",
      outputs: [
        { internalType: "address", name: "collateralToken", type: "address" },
        { internalType: "address", name: "borrowToken", type: "address" },
        {
          internalType: "address",
          name: "lendingPoolAddress",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "protocol",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "tokenDataStream",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    }
] as const;
