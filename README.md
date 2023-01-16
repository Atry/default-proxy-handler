<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [default-proxy-handler](#default-proxy-handler)
  - [Interfaces](#interfaces)
  - [Variables](#variables)
    - [DefaultProxyHandler](#defaultproxyhandler)
- [Interfaces](#interfaces-1)
  - [Interface: DefaultProxyHandler<T\>](#interface-defaultproxyhandlert%5C)
    - [Type parameters](#type-parameters)
    - [Hierarchy](#hierarchy)
    - [Methods](#methods)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

# default-proxy-handler

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

[build-img]:https://github.com/Atry/default-proxy-handler/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/Atry/default-proxy-handler/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/default-proxy-handler
[downloads-url]:https://www.npmtrends.com/default-proxy-handler
[npm-img]:https://img.shields.io/npm/v/default-proxy-handler
[npm-url]:https://www.npmjs.com/package/default-proxy-handler
[issues-img]:https://img.shields.io/github/issues/Atry/default-proxy-handler
[issues-url]:https://github.com/Atry/default-proxy-handler/issues
[codecov-img]:https://codecov.io/gh/Atry/default-proxy-handler/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/Atry/default-proxy-handler
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/

## Interfaces

- [DefaultProxyHandler](#interfacesdefaultproxyhandlermd)

## Variables

### DefaultProxyHandler

• `Const` **DefaultProxyHandler**: <T\>() => [`DefaultProxyHandler`](#defaultproxyhandler)<`T`\>

#### Type declaration

• **new DefaultProxyHandler**<`T`\>(): [`DefaultProxyHandler`](#defaultproxyhandler)<`T`\>

A class of proxy handler that forward all properties and methods to the
original target.

`DefaultProxyHandler` can be used as the super class for creating a more
sophisticated proxy handler.

**`Example`**

A proxy whose handler is an `DefaultProxyHandler` should be have the same
properties as the original object.

```typescript doctest
import { DefaultProxyHandler } from 'default-proxy-handler';
const helloWorld = { hello: 'world' };
const helloWorldProxy = new Proxy(helloWorld, new DefaultProxyHandler());
expect(helloWorldProxy.hello).toBe(helloWorld.hello);
```

**`Example`**

You can extend `DefaultProxyHandler` to change the behavior of the proxy.
```typescript doctest
import { DefaultProxyHandler } from 'default-proxy-handler';

class RepeatedProxyHandler extends DefaultProxyHandler<{ hello: string }> {
  override get(target: { hello: string; }, p: string | symbol, receiver: any) {
    const originalValue: unknown =
      super.get(target, p, receiver);
    return [ originalValue, originalValue ];
  }
}

const helloWorld = { hello: 'world' };
const helloWorldProxy = new Proxy(helloWorld, new RepeatedProxyHandler());
expect(helloWorldProxy.hello).toEqual(['world', 'world']);
```

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

##### Returns

[`DefaultProxyHandler`](#defaultproxyhandler)<`T`\>

#### Defined in

[index.ts:68](https://github.com/Atry/default-proxy-handler/blob/f11445b/src/index.ts#L68)

[index.ts:77](https://github.com/Atry/default-proxy-handler/blob/f11445b/src/index.ts#L77)

# Interfaces


<a name="interfacesdefaultproxyhandlermd"></a>

## Interface: DefaultProxyHandler<T\>

### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

### Hierarchy

- `ProxyHandler`<`T`\>

  ↳ **`DefaultProxyHandler`**

### Methods

#### apply

▸ **apply**(`target`, `thisArg`, `argArray`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `thisArg` | `any` |
| `argArray` | `any`[] |

##### Returns

`any`

##### Overrides

ProxyHandler.apply

##### Defined in

[index.ts:78](https://github.com/Atry/default-proxy-handler/blob/f11445b/src/index.ts#L78)

___

#### construct

▸ **construct**(`target`, `argArray`, `newTarget`): `object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `argArray` | `any`[] |
| `newTarget` | `Function` |

##### Returns

`object`

##### Overrides

ProxyHandler.construct

##### Defined in

[index.ts:80](https://github.com/Atry/default-proxy-handler/blob/f11445b/src/index.ts#L80)

___

#### defineProperty

▸ **defineProperty**(`target`, `property`, `attributes`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `property` | `string` \| `symbol` |
| `attributes` | `PropertyDescriptor` |

##### Returns

`boolean`

##### Overrides

ProxyHandler.defineProperty

##### Defined in

[index.ts:82](https://github.com/Atry/default-proxy-handler/blob/f11445b/src/index.ts#L82)

___

#### deleteProperty

▸ **deleteProperty**(`target`, `p`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `p` | `string` \| `symbol` |

##### Returns

`boolean`

##### Overrides

ProxyHandler.deleteProperty

##### Defined in

[index.ts:88](https://github.com/Atry/default-proxy-handler/blob/f11445b/src/index.ts#L88)

___

#### get

▸ **get**(`target`, `p`, `receiver`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `p` | `string` \| `symbol` |
| `receiver` | `any` |

##### Returns

`any`

##### Overrides

ProxyHandler.get

##### Defined in

[index.ts:90](https://github.com/Atry/default-proxy-handler/blob/f11445b/src/index.ts#L90)

___

#### getOwnPropertyDescriptor

▸ **getOwnPropertyDescriptor**(`target`, `p`): `undefined` \| `PropertyDescriptor`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `p` | `string` \| `symbol` |

##### Returns

`undefined` \| `PropertyDescriptor`

##### Overrides

ProxyHandler.getOwnPropertyDescriptor

##### Defined in

[index.ts:92](https://github.com/Atry/default-proxy-handler/blob/f11445b/src/index.ts#L92)

___

#### getPrototypeOf

▸ **getPrototypeOf**(`target`): ``null`` \| `object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

##### Returns

``null`` \| `object`

##### Overrides

ProxyHandler.getPrototypeOf

##### Defined in

[index.ts:97](https://github.com/Atry/default-proxy-handler/blob/f11445b/src/index.ts#L97)

___

#### has

▸ **has**(`target`, `p`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `p` | `string` \| `symbol` |

##### Returns

`boolean`

##### Overrides

ProxyHandler.has

##### Defined in

[index.ts:99](https://github.com/Atry/default-proxy-handler/blob/f11445b/src/index.ts#L99)

___

#### isExtensible

▸ **isExtensible**(`target`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

##### Returns

`boolean`

##### Overrides

ProxyHandler.isExtensible

##### Defined in

[index.ts:101](https://github.com/Atry/default-proxy-handler/blob/f11445b/src/index.ts#L101)

___

#### ownKeys

▸ **ownKeys**(`target`): `ArrayLike`<`string` \| `symbol`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

##### Returns

`ArrayLike`<`string` \| `symbol`\>

##### Overrides

ProxyHandler.ownKeys

##### Defined in

[index.ts:103](https://github.com/Atry/default-proxy-handler/blob/f11445b/src/index.ts#L103)

___

#### preventExtensions

▸ **preventExtensions**(`target`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

##### Returns

`boolean`

##### Overrides

ProxyHandler.preventExtensions

##### Defined in

[index.ts:105](https://github.com/Atry/default-proxy-handler/blob/f11445b/src/index.ts#L105)

___

#### set

▸ **set**(`target`, `p`, `newValue`, `receiver`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `p` | `string` \| `symbol` |
| `newValue` | `any` |
| `receiver` | `any` |

##### Returns

`boolean`

##### Overrides

ProxyHandler.set

##### Defined in

[index.ts:107](https://github.com/Atry/default-proxy-handler/blob/f11445b/src/index.ts#L107)

___

#### setPrototypeOf

▸ **setPrototypeOf**(`target`, `v`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `v` | ``null`` \| `object` |

##### Returns

`boolean`

##### Overrides

ProxyHandler.setPrototypeOf

##### Defined in

[index.ts:109](https://github.com/Atry/default-proxy-handler/blob/f11445b/src/index.ts#L109)
