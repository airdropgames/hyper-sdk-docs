---
sidebar_position: 6
---

# Bid & Offers

## initiate the instance

> 💡 _You need to **[initiate the instance](/docs/intro)** first before you can use the sdk._

## create Bid and/or offers

you can create bid/offer transaction by calling the method `createBid` / `createOffer` depends on the kind of transaction that wants to be created

```
const hyprSDK = require('nft-marketplace-sdk');
const { NftMarketplaceSdk, BidOrder, OfferOrder, getUnixTimestampFromDateString } = hyprSDK;

// example function to create bid order
module.exports.createBidOrder = async (
  userEmail,
  userAddress,
  network,
  contractAddress,
  tokenId,
  price,
  startTimeUtc,
  endTimeUtc
) => {
    const item = {};
    item.contractAddress = contractAddress;
    item.network = convertSDKNetwork(network);
    item.tokenId = tokenId;
    item.value = '1';
    item.protocolType = 'ERC721';
    item.transferData = '0x';

    const currency = {};
    currency.network = convertSDKNetwork(network);
    currency.contractAddress = convertSDKCurrencyAddress(network); // to convert the network into standarized one
    currency.value = price;
    currency.transferData = '0x';

    startTimeUtc = getUnixTimestampFromDateString(startTimeUtc); // to convert the timestamp to UNIX timestamp
    endTimeUtc = getUnixTimestampFromDateString(endTimeUtc); // to convert the timestamp to UNIX timestamp

    let order = new BidOrder(hyperSDK, item, currency, userAddress, startTimeUtc, endTimeUtc); // use BidOrder or OfferOrder depends on the kind of transaction that wants to be created
    const { domain, valueTypes, values } = await order.buildEip712Data(); // this is to build the EIP712 data into standarized format
    const signature = await signTypedData(userEmail, domain, valueTypes, values);
    order.setSignature(signature); // this is to set the signature to the order
    const transaction = await order.submit(); // this is to submit the transaction to the SDK
    return transaction;
};
```

## Params

`BidOfferRequestParameters`
| Name | Type | Description |
| -------------- | ---------------------- | ----------------------------------------------------------------------- |
| userAddress | string | the address of the user that wants to create the bid/offer |
| item | ItemBidOfferParams | the item that wants to be sold |
| currency | CurrencyBidOfferParams | the currency that wants to be used to buy the item |
| startTimestamp | string | the start time of the bid/offer |
| endTimestamp | string | the end time of the bid/offer |
| networkSymbol | string | the network symbol of the network that wants to be used to buy the item |
| data | string | the data of the bid/offer |
| signature | string | the signature of the bid/offer |

`ItemBidOfferParams`
| Name | Type | Description |
| -------------- | ---------------------- | ----------------------------------------------------------------------- |
| value | string | the value of the item |
| transferData | string | the transfer data of the item |

and the rest of the params can be choosen from one of the following option

| Name | Type   | Description        |
| ---- | ------ | ------------------ |
| id   | string | the id of the item |

OR

| Name            | Type            | Description                                                  |
| --------------- | --------------- | ------------------------------------------------------------ |
| contractAddress | string          | the contract address of the item                             |
| tokenId         | string          | the token id of the item                                     |
| protocolType    | NftProtocolType | the protocol type of the item (either 'ERC721' or 'ERC1155') |
