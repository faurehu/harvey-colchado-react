import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = (measurementId) => {
  ReactGA.initialize(measurementId);
};

// Track page views
export const logPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

// Track custom events
export const logEvent = (category, action, label = '') => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

// Track clicks
export const logClick = (elementName, location = '') => {
  logEvent('Click', elementName, location);
};
