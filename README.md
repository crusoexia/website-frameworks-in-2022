# website-frameworks-in-2022
Inspect the website frameworks in 2022.

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
