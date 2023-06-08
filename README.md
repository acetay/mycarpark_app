Carpark Availability App
Live Link
https://sensational-zabaione-393a34.netlify.app/

App can only be used in Singapore for searching of HDB carparks.
App is best experienced using Chrome Browser.
User must enable location setting on their browser or mobile phone.
To experience features on navigation, passenger-driver communication or Driver SOS, App needs to run on a mobile phone (with Google map and Whatsapp)
Starting the App from IDE
npm install
npm run netlify dev
Description
My Image The Carpark Availability App allows user:

To search for available lots in HDB-run carparks near their current location or a location of their choosing by using APIs to harness data from a variety of sources. (Primary)
To navigate to carpark destinations using Google Direction. (Primary)
To save carpark locations in localstorage as Favorites, to be retrieved for use in future. (Primary)
To communicate with a passager via Whatsapp API on the driver's pickup location, along with walking routes for the passenger to reach a driver's location. (Add-on)
To send SOS help signals to nominated person if a driver encounters any critical situations. Use-cases include (i.e. medical emergencies, dangerous situations, vehicle breakdown and etc.) (Add-on)
Try out our project here!

Important to note before using the app:
No login is required
The User Agreement is meant to seek user's consensus in releasing his/her current coordinates.
User MUST enable location settings on their browsers for the application to work.
This is a proof-of-concept application done as a group project for a software engineering course.
Features
User location tracking
Carpark lot availability tracking (refreshed hourly)
Table of results
Search parameters (location, distance, free parking, night parking)
Filtering of results (by distance, lots available, total lots)
Ability to edit results (deletion of carparks with no lots availabile)
Pagination
Route planning for drivers (via driving)
Login functionality
Automatically generated message for passenger route planning (via walking)
Emergency contact nomination
One-click SOS
Mobile responsiveness
Dependencies
Google Directions API
Google Geocoding API
Google Maps Javascript API
@react-google-maps/api
Geolib
React Whatsapp
