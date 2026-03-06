import * as Sentry from '@sentry/react';

Sentry.init({
    dsn: "",
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration({
            maskAllText: false,
            blockAllMedia: false,
        }),
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: ["loclhost", /^https\/\/yourserver\.io\/api/],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    sendDefaultPii: true,
});