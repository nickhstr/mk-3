/**
 * Standard interface for common module operations.
 */
export class ModuleInterface {
  constructor({ store }) {
    this.store = store;
    this.css = new Set();
  }

  getCss() {
    return [...this.css].join('');
  }

  /**
   * Gets the appropriate insertCss method for the environment.
   * @param  {Object} options
   * @param  {boolean} options.client Flag to indicate styles should be registered on the client
   * @return {Function}
   */
  getInsertCss = ({ client = false } = {}) => {
    if (typeof window === 'undefined') {
      return this._insertCssServer;
    }

    return client ? this._insertCssWeb : () => null;
  }

  _insertCssServer = (...styles) => {
    styles.forEach(style => this.css.add(style._getCss()));
  }

  _insertCssWeb = (...styles) => {
    const removeCss = styles.map(style => style._insertCss());

    return () => removeCss.forEach(dispose => dispose());
  }

  getState() {
    return this.store.getState();
  }

  getStore() {
    return this.store;
  }

  registerReducer(key, reducer) {
    this.store.registerReducer(key, reducer);
  }

  runSaga(...args) {
    this.store.runSaga(...args).toPromise();
  }

  select(selector) {
    return selector(this.store.getState());
  }
}
