import browserDetect from './browserDetect';

export const scrollToTop = (position?: number): void => {
  const isSafari = browserDetect.isSafari();
  window.scrollTo({
    top: position || 0,
    // @ts-ignore: Unreachable code error
    behavior: isSafari ? 'instant' : 'auto',
  });
};
