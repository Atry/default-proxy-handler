/* eslint-disable @typescript-eslint/ban-types */
/**
 * [![npm package][npm-img]][npm-url]
 * [![Build Status][build-img]][build-url]
 * [![Downloads][downloads-img]][downloads-url]
 * [![Issues][issues-img]][issues-url]
 * [![Code Coverage][codecov-img]][codecov-url]
 * [![Commitizen Friendly][commitizen-img]][commitizen-url]
 * [![Semantic Release][semantic-release-img]][semantic-release-url]
 *
 * [build-img]:https://github.com/Atry/default-proxy-handler/actions/workflows/release.yml/badge.svg
 * [build-url]:https://github.com/Atry/default-proxy-handler/actions/workflows/release.yml
 * [downloads-img]:https://img.shields.io/npm/dt/default-proxy-handler
 * [downloads-url]:https://www.npmtrends.com/default-proxy-handler
 * [npm-img]:https://img.shields.io/npm/v/default-proxy-handler
 * [npm-url]:https://www.npmjs.com/package/default-proxy-handler
 * [issues-img]:https://img.shields.io/github/issues/Atry/default-proxy-handler
 * [issues-url]:https://github.com/Atry/default-proxy-handler/issues
 * [codecov-img]:https://codecov.io/gh/Atry/default-proxy-handler/branch/main/graph/badge.svg
 * [codecov-url]:https://codecov.io/gh/Atry/default-proxy-handler
 * [semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
 * [semantic-release-url]:https://github.com/semantic-release/semantic-release
 * [commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
 * [commitizen-url]:http://commitizen.github.io/cz-cli/
 *
 * @module
 */

/**
 * A class of proxy handler that forward all properties and methods to the
 * original target.
 *
 * `DefaultProxyHandler` can be used as the super class for creating a more
 * sophisticated proxy handler.
 *
 * @example
 *
 * A proxy whose handler is an `DefaultProxyHandler` should have the same
 * properties as the original object.
 *
 * ```typescript doctest
 * import { DefaultProxyHandler } from 'default-proxy-handler';
 * const helloWorld = { hello: 'world' };
 * const helloWorldProxy = new Proxy(helloWorld, new DefaultProxyHandler());
 * expect(helloWorldProxy.hello).toBe(helloWorld.hello);
 * ```
 *
 * @example
 *
 * You can extend `DefaultProxyHandler` to change the behavior of the proxy.
 * ```typescript doctest
 * import { DefaultProxyHandler } from 'default-proxy-handler';
 *
 * class RepeatedProxyHandler extends DefaultProxyHandler<{ hello: string }> {
 *   override get(target: { hello: string; }, p: string | symbol, receiver: any) {
 *     const originalValue: unknown =
 *       super.get(target, p, receiver);
 *     return [ originalValue, originalValue ];
 *   }
 * }
 *
 * const helloWorld = { hello: 'world' };
 * const helloWorldProxy = new Proxy(helloWorld, new RepeatedProxyHandler());
 * expect(helloWorldProxy.hello).toEqual(['world', 'world']);
 * ```
 *
 */
export const DefaultProxyHandler: {
  new <T extends object>(): DefaultProxyHandler<T>;
} = (() => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function DefaultProxyHandler() {}
  DefaultProxyHandler.prototype = Reflect;
  return DefaultProxyHandler;
})() as any;

export interface DefaultProxyHandler<T extends object> extends ProxyHandler<T> {
  apply(target: T, thisArg: any, argArray: any[]): any;

  construct(target: T, argArray: any[], newTarget: Function): object;

  defineProperty(
    target: T,
    property: string | symbol,
    attributes: PropertyDescriptor
  ): boolean;

  deleteProperty(target: T, p: string | symbol): boolean;

  get(target: T, p: string | symbol, receiver: any): any;

  getOwnPropertyDescriptor(
    target: T,
    p: string | symbol
  ): PropertyDescriptor | undefined;

  getPrototypeOf(target: T): object | null;

  has(target: T, p: string | symbol): boolean;

  isExtensible(target: T): boolean;

  ownKeys(target: T): ArrayLike<string | symbol>;

  preventExtensions(target: T): boolean;

  set(target: T, p: string | symbol, newValue: any, receiver: any): boolean;

  setPrototypeOf(target: T, v: object | null): boolean;
}
