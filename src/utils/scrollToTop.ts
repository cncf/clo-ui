import browserDetect from './browserDetect';

export const scrollToTop = (position?: number): void => {
  const isSafari = browserDetect.isSafari();
  window.scrollTo({
    top: position || 0,
    behavior: isSafari ? 'instant' : 'auto',
  });
};
