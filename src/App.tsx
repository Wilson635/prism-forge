import { Route, Router as WouterRouter, Switch } from 'wouter';
import { Home } from './pages/Home';
import { BlocksPage } from './pages/BlocksPage';
import { TemplatesPage } from './pages/TemplatesPage';
import { KitsPage } from './pages/KitsPage';

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/blocks" component={BlocksPage} />
    <Route path="/templates" component={TemplatesPage} />
    <Route path="/kits" component={KitsPage} />
    <Route component={Home} />
  </Switch>;
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Router />
    </WouterRouter>
  );
}