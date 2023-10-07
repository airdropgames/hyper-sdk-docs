---
sidebar_position: 2
---

# List collections

## initiate the instance

> 💡 *You need to **[initiate the instance](/docs/intro)** first before you can use the sdk.*

## get collection by id

Here's the sample of the code for get listed HYPR collections

```javascript
const listOfMyCollections = await instance.apis.tenant.listCollections({
  ...params
})
```

You can also filter the collections by using params

```javascript
const listOfMyGoerliCollections = await instance.apis.tenant.
  listCollections({ filter: { collectionContracts: [{ network: 'goerli' }] }, includes: ['transactions'] })
// or 
const listOfMyMumbaiCollections = await instance.apis.tenant.
  listCollections({ filter: { collectionContracts: [{ network: 'mumbai' }] }, includes: ['transactions'] })
```

If you have a lot of collections, you can also limit the collections by using params

```javascript
const data = await instance.apis.tenant
  .listCollections({
    limit: 10,
    page: 0
  })
```

You could also search the collection like this:

```javascript
const data = await instance.apis.tenant
  .listCollections({ 
    search: 'my cool collections'
  })
```

Using sort

```javascript
const data = await instance.apis.tenant
  .listCollections({ 
    sort: ['createdAt:ASC', 'totalVolume:ASC']
  })
```

## Params

Please refer to **[this doc](/docs/interfaces/list-collection-requestparams)**

## Returns

it return **[Collections](/docs/interfaces/collection)**[] data
