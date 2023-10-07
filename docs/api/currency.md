---
sidebar_position: 2
---

# Currencies

On this page you will find the documentation for the currencies API. There's 2 method to get currency data, first is get currency by contract address and second is list currencies.

## initiate the instance

> 💡 *You need to **[initiate the instance](/docs/intro)** first before you can use the sdk.*

## Get currency by contract address

Here's the sample of the code for get currency by contract address, this code is represent to get your currency by contract address.

```javascript
const myCurrencyContract = `0x19d723c4de507ced21377f1e22ae89a2ba795c97`
const myCurrencyData = await instance.apis.tenant.getCurrencyByContractAddress(myCurrencyContract)
```

## Get currency by id

Here's the sample of the code for get currency by id, this code is represent to get your currency by HYPR standardized id.

```javascript
const myCurrencyId = `<<currency_id>>`
const myCurrencyData = await instance.apis.tenant.getCryptoCurrencyById(myCurrencyId)
```

both methods will be return the `CryptoCurrency` data

### Returns

Here's the interface of CryptoCurrency data

| name | type | optional | default | description |
| - | - | - | - | - |
| contractAddress | `string` | `false` | `n/a` |  |
| network | `string` | `false` | `n/a` |  |
| transferData | `string \| undefined` | `true` | `n/a` |  |
