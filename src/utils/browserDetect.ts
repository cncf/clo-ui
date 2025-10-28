import { UAParser } from 'ua-parser-js';

type BrowserInfo = {
  browser?: {
    name?: string;
  };
};

class BrowserDetect {
  private ua: BrowserInfo = {};

  public init() {
    if (typeof navigator === 'undefined') {
      this.ua = {};
      return;
    }
    try {
      const parser = new UAParser(navigator.userAgent);
      this.ua = parser.getResult();
    } catch {
      this.ua = {};
    }
  }

  public isSafari(): boolean {
    if (this.ua.browser && this.ua.browser.name && this.ua.browser.name.includes('Safari')) {
      return true;
    }
    return false;
  }
}

const browserDetect = new BrowserDetect();
browserDetect.init();
export default browserDetect;
