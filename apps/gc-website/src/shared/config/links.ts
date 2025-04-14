import type { LinkDescriptor } from 'react-router';

export const defaultLinks: LinkDescriptor[] = [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous'
  },

  {
    rel: 'preload',
    href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap',
    as: 'style'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap'
  },

  // Regular
  {
    rel: 'preload',
    href: 'https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2',
    crossOrigin: 'anonymous',
    type: 'font/woff2',
    as: 'font'
  },

  // Bold
  {
    rel: 'preload',
    href: 'https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2',
    crossOrigin: 'anonymous',
    type: 'font/woff2',
    as: 'font'
  },

  // Medium
  {
    rel: 'preload',
    href: 'https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2',
    crossOrigin: 'anonymous',
    type: 'font/woff2',
    as: 'font'
  },

  { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }
];
