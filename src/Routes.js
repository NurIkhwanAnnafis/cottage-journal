import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes as Switch, Route, useLocation } from 'react-router-dom';
import { menu } from './configs/routes';

const Index = () => {
  const global = useSelector((state) => state.global);
  const location = useLocation();

  useEffect(() => {
    const isRouteExist = menu.findIndex(x => x.path === location.pathname);
    if (location.pathname === '/') {
      window.location.href = '/login';
    } else if(isRouteExist === -1) {
      window.location.href = '/not-found';
    }
  },[location])

  return (
    <Switch>
      {menu.map(detail => (
        <Route
          key={detail.path}
          path={detail.path}
          element={
            <detail.layout {...global} breadcrumb={detail.page}>
              <Suspense fallback={null}>
                <detail.context>
                  <detail.component />
                </detail.context>
              </Suspense>
            </detail.layout>
          }
        />
      ))}
    </Switch>
  )
}

export default Index;