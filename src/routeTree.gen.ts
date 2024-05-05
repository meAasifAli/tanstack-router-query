/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as LayoutTodosImport } from './routes/_layout/todos'
import { Route as LayoutStatsImport } from './routes/_layout/stats'
import { Route as LayoutAdminImport } from './routes/_layout/Admin'
import { Route as LayoutPostsIndexImport } from './routes/_layout/posts/index'
import { Route as LayoutPostsPostIdImport } from './routes/_layout/posts/$postId'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutTodosRoute = LayoutTodosImport.update({
  path: '/todos',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutStatsRoute = LayoutStatsImport.update({
  path: '/stats',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAdminRoute = LayoutAdminImport.update({
  path: '/Admin',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutPostsIndexRoute = LayoutPostsIndexImport.update({
  path: '/posts/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutPostsPostIdRoute = LayoutPostsPostIdImport.update({
  path: '/posts/$postId',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/_layout/Admin': {
      preLoaderRoute: typeof LayoutAdminImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/stats': {
      preLoaderRoute: typeof LayoutStatsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/todos': {
      preLoaderRoute: typeof LayoutTodosImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/posts/$postId': {
      preLoaderRoute: typeof LayoutPostsPostIdImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/posts/': {
      preLoaderRoute: typeof LayoutPostsIndexImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  LayoutRoute.addChildren([
    LayoutAdminRoute,
    LayoutStatsRoute,
    LayoutTodosRoute,
    LayoutIndexRoute,
    LayoutPostsPostIdRoute,
    LayoutPostsIndexRoute,
  ]),
  LoginRoute,
])

/* prettier-ignore-end */
