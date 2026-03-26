# Production Analytics Verification

## Required Vercel Environment Variables

- NEXT_PUBLIC_GA_ID
- NEXT_PUBLIC_CLARITY_ID

## Production Verification Steps

1. Open https://www.delitweb.com.
2. Open browser DevTools Console and confirm `window.gtag` exists.
3. Confirm `window.clarity` exists.
4. Open DevTools Network tab and confirm requests for:
   - `gtag/js`
   - `collect`
   - `clarity.js`
5. Confirm GA Realtime shows active users/events from your session.
6. Confirm Microsoft Clarity Recordings and Dashboard start populating.

## Event Verification Checklist

- Header CTA click
- Hero CTA click
- Services anchor click
- ExpandableText expand
- CollapsibleList expand
- Fast lane email draft open
- Structured enquiry email draft open

## How To Use This Checklist

1. Deploy the latest branch to production with both env vars set in Vercel.
2. Complete steps in order on the live site in one browser session.
3. Verify network requests first, then analytics dashboards.
4. Trigger each listed event at least once and confirm they appear in GA/Clarity reporting views.
