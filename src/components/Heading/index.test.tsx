/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Heading, { TagEnum } from './index';

describe('Heading', () => {
  let container: Element | null = null;
  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container);
  });

  afterEach(() => {
    if (container != null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });
  it('render', () => {
    act(() => {
      render(<Heading tag={TagEnum.h1} />, container);
    });

    expect(container?.innerHTML).toBeDefined();
  });
  it('render with children', () => {
    act(() => {
      render(<Heading tag={TagEnum.h1}>Title</Heading>, container);
    });

    expect(container?.textContent).toBe('Title');
  });
  it('render with props tag={TagEnum.h1}', () => {
    act(() => {
      render(<Heading tag={TagEnum.h1}>Title</Heading>, container);
    });

    expect(container?.querySelector('h1')).not.toBeNull();
  });
});
