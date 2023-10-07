---
sidebar_position: 2
---

# Get NFT by id

## initiate the instance

> 💡 *You need to **[initiate the instance](/docs/intro)** first before you can use the sdk.*
  
## get NFT by id

```javascript
const data = await instance.apis.tenant.getNftById(`<<NFT_ID>>`)
```

## Params

| Name | Type | Description |
| --- | --- | --- |
| id | string | HYPR Standard NFT id |

## Returns

it return **[NFTItem](/docs/interfaces/nft)** data
