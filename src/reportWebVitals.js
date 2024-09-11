// Function to report web vitals metrics
const reportWebVitals = onPerfEntry => {
  // Check if 'onPerfEntry' is a function before proceeding
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the 'web-vitals' library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call each of the web-vitals measurement functions and pass 'onPerfEntry' as a callback

      // CLS (Cumulative Layout Shift) measures visual stability. It quantifies how much
      // the content shifts around while the page is loading. High CLS indicates poor user experience
      // as users might find the content moving unexpectedly.
      // `getCLS` returns a function that measures CLS and invokes the callback with the result.
      getCLS(onPerfEntry);

      // FID (First Input Delay) measures the time between a user's first interaction (e.g., a click)
      // and the browser's response to that interaction. High FID indicates that the page is
      // not interactive quickly, which can affect user experience.
      // `getFID` returns a function that measures FID and invokes the callback with the result.
      getFID(onPerfEntry);

      // FCP (First Contentful Paint) measures the time it takes for the first piece of content
      // (text or image) to be painted on the screen. It helps measure how quickly users see something
      // on the page. Slow FCP can make the page feel unresponsive.
      // `getFCP` returns a function that measures FCP and invokes the callback with the result.
      getFCP(onPerfEntry);

      // LCP (Largest Contentful Paint) measures the time it takes for the largest content element
      // (e.g., a large image or block of text) to be rendered on the screen. It reflects how quickly
      // the main content of the page loads. High LCP values can indicate performance issues.
      // `getLCP` returns a function that measures LCP and invokes the callback with the result.
      getLCP(onPerfEntry);

      // TTFB (Time to First Byte) measures the time between the browser's request for a resource and
      // the reception of the first byte of the response. It helps in assessing server responsiveness.
      // High TTFB can indicate that the server is slow in processing requests.
      // `getTTFB` returns a function that measures TTFB and invokes the callback with the result.
      getTTFB(onPerfEntry);
    });
  }
};

// Export the function as the default export of this module
export default reportWebVitals;
