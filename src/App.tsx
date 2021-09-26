import { FC, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
const CardLinkPage = lazy(() => import('./pages/CardLinkPage' /* webpackChunkName: "cardlink" */));
const CreateLinkPage = lazy(() => import('./pages/CreateLinkPage' /* webpackChunkName: "createlink" */));
const Redirect = lazy(() => import('./pages/Redirect' /* webpackChunkName: "createlink" */));

const App: FC = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LinearProgress/>}>
        <Switch>
          <Route path='/card/:hash' exact component={CardLinkPage} />
          <Route path='/:shorthash' exact component={Redirect} />
          <Route path='/' exact component={CreateLinkPage} />
          <Route component={CreateLinkPage} />
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
