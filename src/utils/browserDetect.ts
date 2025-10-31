class BrowserDetect {
  private safari = false;

  public init() {
    if (typeof navigator === 'undefined') {
      this.safari = false;
      return;
    }
    const userAgent = navigator.userAgent || '';
    const safariRegex = /^((?!chrome|crios|chromium|edg|edgios|opr|fxios|android).)*safari/i;
    const matchesRegex = safariRegex.test(userAgent);

    if (typeof window === 'undefined') {
      this.safari = matchesRegex;
      return;
    }

    const safariWindow = window as SafariWindow;
    const matchesDesktopCheck =
      typeof safariWindow.safari !== 'undefined' && typeof safariWindow.safari.pushNotification !== 'undefined';

    this.safari = matchesRegex || matchesDesktopCheck;
  }

  public isSafari(): boolean {
    return this.safari;
  }
}

type SafariWindow = Window & {
  safari?: {
    pushNotification?: unknown;
  };
};

const browserDetect = new BrowserDetect();
browserDetect.init();
export default browserDetect;
