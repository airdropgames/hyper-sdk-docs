---
sidebar_position: 2
---

# Collection

| name | type | optional | default | description |
| - | - | - | - | - |
| id | `string` | `false` | `n/a` | Standard HYPR Collection id |
| name | `string` | `false` | `n/a` | Collection name |
| symbol | `string` | `true` | `n/a` | Collection symbol |
| contractAddress | `string` | `false` | `n/a` | Collection contract address |
| ownerAddress | `string` | `true` | `n/a` | Collection owner address |
| protocolType | `string` | `false` | `n/a` | Collection protocols (ERC721 or ERC1155) |
| displayName | `string` | `true` | `n/a` | Collection display name in HYPR |
| description | `string` | `true` | `n/a` | Collection description (based on metadata) |
| customAttributes | `Object` | `true` | `n/a` | - |
| displayImage | `string` | `true` | `n/a` | Collection image |
| coverImage | `string` | `true` | `n/a` | Collection cover image in HYPR |
| fetchCursor | `string` | `true` | `n/a` | Latest moralis fetched cursor for collection |
| networkSymbol | `string` | `false` | `n/a` | Collection network symbol |
| platformFeePermyriad | `string` | `true` | `n/a` | Collection platform fee from HYPR |
| royaltyPermyriad | `string` | `true` | `n/a` | Collection royalty from HYPR |
| royaltyReceiver | `string` | `true` | `n/a` | Collection royalty receiver (address) |
| totalVolume | `number` | `false` | `n/a` | Collection total volume |
| ownerCount | `number` | `false` | `n/a` | Collection owners count |
| isRetrofit | `null` | `false` | `n/a` | HYPR retrofit status |
| isLogical | `boolean` | `false` | `n/a` | - |
| listedAt | `Date` | `false` | `n/a` | HYPR Listed date |
| createdAt | `Date` | `false` | `n/a` | created date |
| updatedAt | `Date` | `false` | `n/a` | updated date |
| deletedAt | `Date` | `false` | `n/a` | deleted date |
| items | **[NftItem](/docs/interfaces/nft)**[] | `true` | `n/a` | The list of the NFTs based on the collection you get |
