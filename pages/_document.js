import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles';
import theme from '../src/theme';
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

//import path from './mauticpath'

/* import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics' */

const analytics = Analytics({
  //app: 'awesome-app',
  plugins: [
    googleAnalytics({
      trackingId: 'UA-200891514-7'
    })
  ]
})

analytics.page();
analytics.track();



/* import mautic from 'mautic-tracking';
mautic.initialize('https://my.mautic-installation.com/mtc.js'); */

class MyDocument extends Document {
  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-200891514-7');
      `
    };
  }
  
  render() {
   return (
     
      <Html lang="en">
        <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        <link rel="icon" type="image/svg" href="/static/images/01 Home/01-header/Logo.png"></link>
        {/* <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet"></link> */}
        <link href='//fonts.googleapis.com/css?family=Montserrat:thin,extra-light,light,100,200,300,400,500,600,700,800' 
rel='stylesheet' type='text/css'></link>

        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','UA-200891514-7')`}}/>

        {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-200891514-7`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-200891514-7');
            });
          `,
            }}
          /> */}
      </Head>
      <body>
    
      <noscript dangerouslySetInnerHTML={{ __html: `https://www.googletagmanager.com/ns.html?id=GTM-KQPPX7Q"
    height="0" width="0" style="display:none;visibility:hidden"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}>
      </noscript>
     
      <Main />
     <NextScript />
      <style>
        @import url(https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,500|Oswald:200,300,400,500,700|Work+Sans:400,700&display=auto);
      </style>
     
      {/* We only want to add the scripts if in production */}
      {this.props.isProduction && (
        <React.Fragment>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXX-X"
          />
          {/* We call the function above to inject the contents of the script tag */}
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
        </React.Fragment>
        
 
      )}
      <script type="text/javascript" id="hs-script-loader" 
      async defer src="//js.hs-scripts.com/6022047.js"></script>
      
      </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const isProduction = process.env.NODE_ENV === 'production';

  return {
    ...initialProps,
    isProduction,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ),
  };
};

export default MyDocument;