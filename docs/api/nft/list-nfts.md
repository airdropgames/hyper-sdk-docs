---
sidebar_position: 3
---

# List NFTs

## initiate the instance

> 💡 *You need to **[initiate the instance](/docs/intro)** first before you can use the sdk.*

## get NFT list by options

```javascript
const nfts = await instance.apis.tenant
  .listNftItems({
    filter: {
      collectionContracts: [
        {
          contractAddress: '0x19d723c4de507ced21377f1e22ae89a2ba795c97',
          network: 'MUMBAI',
        },
      ],
    },
    includes: ['transactions'],
    limit: 10,
    page: 1,
  })
```

## Params

| Name | Type | Description |
| --- | --- | --- |
| options | **[ListNftItemsOptions](/docs/interfaces/list-nft-options)** | Option to list your NFTs |

## Returns

### ListItemsResponse

| name | type | optional | default | description |
| - | - | - | - | - |
| total | `number` | `false` | `n/a` | Total of NFTs |
| page | `number` | `false` | `n/a` | Current page |
| limit | `number` | `false` | `n/a` | Current limit |
| data | **[`NftItem[]`](/docs/interfaces/nft)** | `false` | `n/a` | NFT Response data |
