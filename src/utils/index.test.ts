import { expect, test } from 'vitest'

import * as utils from './index.js'

test('exports utils', () => {
  expect(Object.keys(utils)).toMatchInlineSnapshot(`
    [
      "buildRequest",
      "ccipRequest",
      "ccipFetch",
      "offchainLookup",
      "offchainLookupAbiItem",
      "offchainLookupSignature",
      "assertCurrentChain",
      "defineChain",
      "extractChain",
      "getChainContractAddress",
      "arrayRegex",
      "bytesRegex",
      "integerRegex",
      "getSocket",
      "rpc",
      "getHttpRpcClient",
      "getSocketRpcClient",
      "socketClientCache",
      "getWebSocketRpcClient",
      "stringify",
      "serializeTypedData",
      "validateTypedData",
      "decodeAbiParameters",
      "decodeErrorResult",
      "decodeEventLog",
      "decodeFunctionData",
      "decodeFunctionResult",
      "encodeAbiParameters",
      "encodeDeployData",
      "encodeErrorResult",
      "encodeEventTopics",
      "encodeFunctionData",
      "encodeFunctionResult",
      "parseEventLogs",
      "getAbiItem",
      "parseAbi",
      "parseAbiItem",
      "parseAbiParameter",
      "parseAbiParameters",
      "encodePacked",
      "formatAbiItemWithArgs",
      "formatAbiItem",
      "formatAbiParams",
      "parseAccount",
      "publicKeyToAddress",
      "getContractAddress",
      "getCreateAddress",
      "getCreate2Address",
      "getAddress",
      "isAddress",
      "isAddressEqual",
      "concat",
      "concatBytes",
      "concatHex",
      "isBytes",
      "isHex",
      "pad",
      "padBytes",
      "padHex",
      "size",
      "slice",
      "sliceBytes",
      "sliceHex",
      "trim",
      "defineBlock",
      "formatBlock",
      "defineTransaction",
      "formatTransaction",
      "transactionType",
      "formatLog",
      "defineTransactionReceipt",
      "defineTransactionRequest",
      "formatTransactionRequest",
      "extract",
      "toRlp",
      "boolToBytes",
      "toBytes",
      "hexToBytes",
      "numberToBytes",
      "stringToBytes",
      "boolToHex",
      "bytesToHex",
      "toHex",
      "numberToHex",
      "stringToHex",
      "bytesToBigInt",
      "bytesToBigint",
      "bytesToBool",
      "bytesToNumber",
      "bytesToString",
      "fromBytes",
      "fromHex",
      "hexToBool",
      "hexToBigInt",
      "hexToNumber",
      "hexToString",
      "fromRlp",
      "containsNodeError",
      "getNodeError",
      "getCallError",
      "getContractError",
      "getEstimateGasError",
      "getTransactionError",
      "getAction",
      "defineFormatter",
      "toEventSelector",
      "getEventSelector",
      "toFunctionSelector",
      "getFunctionSelector",
      "toEventSignature",
      "getEventSignature",
      "toFunctionSignature",
      "getFunctionSignature",
      "toEventHash",
      "toFunctionHash",
      "isHash",
      "keccak256",
      "sha256",
      "ripemd160",
      "hashTypedData",
      "recoverAddress",
      "recoverMessageAddress",
      "recoverPublicKey",
      "recoverTypedDataAddress",
      "verifyMessage",
      "verifyTypedData",
      "hashMessage",
      "parseErc6492Signature",
      "isErc6492Signature",
      "serializeErc6492Signature",
      "getSerializedTransactionType",
      "getTransactionType",
      "assertRequest",
      "assertTransactionEIP1559",
      "assertTransactionEIP2930",
      "assertTransactionLegacy",
      "parseTransaction",
      "serializeTransaction",
      "serializeAccessList",
      "formatEther",
      "formatGwei",
      "formatUnits",
      "parseUnits",
      "parseEther",
      "parseGwei",
      "createNonceManager",
      "nonceManager",
    ]
  `)
})