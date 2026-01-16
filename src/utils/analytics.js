// Deferred Google Analytics loading - loads after page is interactive
let gaInitialized = false;
let gaModule = null;
let pendingPageViews = [];
let pendingEvents = [];

// Initialize Google Analytics with deferred loading
export const initGA = (measurementId) => {
  if (gaInitialized) return;

  // Use requestIdleCallback or setTimeout fallback to defer loading
  const deferLoad = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));

  deferLoad(() => {
    import('react-ga4').then((module) => {
      gaModule = module.default;
      gaModule.initialize(measurementId);
      gaInitialized = true;

      // Flush any pending page views
      pendingPageViews.forEach((path) => {
        gaModule.send({ hitType: 'pageview', page: path });
      });
      pendingPageViews = [];

      // Flush any pending events
      pendingEvents.forEach((event) => {
        gaModule.event(event);
      });
      pendingEvents = [];
    });
  });
};

// Track page views
export const logPageView = (path) => {
  if (gaInitialized && gaModule) {
    gaModule.send({ hitType: 'pageview', page: path });
  } else {
    pendingPageViews.push(path);
  }
};

// Track custom events
export const logEvent = (category, action, label = '') => {
  const event = {
    category: category,
    action: action,
    label: label,
  };

  if (gaInitialized && gaModule) {
    gaModule.event(event);
  } else {
    pendingEvents.push(event);
  }
};

// Track clicks
export const logClick = (elementName, location = '') => {
  logEvent('Click', elementName, location);
};
