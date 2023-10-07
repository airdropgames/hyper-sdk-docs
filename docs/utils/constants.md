---
sidebar_position: 2
---

# Constants

Here's the constants that you can use in the sdk, it will help you to avoid typo and make your code more readable.

## Networks

```javascript
import { NETWORKS, NETWORK_CONFIG } from '@hypr/sdk'

const myMumbaiNetwork = NETWORKS.MUMBAI
const myGoerliNetwork = NETWORKS.GOERLI

const myMumbaiNetworkConfig = NETWORK_CONFIG[myMumbaiNetwork]

const { chainId, marketplaceContractAddress } = myMumbaiNetworkConfig

console.log(chainId, marketplaceContractAddress)

```
