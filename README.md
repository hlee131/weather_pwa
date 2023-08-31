# Weather Progressive Web App
This is a basic weather app that was used to learn more about Progressive Web Apps. It utilizes data from 3 APIs: 

1. Webcam images (windy.com)
2. Weather data (open-meteo.com)
3. Geocoding (opencagedata.com)

Data from these APIs and a custom offline page are made available to the user through a service worker which uses different 
caching strategies depending on the type of data, e.g. Stale While Revalidate, Cache First, Network First, etc. 

The frontend of the application was built with concepts from neumorphism in mind and implemented with React and TailwindCSS. Additionally, 
react-spring was used to integrate animations and transitions into various elements in the application to improve user experience. However, the
responsiveness of the application is limited as it was designed with mobile-first in mind.

## Demo

https://github.com/hlee131/weather_pwa/assets/59949027/6cda28d8-739d-4a5e-8b58-77a8b788153b

