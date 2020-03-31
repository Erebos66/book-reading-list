import { useEffect } from 'react';

export function useClickOutsideDiv(ref, action) {
  useEffect(() => {
    function listener(e) {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      action();
    }
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  });
}
