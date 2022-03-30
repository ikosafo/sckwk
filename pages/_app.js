import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Header from '../src/components/Header'
//import FinderHeader from '../src/components/FinderHeader'
import Footer from '../src/components/Footer'
import AppTheme from '../src/components/AppTheme'
import { withRouter, Router } from 'next/router'
import { trackPageView } from '../src/helpers/google';
/* import HttpsRedirect from 'react-https-redirect'; */
//import { useRouter } from 'next/router';
//import { appWithTranslation } from '../src/i18n'

// If we do not include this on top level, the partial load of pages with NextLink does not work
// TODO File Bug
// TODO Develop own Component for the SLider
//import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css"
import TagManager from 'react-gtm-module'


class MyApp extends App {
  
  componentDidMount() {
    console.log("Mount main app")
    Router.events.on('routeChangeComplete', url => {
      //document.getElementById(location.hash).scrollIntoView();
      trackPageView(url);
    });
    const handleRouteChange = url => {
      setTimeout( e => {
        if(url.indexOf('#') < 0){
          window.scrollTo(0, 0)
        }
      }, 100);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    Router.events.on('hashChangeComplete', handleRouteChange);
    
    TagManager.initialize({ gtmId: 'UA-200891514-7' });

  }
  render() {
 
    const { Component, pageProps, router } = this.props;
    console.log('The current router path', router.pathname);
    const getpath = router.pathname;
   
    let pathtitle;
    let str;
    if (getpath == '/') {
      pathtitle = 'Homepage';
    }
    else {
      str = getpath.substring(1);
      pathtitle = str.charAt(0).toUpperCase() + str.slice(1);
    }
    const path = `https://analytic.getinnotized.com/mtracking.gif?page_url=https%3A%2F%2Fscalework.com&page_title=${pathtitle}`;
    
    //  if (typeof window !== "undefined") {
    //   // browser code
    //   if (window.location.protocol == 'http:') {
    //     console.log("you are accessing us via "
    //       + "an insecure protocol (HTTP). "
    //       + "Redirecting you to HTTPS.");
          
    //     window.location.href =
    //       window.location.href.replace(
    //           'http:', 'https:');
    //   }
    //   else if
    //     (window.location.protocol == "https:") {
    //       console.log("you are accessing us via"
    //         + " our secure HTTPS protocol.");
    //     }
  
    // } 
    
  
     

    return (
        <>
          <Head>
            <title>SCALEWORK</title>
            <meta charSet="utf-8" />
            {/* Use minimum-scale=1 to enable GPU rasterization */}
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
            {/* PWA primary color */}
            <meta name="theme-color" content={theme.palette.primary.main} />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppTheme />
            <img src={path} style={{display:"none"}}/>
            {router.pathname !== '/finder' && <Header />}
            {/* {router.pathname == '/finder' && <FinderHeader />} */}
              <Component {...pageProps} />
            <Footer/>
          </ThemeProvider>
        </>
    );
  }
}
export default withRouter(MyApp);