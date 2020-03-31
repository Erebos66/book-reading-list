import { useLayoutEffect } from 'react';

export const useLockBg = () => {
  useLayoutEffect(() => {
    const div = document.createElement('div');
    div.id = 'lock-bg-layer';
    div.style.position = 'absolute';
    div.style.width = '100vw';
    div.style.height = '100vh';
    div.style.backgroundColor = '#000000cc';
    div.style.zIndex = '1';

    document.body.insertAdjacentElement('afterbegin', div);

    return () => {
      document.getElementById('lock-bg-layer').remove();
    };
  });
};
