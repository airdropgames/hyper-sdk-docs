---
sidebar_position: 3
---

# Get collections by contract address

## initiate the instance

> 💡 *You need to **[initiate the instance](/docs/intro)** first before you can use the sdk.*

## get collection by contract address

Here's the sample of the code for get listed HYPR collections, this code is represent to get your collection by contract address, this code also support includes transactions and items.

```javascript
const myCollectionContract = `0x19d723c4de507ced21377f1e22ae89a2ba795c97`
const myNetwork = `mumbai`

const data = await instance.apis.tenant
  .getCollectionByContractAddress(
    myNetwork, 
    myCollectionContract, 
    { includes: ['transactions', 'items'] }
  )
```

## Params

| name | type | optional | default | description |
| - | - | - | - | - |
| network | `string` | `false` | `undefined` | network name |
| contractAddress | `string` | `undefined` | `n/a` | contract address |
| params | `object` | `true` | `{}` | - |

## Returns

it return **[Collections](/docs/interfaces/collection)** data
