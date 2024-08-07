// eslint-disable-next-line @typescript-eslint/no-require-imports
const parser = require('ua-parser-js');

interface UserAgent {
  browser?: {
    name: string;
  };
}

class BrowserDetect {
  private ua: UserAgent = {};

  public init() {
    this.ua = parser(navigator.userAgent);
  }

  public isSafari(): boolean {
    if (this.ua.browser && this.ua.browser.name.includes('Safari')) {
      return true;
    }
    return false;
  }
}

const browserDetect = new BrowserDetect();
browserDetect.init();
export default browserDetect;
