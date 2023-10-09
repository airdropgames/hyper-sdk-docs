---
sidebar_position: 1
---

# Initialization

This sample initialize the sdk with the needed parameters. Please replace the parameters according to your need. We're also support both module and commonJS

## Module JS

If you're currently using Module JS, you can import the sdk like this:

```javascript
// module (export & import)
import hyprSDK from '@hyperplaza/sdk';
const { NftMarketplaceSdk } = hyprSDK;

const baseUrl = `<<HYPR_HTTP_URL>>`; // our base Url
const apiKey = '<<YOUR_API_KEY>>'; // you can get it from our team
const network = '<<YOUR_NETWORK>>';
const sdk = new NftMarketplaceSdk(baeUrl, apiKey, network, {
  enableLogging: true,
  // ... any config needed
});
```

## Common JS

If you're currently using Common JS, you can import the sdk like this:

```javascript
const { NftMarketplaceSdk } = require('@hyperplaza/sdk');

async function main() {
  const url = `<<HYPR_HTTP_URL>>`;
  const key = `<<YOUR_API_KEY>>`; // you can get it from our team
  const network = '<<YOUR_NETWORK>>';
  const hyperSdk = new NftMarketplaceSdk(url, key, network, {
    enableLogging: true,
    // ... any config needed
  });
}
```
