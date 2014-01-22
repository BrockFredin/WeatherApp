WeatherApp
==========

Weather Demo!  

I am calling Weather Underground's API and returning 5 day forecast information based on a city/state.

Working Plunkr:

http://plnkr.co/edit/lUNlPoO6Nj6qHSlybQM4?p=preview

Code:

All written in JavaScript using Angular.  The returned data defaults to Minneapolis, Minnesota.  The user can change it to any location within the United States.  The code is curretly untested.  The code uses a promise to return data, injects this data service into a the EventDetailCtrl, and changes $scope.weather.  The user can also pass city/state information which updates the scope with newly returned data.  

I use UI router for simple SPA (Single Page Application) views.  There is a filter on searching and within a select list.  The filter changes ng-model which updates the formatted AJAX data.  

Please feel free to use this demo when traveling to find specific days for enjoyable activities.
