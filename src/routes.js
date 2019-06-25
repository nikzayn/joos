import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Acquisition = React.lazy(() => import('./views/Dashboard/Acquisition'));
const Demographics = React.lazy(() => import('./views/Dashboard/Demographics'));
const ECommerce = React.lazy(() => import('./views/Dashboard/ECommerce'));
const MonthlyTable = React.lazy(() => import('./views/Dashboard/MonthlyTable'));
const WeeklyTable = React.lazy(() => import('./views/Dashboard/WeeklyTable'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Dashboard },
  { path: '/insights', name: 'Insights', component: Dashboard },
  { path: '/acquisition', name: 'Acquisition', component: Acquisition },
  { path: '/demographics', name: 'Demographics', component: Demographics },
  { path: '/ecommerce', name: 'ECommerce', component: ECommerce },
  { path: '/monthlytable', name: 'MonthlyTable', component: MonthlyTable },
  { path: '/weeklytable', name: 'WeeklyTable', component: WeeklyTable },
];

export default routes;
