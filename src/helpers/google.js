

export function trackPageView(url) {
  //console.log(`track ${url}`)
  try {
    window.gtag('config', 'UA-XXXXXXXX-X', {
      page_location: url
    });
  } catch (error) {
    // silences the error in dev mode
    // and/or if gtag fails to load
  }
}

export function trackEvent(action,category,label,value) {
  try {
    gtag('event', action, {
      'event_category': category,
      'event_label': label,
      'value': value
      });

    } catch (error) {
    // silences the error in dev mode
    // and/or if gtag fails to load
  }
}