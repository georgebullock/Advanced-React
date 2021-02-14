import Page from '../components/Page/Page';

const App = ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

export default App;
