---
sidebar_position: 1
---

# Get NFT by token id

## initiate the instance

> 💡 *You need to **[initiate the instance](/docs/intro)** first before you can use the sdk.*

## get NFT by token id

```javascript
const myNFT = await instance.apis.tenant.getNftItemByTokenId('goerli', '0xdD7B235B7835072351B991f144eeFE92255236cc', '12', { includes: ['transactions'] })
```

## Params

| Name | Type | Description |
| --- | --- | --- |
| network | string | The network name |
| contractAddress | string | NFT Contract address |
| tokenId | string | Token id of you NFT |
| options | object | GetNftTokenIdOptions |

## GetNftTokenIdOptions

| Name | Type | Description |
| --- | --- | --- |
| includes | string[] | You can include the NFT transactions |
| context | `{ callerAddress: string? }` | If you want to get your transaction by your wallet address |

## Returns

### NftItem

it return **[NFTItem](/docs/interfaces/nft)** data
