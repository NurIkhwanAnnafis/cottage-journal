import { Fragment, lazy } from "react";
import Login from '../components/Layout/Login'
import Main from '../components/Layout/Main'
import NotFound from '../components/Layout/NotFound'
import ContextProvider from "../containers/Main/Journal/context/ContextProvider";

const noContext = ({ children }) => <Fragment>{children}</Fragment>;

const menu = [
  {
    path: '/login',
    exact: true,
    page: ['Login'],
    component: lazy(() => import('../containers/Login')),
    layout: Login,
    role: [],
    context: noContext
  },
  {
    path: '/journal',
    page: ['Journal'],
    exact: true,
    component: lazy(() => import('../containers/Main/Journal')),
    layout: Main,
    role: [],
    context: ContextProvider
  },
  {
    path: '/journal/create',
    page: ['Journal', 'Create'],
    exact: true,
    component: lazy(() => import('../containers/Main/Journal/create')),
    layout: Main,
    role: [],
    context: ContextProvider
  },
  {
    path: '/journal/edit',
    page: ['Journal', 'Edit'],
    exact: true,
    component: lazy(() => import('../containers/Main/Journal/create')),
    layout: Main,
    role: [],
    context: ContextProvider
  },
  {
    path: '/journal/view',
    page: ['Journal', 'View'],
    exact: true,
    component: lazy(() => import('../containers/Main/Journal/create')),
    layout: Main,
    role: [],
    context: ContextProvider
  },
  {
    path: '/not-found',
    exact: true,
    page: ['Not Found'],
    component: lazy(() => import('../containers/NotFound')),
    layout: NotFound,
    role: [],
    context: noContext
  },
]

export { menu };