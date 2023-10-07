---
sidebar_position: 1
---

# Get collection by id

## initiate the instance

> 💡 *You need to **[initiate the instance](/docs/intro)** first before you can use the sdk.*

## get collection by id

You can get your collection by id, it also support includes transactions and collection id is standardized by HYPR

```javascript
const collection = await instance.apis.tenant.getCollectionById(`<<COLLECTION_ID>>`, ['transactions'])
```

## Params

| Name | Type | Description |
| --- | --- | --- |
| id | string | HYPR Standard NFT id |

## Returns

it return **[Collection](/docs/interfaces/collection)** data
