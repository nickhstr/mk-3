import { Readable } from 'stream';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { Html } from '../../components/Html';

export function render() {
  return async (ctx, next) => {
    const component = await renderComponent(ctx.app);

    ctx.type = 'text/html';
    ctx.body = new ReactPage(
      <Html
        app={component}
        title={ctx.title}
        description={ctx.description}
        path={ctx.path}
        assets={ctx.assets}
        moduleInterface={ctx.moduleInterface}
      />,
    );

    await next();
  };
}

export async function renderComponent(component) {
  return new Promise((resolve, reject) => {
    let stringComponent = '';
    const stream = renderToNodeStream(component);

    stream.on('data', (buffer) => {
      const chunk = buffer.toString('utf8');

      stringComponent += chunk;
    });

    stream.on('end', () => {
      resolve(stringComponent);
    });

    stream.on('error', (err) => {
      reject(err);
    });
  });
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
