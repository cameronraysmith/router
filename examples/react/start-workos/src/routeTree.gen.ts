/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root';
import { Route as LogoutImport } from './routes/logout';
import { Route as AuthenticatedImport } from './routes/_authenticated';
import { Route as IndexImport } from './routes/index';
import { Route as AuthenticatedAccountImport } from './routes/_authenticated/account';

// Create/Update Routes

const LogoutRoute = LogoutImport.update({
  id: '/logout',
  path: '/logout',
  getParentRoute: () => rootRoute,
} as any);

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

const AuthenticatedAccountRoute = AuthenticatedAccountImport.update({
  id: '/account',
  path: '/account',
  getParentRoute: () => AuthenticatedRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/_authenticated': {
      id: '/_authenticated';
      path: '';
      fullPath: '';
      preLoaderRoute: typeof AuthenticatedImport;
      parentRoute: typeof rootRoute;
    };
    '/logout': {
      id: '/logout';
      path: '/logout';
      fullPath: '/logout';
      preLoaderRoute: typeof LogoutImport;
      parentRoute: typeof rootRoute;
    };
    '/_authenticated/account': {
      id: '/_authenticated/account';
      path: '/account';
      fullPath: '/account';
      preLoaderRoute: typeof AuthenticatedAccountImport;
      parentRoute: typeof AuthenticatedImport;
    };
  }
}

// Create and export the route tree

interface AuthenticatedRouteChildren {
  AuthenticatedAccountRoute: typeof AuthenticatedAccountRoute;
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedAccountRoute: AuthenticatedAccountRoute,
};

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(AuthenticatedRouteChildren);

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute;
  '': typeof AuthenticatedRouteWithChildren;
  '/logout': typeof LogoutRoute;
  '/account': typeof AuthenticatedAccountRoute;
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute;
  '': typeof AuthenticatedRouteWithChildren;
  '/logout': typeof LogoutRoute;
  '/account': typeof AuthenticatedAccountRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  '/': typeof IndexRoute;
  '/_authenticated': typeof AuthenticatedRouteWithChildren;
  '/logout': typeof LogoutRoute;
  '/_authenticated/account': typeof AuthenticatedAccountRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: '/' | '' | '/logout' | '/account';
  fileRoutesByTo: FileRoutesByTo;
  to: '/' | '' | '/logout' | '/account';
  id: '__root__' | '/' | '/_authenticated' | '/logout' | '/_authenticated/account';
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren;
  LogoutRoute: typeof LogoutRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
  LogoutRoute: LogoutRoute,
};

export const routeTree = rootRoute._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authenticated",
        "/logout"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/account"
      ]
    },
    "/logout": {
      "filePath": "logout.tsx"
    },
    "/_authenticated/account": {
      "filePath": "_authenticated/account.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
