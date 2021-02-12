# Weather Progressive Web App

## What

This is a simple weather app built to learn more about Progressive Web Apps (PWAs)

## How

It uses three APIS:

1. Webcam: https://api.windy.com/webcams (Caching Strategy: Cache First for JSON, Stale While Revalidate for images)
2. Weather: https://openweathermap.org/api/one-call-api (Caching Strategy: Network First)
3. Geocoding: https://opencagedata.com/ (Caching strategy: Cache First)

## Where

Not currently deployed

## What's Next? TODO:

- Make daily forecast pages
- Responsive
- PWA (push notifications, offline)
- Make API
- Sort dependencies and devDependencies
- Uninstall unused workbox modules

### Misc / Self - Planning

Ability to save cities to be cached in background
Cache responses for one day
If nothing in cache, return error component
Data, loading, cached states into store
