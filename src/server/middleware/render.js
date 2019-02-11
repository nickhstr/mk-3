import { Readable } from 'stream';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { Html } from '../../components/Html';

export function render() {
  return async (ctx, next) => {
    ctx.type = 'text/html';
    ctx.body = new ReactPage(
      <Html
        app={ctx.app}
        title={ctx.title}
        description={ctx.description}
        path={ctx.path}
        assets={ctx.assets}
        store={ctx.store}
      />,
    );

    await next();
  };
}

class ReactPage extends Readable {
  constructor(component) {
    super();
    this.component = component;
    this.render();
  }

  _read() { }

  render() {
    console.time('renderToNodeStream'); // eslint-disable-line no-console
    this.push('<!doctype html>\n');
    const stream = renderToNodeStream(this.component);

    stream.setEncoding('utf8');
    stream.on('data', chunk => this.push(chunk));
    stream.on('end', () => {
      this.push(null);
      console.timeEnd('renderToNodeStream'); // eslint-disable-line no-console
    });
  }
}
