import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page/Page';
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.error());

const App = ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

export default App;
