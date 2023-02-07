# website-frameworks-in-2022
Inspect the fullstack website meta-frameworks in 2022.

## Trends

In recent years the trend of web is moving more and more javascript from the client-side back to the server-side to provide better performance with no compromise to the user experience. Thanks to the client-side UI frameworks provided the SSR ability which makes this happen.

## Some consideration:

### SSG(Server-Side Generation) with data

A question around _SSG with data_: __When to do the SSG build?__

This question relates to below challenges:
* How to distiguish different environments' data when do the SSG build?
* The _build environment_ have to access the production env so it can prepare the pages for production release.
* User specific data.

> Per **nextjs**'s [document](https://nextjs.org/docs/deployment#nodejs-server), seems it recommends to run the `build` on the host server.

### Does the client side state management(redux) is still needed?

It's still depends on the actual situation. Though the *Per-page data governance* makes it less necessary of centralized-client-side state management. But it is still requires the client to host the session data in order to keep the Server-Side stateless.

## Framework Metrics

### Supported UI frameworks

* __nextjs__: React

### Pattern invasive

* __nextjs__: reasonable; acceptable; low.

### Features

* __nextjs__: CLR; SSR; SSG; Hydration; Interactive resource loading; Built-in webserver.

### Performance

### Deployment
