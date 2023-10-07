# NFTItem

| name | type | optional | default | description |
| - | - | - | - | - |
| id | `string` | `false` | `n/a` | Standard HYPR NFT id |
| tokenId | `string` | `false` | `n/a` | The token id of NFT |
| metadata | `string \| undefined` | `true` | `n/a` | Metadata of NFT |
| name | `string \| undefined` | `true` | `n/a` | NFT Name |
| description | `string \| undefined` | `true` | `n/a` | NFT Description |
| image | `string \| undefined` | `true` | `n/a` | NFT Image (jpeg, jpg, png, GIF) |
| tokenUri | `string \| undefined` | `true` | `n/a` | Standard NFT Token URI |
| collectionId | `string` | `false` | `n/a` | Standard HYPR NFT collection id |
| owners | `string[]` | `false` | `n/a` | The owners (only 1 length if ERC721) |
| createdAt | `string` | `false` | `n/a` | NFT created date |
| updatedAt | `string` | `false` | `n/a` | NFT updated date |
| deletedAt | `string \| undefined` | `true` | `n/a` | NFT deleted date |
| collection | `Partial<Collection> \| undefined` | `true` | `n/a` | Collection data of it's NFT |
| activeTransactions | `ItemTransaction[] \| undefined` | `true` | `n/a` | NFT Transaction (should be show if you're includes `transactions`) |
| highestBidTransaction | `ItemTransaction \| undefined` | `true` | `n/a` | NFT transactions data on HYPR |
| lowestOfferTransaction | `ItemTransaction \| undefined` | `true` | `n/a` | NFT transactions data on HYPR |
