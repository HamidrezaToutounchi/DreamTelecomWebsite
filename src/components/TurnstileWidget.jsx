import React, { useEffect, useRef, useImperativeHandle } from 'react';

const TURNSTILE_SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
export const TURNSTILE_SITE_KEY = (import.meta.env.VITE_TURNSTILE_SITE_KEY || '').trim();

/**
 * Reusable Cloudflare Turnstile Widget Component
 * - Explicit rendering
 * - Action: 'lead_form'
 * - Fail-open 10s fallback so real customers are never blocked if Cloudflare is down
 * - Imperative reset() handle
 */
const TurnstileWidget = React.forwardRef(function TurnstileWidget(
  { onTokenChange, onReadyChange },
  ref
) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        try {
          window.turnstile.reset(widgetIdRef.current);
          onTokenChange?.('');
        } catch (_err) {
          // ignore
        }
      }
    }
  }));

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) {
      onReadyChange?.(true);
      return undefined;
    }

    let isMounted = true;
    onTokenChange?.('');
    onReadyChange?.(false);

    // 10-second fail-open fallback
    const fallbackTimer = setTimeout(() => {
      if (isMounted) {
        onReadyChange?.(true);
      }
    }, 10000);

    const renderWidget = () => {
      if (!isMounted || !containerRef.current || !window.turnstile) return;
      try {
        if (widgetIdRef.current !== null) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          action: 'lead_form',
          appearance: 'interaction-only',
          language: 'tr',
          callback: (token) => {
            if (!isMounted) return;
            clearTimeout(fallbackTimer);
            onTokenChange?.(token || '');
            onReadyChange?.(true);
          },
          'expired-callback': () => {
            if (!isMounted) return;
            onTokenChange?.('');
          },
          'error-callback': () => {
            if (!isMounted) return;
            clearTimeout(fallbackTimer);
            onTokenChange?.('');
            onReadyChange?.(true);
          }
        });
      } catch (_err) {
        if (isMounted) {
          onReadyChange?.(true);
        }
      }
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      let scriptEl = document.querySelector(`script[src="${TURNSTILE_SCRIPT_SRC}"]`);
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.src = TURNSTILE_SCRIPT_SRC;
        scriptEl.async = true;
        scriptEl.defer = true;
        document.head.appendChild(scriptEl);
      }
      const onLoad = () => renderWidget();
      const onError = () => {
        if (isMounted) {
          clearTimeout(fallbackTimer);
          onReadyChange?.(true);
        }
      };
      scriptEl.addEventListener('load', onLoad);
      scriptEl.addEventListener('error', onError);

      return () => {
        isMounted = false;
        clearTimeout(fallbackTimer);
        scriptEl.removeEventListener('load', onLoad);
        scriptEl.removeEventListener('error', onError);
        if (widgetIdRef.current !== null && window.turnstile) {
          try {
            window.turnstile.remove(widgetIdRef.current);
          } catch (_e) {}
          widgetIdRef.current = null;
        }
      };
    }

    return () => {
      isMounted = false;
      clearTimeout(fallbackTimer);
      if (widgetIdRef.current !== null && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (_e) {}
        widgetIdRef.current = null;
      }
    };
  }, [onTokenChange, onReadyChange]);

  if (!TURNSTILE_SITE_KEY) return null;

  return <div ref={containerRef} className="min-h-[2px] my-1" />;
});

export default TurnstileWidget;
