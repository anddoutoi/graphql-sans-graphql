# femton67

This project was bootstrapped with [Create React App](./README-CRA.md).

Sample code used in Knowabunga 2018 presentation _GraphQL sans GraphQL_.


## TL;DR

Open a shell
```shell
yarn install
…
yarn run start-api-server
```
Open another shell and
```shell
yarn run start-app-server
```


## Dependencies

All numbers are minified + gzipped

```
- apollo-boost
- apollo-link-schema   4.6kB
- graphql             44.3kB
- graphql-tag          951B
- graphql-tools       23.1kB
- react-apollo         8.8kB
- recompose           10.4kB (optional)
```

##### apollo-boost
Contains most things needed to set up an Apollo Client.

##### [apollo-link-schema](https://www.apollographql.com/docs/link/links/schema.html)
Used to set up an execution environment so GraphQl operations can be
invoked on a provided schema. Can also be used for Server Side
Rendering and mocking.

##### graphql
Core package. Probably contains magic.

##### [graphql-tools](https://www.apollographql.com/docs/graphql-tools/)
Utility lib needed to work with GraphQL schemas. Contains
`makeExecutableSchema` that is used in this repo.

##### [graphql-tag](https://github.com/apollographql/graphql-tag)
Contains `gql` template literals tag that transforms human readable
GraphQL into AST that `graphql` HOC can consume.

##### [react-apollo](https://www.apollographql.com/docs/react/api/react-apollo.html)
Contains `graphql` HOC that invokes queries and provides out component
with data.

##### [recompose](https://github.com/acdlite/recompose)
Utility lib for working with Higher Order Components (HOCs). "Think of
it like lodash for React."

This is optional and not in any means associated with Apollo or GraphQL.

I'll add a separate README for recompose soon.
