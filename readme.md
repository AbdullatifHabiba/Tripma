
# Tripma - Travel Booking System

## Table of Contents

- [Tripma - Travel Booking System](#tripma---travel-booking-system)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features APIS](#features-apis)
    - [Flight Search API](#flight-search-api)
      - [Endpoint: `/api/flights/search`](#endpoint-apiflightssearch)
      - [Example Request](#example-request)
      - [Example Response](#example-response)
    - [Promotions API](#promotions-api)
      - [Get Promotions](#get-promotions)
        - [Endpoint: `/api/promotions`](#endpoint-apipromotions)
        - [Example Request](#example-request-1)
        - [Example Response](#example-response-1)
    - [Flight Deals API](#flight-deals-api)
      - [Get Flight Deals](#get-flight-deals)
        - [Endpoint: `/api/deals`](#endpoint-apideals)
        - [Example Request](#example-request-2)
        - [Example Response](#example-response-2)
    - [Unique Places API](#unique-places-api)
      - [Endpoint: `/api/places`](#endpoint-apiplaces)
      - [Example Request](#example-request-3)
      - [Example Response](#example-response-3)
    - [User Reviews API](#user-reviews-api)
      - [Endpoint: `/api/user-reviews`](#endpoint-apiuser-reviews)
      - [Example Request](#example-request-4)
      - [Example Response](#example-response-4)
    - [People Previous Search API](#people-previous-search-api)
      - [Endpoint: `/api/places/search-history`](#endpoint-apiplacessearch-history)
      - [Example Request](#example-request-5)
      - [Example Response](#example-response-5)
    - [Share User Travel with Friends API](#share-user-travel-with-friends-api)
      - [Endpoint: `/api/share-travel`](#endpoint-apishare-travel)
      - [Example Request](#example-request-6)
      - [Example Response](#example-response-6)
    - [Shop Hotels API](#shop-hotels-api)
      - [Endpoint: `/api/hotels/search`](#endpoint-apihotelssearch)
      - [Example Request](#example-request-7)
      - [Example Response](#example-response-7)
    - [Show Events and](#show-events-and)
      - [Endpoint: `/api/events/activities`](#endpoint-apieventsactivities)
      - [Example Request](#example-request-8)
      - [Example Response](#example-response-8)
    - [User Authentication API](#user-authentication-api)
      - [Signup API](#signup-api)
        - [Endpoint: `/api/auth/signup`](#endpoint-apiauthsignup)
      - [Example Request](#example-request-9)
      - [Example Response](#example-response-9)
      - [Login API](#login-api)
        - [Endpoint: `/api/auth/login`](#endpoint-apiauthlogin)
      - [Example Request](#example-request-10)
      - [Example Response](#example-response-10)
      - [OAuth Integration](#oauth-integration)
        - [Google OAuth](#google-oauth)
        - [Apple OAuth](#apple-oauth)
        - [Facebook OAuth](#facebook-oauth)
  - [Booking Flight APIS](#booking-flight-apis)
    - [Departing Flights API](#departing-flights-api)
      - [GET Departing Flights](#get-departing-flights)
        - [Endpoint: `/api/flights/departing`](#endpoint-apiflightsdeparting)
        - [Example Request](#example-request-11)
        - [Example Response](#example-response-11)
      - [POST Departing Flights](#post-departing-flights)
        - [Endpoint: `/api/flights`](#endpoint-apiflights)
        - [Example Request](#example-request-12)
        - [Example Response](#example-response-12)
    - [Return Flights API](#return-flights-api)
      - [GET Return Flights](#get-return-flights)
        - [Endpoint: `/api/flights/`](#endpoint-apiflights-1)
        - [Example Request](#example-request-13)
        - [Example Response](#example-response-13)
      - [POST Return Flights](#post-return-flights)
        - [Endpoint: `/api/flights/returning`](#endpoint-apiflightsreturning)
        - [Example Request](#example-request-14)
        - [Example Response](#example-response-14)
    - [Passenger Info API](#passenger-info-api)
      - [Passenger data and allowed bags](#passenger-data-and-allowed-bags)
        - [Endpoint: `/api/passenger/bags`](#endpoint-apipassengerbags)
        - [Example Request](#example-request-15)
        - [Example Response](#example-response-15)
      - [Selecting Seat](#selecting-seat)
        - [Get all available seats](#get-all-available-seats)
        - [Endpoint: `/api/seats`](#endpoint-apiseats)
        - [Example Request](#example-request-16)
        - [Example Response](#example-response-16)
        - [Endpoint: `/api/passenger/seat`](#endpoint-apipassengerseat)
        - [Example Request](#example-request-17)
        - [Example Response](#example-response-17)
      - [Upgrade Seat](#upgrade-seat)
        - [Endpoint: `/api/passenger/seat`](#endpoint-apipassengerseat-1)
        - [Example Request](#example-request-18)
        - [Example Response](#example-response-18)
    - [Payment API](#payment-api)
      - [Payment Methods Overview](#payment-methods-overview)
      - [Payment Processing](#payment-processing)
        - [Credit Card](#credit-card)
          - [Endpoint: `/api/payment/credit-card`](#endpoint-apipaymentcredit-card)
        - [Example Request](#example-request-19)
        - [Example Response](#example-response-19)
        - [PayPal](#paypal)
          - [Endpoint: `/api/payment/paypal`](#endpoint-apipaymentpaypal)
        - [Example Request](#example-request-20)
        - [Example Response](#example-response-20)
        - [Google Pay](#google-pay)
          - [Endpoint: `/api/payment/google-pay`](#endpoint-apipaymentgoogle-pay)
        - [Example Request](#example-request-21)
        - [Example Response](#example-response-21)
        - [Apple Pay](#apple-pay)
          - [Endpoint: `/api/payment/apple-pay`](#endpoint-apipaymentapple-pay)
        - [Example Request](#example-request-22)
        - [Example Response](#example-response-22)
        - [Cryptocurrency](#cryptocurrency)
          - [Endpoint: `/api/payment/crypto`](#endpoint-apipaymentcrypto)
        - [Example Request](#example-request-23)
        - [Example Response](#example-response-23)
    - [Flight Summary and Confirmation API](#flight-summary-and-confirmation-api)
      - [Endpoint: `/api/user/flight-summary`](#endpoint-apiuserflight-summary)
      - [Example Request](#example-request-24)
      - [Example Response](#example-response-24)
    - [Confirm Booking API](#confirm-booking-api)
      - [Endpoint: `/api/booking/confirm`](#endpoint-apibookingconfirm)
      - [Request Body](#request-body)
      - [Example Request](#example-request-25)
      - [Example Response](#example-response-25)
    - [Review and Confirm Trip API](#review-and-confirm-trip-api)
      - [Endpoint: `/api/booking/review-and-confirm`](#endpoint-apibookingreview-and-confirm)
      - [Request Body](#request-body-1)
      - [Example Request](#example-request-26)
      - [Example Response](#example-response-26)

## Introduction

Tripma is a comprehensive travel booking system that allows users to search for flights, view promotions, and manage bookings. It features OAuth authentication with multiple providers for a seamless login experience, user reviews, and flight deals to enhance the user experience.

## Features APIS 

### Flight Search API

#### Endpoint: `/api/flights/search`

- **Method:** GET
- **Parameters:**
  - `from` (string, required): IATA code of the departure airport.
  - `to` (string, required): IATA code of the destination airport.
  - `depart` (YYYY-MM-DD, required): Departure date.
  - `return` (YYYY-MM-DD, optional): Return date.
  - `passengers` (integer, required): Number of passengers.
  - `class` (string, optional): Class of service.

#### Example Request
```
GET /api/flights/search?from=JFK&to=LAX&depart=2024-09-01&return=2024-09-10&passengers=1&class=economy
```

#### Example Response
```json
{
  "flights": [
    {
      "flightNumber": "AB123",
      "departure": "JFK",
      "arrival": "LAX",
      "departureTime": "2024-09-01T10:00:00",
      "arrivalTime": "2024-09-01T13:00:00",
      "price": 300.00,
      "airline": "Airline Name",
      "class": "economy"
    }
  ]
}
```

### Promotions API

#### Get Promotions

##### Endpoint: `/api/promotions`
- **Method:** GET

This API provides a list of current promotions available to users.

##### Example Request
```
GET /api/promotions
```

##### Example Response
```json
{
  "promotions": [
    {
      "code": "TRAVEL",
      "description": "Save up to 20% on your flight using code TRAVEL at checkout",
      "expiryDate": "2024-09-30"
    }
  ]
}
```

### Flight Deals API

#### Get Flight Deals

##### Endpoint: `/api/deals`
- **Method:** GET

This API provides a list of featured flight deals, including destination details, images, descriptions, and prices.

##### Example Request
```
GET /api/deals
```

##### Example Response
```json
{
  "deals": [
    {
      "id": "1",
      "title": "The Bund, Shanghai",
      "location": "Shanghai, China",
      "description": "China's most international city",
      "price": 598.00,
      "imageUrl": "https://example.com/images/shanghai.jpg"
    },
    {
      "id": "2",
      "title": "Sydney Opera House, Sydney",
      "location": "Sydney, Australia",
      "description": "Take a stroll along the famous harbor",
      "price": 981.00,
      "imageUrl": "https://example.com/images/sydney.jpg"
    },
    {
      "id": "3",
      "title": "Kōdaiji Temple, Kyoto",
      "location": "Kyoto, Japan",
      "description": "Step back in time in the Gion district",
      "price": 633.00,
      "imageUrl": "https://example.com/images/kyoto.jpg"
    }
  ]
}
```

### Unique Places API

#### Endpoint: `/api/places`

- **Method:** GET

This API provides a list of unique travel destinations, including location details, descriptions, and images.

#### Example Request
```
GET /api/places
```

#### Example Response
```json
{
  "places": [
    {
      "id": "1",
      "title": "The Great Wall of China",
      "location": "Beijing, China",
      "description": "Explore one of the world's most iconic landmarks",
      "price": 1200.00,
      "imageUrl": "https://example.com/images/great-wall.jpg"
    },
    {
      "id": "2",
      "title": "Sydney Opera House, Sydney",
      "location": "Sydney, Australia",
      "description": "Take a stroll along the famous harbor",
      "price": 981.00,
      "imageUrl": "https://example.com/images/sydney.jpg"
    }
  ]
}
```

### User Reviews API

#### Endpoint: `/api/user-reviews`

- **Method:** GET

This API allows users to read and post reviews for flights and travel experiences.

#### Example Request
```
GET /api/user-reviews
```

#### Example Response
```json
{
  "reviews": [
    {
      "userId": "1",
      "review": "Great experience, smooth flight!",
      "rating": 5
    },
    {
      "userId": "2",
      "review": "Flight was delayed but overall okay.",
      "rating": 3
    }
  ]
}
```
### People Previous Search API

#### Endpoint: `/api/places/search-history`
<!-- same as unique places but tagged as top searched  -->

- **Method:** GET

This API provides search history for users, including previously searched destinations and dates.

#### Example Request
```
GET /api/people/search-history?userId=1
```

#### Example Response
```json
{
  "searchHistory": [
    {
      "searchId": "1",
      "from": "JFK",
      "to": "LAX",
      "depart": "2024-09-01",
      "return": "2024-09-10",
      "passengers": 1
    },{
      "searchId": "2",
      "from": "JFK",
      "to": "LAX",
      "depart": "2024-09-01",
      "return": "2024-09-10",
      "passengers": 1
    }
  ]
}
```
### Share User Travel with Friends API

#### Endpoint: `/api/share-travel`
- **Method:** POST

This API allows users to share their travel itinerary with friends.

#### Example Request
```json
{
  "userId": "1",
  "friendsEmails": ["friend1@example.com", "friend2@example.com"],
  "message": "Check out my upcoming trip!"
}
```

#### Example Response
```json
{
  "message": "Travel itinerary shared successfully"
}
```

### Shop Hotels API

#### Endpoint: `/api/hotels/search`
- **Method:** GET

This API allows users to search for hotels according to the flight

#### Example Request
```
GET /api/hotels/search?location=Paris&checkin=2024-09-01&checkout=2024-09-10&guests=2
```

#### Example Response
```json
{
  "hotels": [
    {
      "name": "Hotel Paris",
      "location": "Paris, France",
      "price": 150.00,
      "rating": 4.5
    }
  ]
}
```

### Show Events and

 Activities API

#### Endpoint: `/api/events/activities`
- **Method:** GET

This API allows users to browse events and activities.

#### Example Request
```
GET /api/events/activities?location=Tokyo&date=2024-09-01
```

#### Example Response
```json
{
  "events": [
    {
      "name": "Tokyo Sightseeing Tour",
      "date": "2024-09-01",
      "price": 120.00
    }
  ]
}
```
### User Authentication API

#### Signup API

##### Endpoint: `/api/auth/signup`
- **Method:** POST
- **Request Body:**
  - `email` (string, required)
  - `password` (string, required)
  - `name` (string, optional)

#### Example Request
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

#### Example Response
```json
{
  "message": "Signup successful. Please check your email to verify your account."
}
```

#### Login API

##### Endpoint: `/api/auth/login`
- **Method:** POST
- **Request Body:**
  - `email` (string, required)
  - `password` (string, required)

#### Example Request
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

#### OAuth Integration

##### Google OAuth

- **Authorization Endpoint:** `https://accounts.google.com/o/oauth2/auth`
- **Token Endpoint:** `https://oauth2.googleapis.com/token`

##### Apple OAuth

- **Authorization Endpoint:** `https://accounts.apple.com/auth`
- **Token Endpoint:** `https://accounts.apple.com/token`

##### Facebook OAuth

- **Authorization Endpoint:** `https://www.facebook.com/dialog/oauth`
- **Token Endpoint:** `https://graph.facebook.com/oauth/access_token`

## Booking Flight APIS 


### Departing Flights API

#### GET Departing Flights

##### Endpoint: `/api/flights/departing`
- **Method:** GET

This API retrieves a list of departing flights for a specific date range.

##### Example Request
```
GET /api/flights/departing?date=2024-09-01
```

##### Example Response
```json
{
  "departures": [
    {
      "flightNumber": "AB123",
      "departure": "JFK",
      "arrival": "LAX",
      "departureTime": "2024-09-01T10:00:00",
      "arrivalTime": "2024-09-01T13:00:00"
    }
  ]
}
```

#### POST Departing Flights

##### Endpoint: `/api/flights`
- **Method:** POST

This API allows users to book departing flights.

##### Example Request
```json
{
  "flightNumber": "AB123",
  "departure": "JFK",
  "arrival": "LAX",
  "departureTime": "2024-09-01T10:00:00",
  "arrivalTime": "2024-09-01T13:00:00",
  "passengers": 1
}
```

##### Example Response
```json
{
  "bookingId": "123456",
  "message": "Add to card confirmed"
}
```
### Return Flights API

#### GET Return Flights

##### Endpoint: `/api/flights/`
- **Method:** GET

This API retrieves a list of return flights for a specific date range.

##### Example Request
```
GET /api/flights/?date=2024-09-10
```

##### Example Response
```json
{
  "returns": [
    {
      "flightNumber": "BA456",
      "departure": "LAX",
      "arrival": "JFK",
      "departureTime": "2024-09-10T15:00:00",
      "arrivalTime": "2024-09-10T23:00:00"
    },
     {
      "flightNumber": "BA456",
      "departure": "LAX",
      "arrival": "JFK",
      "departureTime": "2024-09-10T15:00:00",
      "arrivalTime": "2024-09-10T23:00:00"
    }
  ]
}
```

#### POST Return Flights

##### Endpoint: `/api/flights/returning`
- **Method:** POST

This API allows users to book return flights.

##### Example Request
```json
{
  "flightNumber": "BA456",
  "departure": "LAX",
  "arrival": "JFK",
  "departureTime": "2024-09-10T15:00:00",
  "arrivalTime": "2024-09-10T23:00:00",
  "passengers": 1
}
```

##### Example Response
```json
{
  "bookingId": "654321",
  "message": "Add to Card confirmed"
}
```



### Passenger Info API

#### Passenger data and allowed bags

##### Endpoint: `/api/passenger/bags`
- **Method:** GET

This API retrieves the passenger data and the number of allowed bags for a specific booking.

##### Example Request
```
GET /api/passenger/bags?bookingId=123456
```

##### Example Response
```json
{
  "passenger": {
    "name": "John Doe",
    "bookingId": "123456",
    "flightNumber": "AB123",
    "allowedBags": 2
  }
}
```


#### Selecting Seat
##### Get all available seats

##### Endpoint: `/api/seats`
- **Method:** GET

This API retrieves a list of all available seats for a specific flight.
<!-- can make timeout  -->
##### Example Request
```
GET /api/seats?flightNumber=AB123
```

##### Example Response
```json
{
  "seats": [
    {
      "seatNumber": "12A",
      "seatClass": "economy",
      "available": true
    },
    {
      "seatNumber": "12B",
      "seatClass": "economy",
      "available": false
    },
    {
      "seatNumber": "14A",
      "seatClass": "business",
      "available": true
    }
  ]
}
```


##### Endpoint: `/api/passenger/seat`
- **Method:** POST

This API allows users to select a seat for their flight.

##### Example Request
```json
{
  "flightNumber": "AB123",
  "seatNumber": "12A",  
  "seatClass": "economy"

}
```

##### Example Response
```json
{
  "message": "Seat selected successfully"
}
```

#### Upgrade Seat

##### Endpoint: `/api/passenger/seat`
- **Method:** PUT

This API allows users to upgrade their seat to a higher class.

##### Example Request
```json
{
  "flightNumber": "AB123",
  "seatNumber": "12A",
  "seatClass": "business"
}
```

##### Example Response
```json
{
  "message": "Seat upgraded successfully"
}
```

### Payment API

#### Payment Methods Overview

- **Available Methods:** Credit Card, PayPal, Google Pay, Apple Pay, Cryptocurrency

#### Payment Processing

##### Credit Card

###### Endpoint: `/api/payment/credit-card`
- **Method:** POST

##### Example Request
```json
{
  "cardNumber": "4111111111111111",
  "expiryDate": "12/24",
  "cvv": "123",
  "amount": 300.00
}
```

##### Example Response
```json
{
  "message": "Payment successful"
}
```

##### PayPal

###### Endpoint: `/api/payment/paypal`
- **Method:** POST

##### Example Request
```json
{
  "amount": 300.00,
  "currency": "USD",
  "paypalToken": "ABC123"
}
```

##### Example Response
```json
{
  "message": "Payment successful"
}
```

##### Google Pay

###### Endpoint: `/api/payment/google-pay`
- **Method:** POST

##### Example Request
```json
{
  "amount": 300.00,
  "currency": "USD",
  "googlePayToken": "XYZ789"
}
```

##### Example Response
```json
{
  "message": "Payment successful"
}
```

##### Apple Pay

###### Endpoint: `/api/payment/apple-pay`
- **Method:** POST

##### Example Request
```json
{
  "amount": 300.00,
  "currency": "USD",
  "applePayToken": "DEF456"
}
```

##### Example Response
```json
{
  "message": "Payment successful"
}
```

##### Cryptocurrency

###### Endpoint: `/api/payment/crypto`
- **Method:** POST

##### Example Request
```json
{
  "amount": 0.01,
  "currency": "BTC",
  "cryptoAddress": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
}
```

##### Example Response
```json
{
  "message": "Payment successful"
}
```



### Flight Summary and Confirmation API

#### Endpoint: `/api/user/flight-summary`
- **Method:** GET

This API provides a detailed summary of the user's selected flight, including departure and return information, payment method, price, seat place, and more.

#### Example Request
```
GET /api/user/flight-summary?userId=1
```

#### Example Response
```json
{
  "flights": [
    {
      "flightNumber": "AB123",
      "departureAirport": "JFK",
      "arrivalAirport": "LAX",
      "departureTime": "2024-09-01T10:00:00",
      "arrivalTime": "2024-09-01T13:00:00",
      "returnFlight": {
        "flightNumber": "AB124",
        "departureAirport": "LAX",
        "arrivalAirport": "JFK",
        "departureTime": "2024-09-10T15:00:00",
        "arrivalTime": "2024-09-10T22:00:00"
      },
      "seatPlace": "12A",
      "paymentMethod": "Credit Card",
      "price": 299.99,
      "status": "Pending Review" // Status of the booking
    }
  ]
}
```

### Confirm Booking API

#### Endpoint: `/api/booking/confirm`
- **Method:** POST

This API allows users to confirm their booking after reviewing all the details of their trip.

#### Request Body
- `userId` (string, required)
- `flightNumber` (string, required)
- `confirm` (boolean, required) - Indicates whether the user confirms the booking

#### Example Request
```json
{
  "userId": "1",
  "flightNumber": "AB123",
  "confirm": true
}
```

#### Example Response
```json
{
  "message": "Booking  intial creating",
  "bookingId": "123456"
}
```

### Review and Confirm Trip API

#### Endpoint: `/api/booking/review-and-confirm`
- **Method:** POST

This API allows users to review all their selected trip details and confirm their booking in one step.

#### Request Body
- `userId` (string, required)
- `flightNumber` (string, required)
- `seatPlace` (string, required)
- `paymentMethod` (string, required)
- `price` (number, required)
- `departureDetails` (object, required)
  - `departureAirport` (string, required)
  - `departureTime` (string, required)
  - `arrivalAirport` (string, required)
  - `arrivalTime` (string, required)
- `returnDetails` (object, optional)
  - `returnFlightNumber` (string, optional)
  - `departureAirport` (string, optional)
  - `departureTime` (string, optional)
  - `arrivalAirport` (string, optional)
  - `arrivalTime` (string, optional)
- `confirm` (boolean, required) - Indicates whether the user confirms the booking

#### Example Request
```json
{
  "userId": "1",
  "flightNumber": "AB123",
  "seatPlace": "12A",
  "paymentMethod": "Credit Card",
  "price": 299.99,
  "departureDetails": {
    "departureAirport": "JFK",
    "departureTime": "2024-09-01T10:00:00",
    "arrivalAirport": "LAX",
    "arrivalTime": "2024-09-01T13:00:00"
  },
  "returnDetails": {
    "returnFlightNumber": "AB124",
    "departureAirport": "LAX",
    "departureTime": "2024-09-10T15:00:00",
    "arrivalAirport": "JFK",
    "arrivalTime": "2024-09-10T22:00:00"
  },
  "confirm": true
}
```

#### Example Response
```json
{
  "message": "Trip details reviewed and booking confirmed successfully",
  "bookingId": "123456"
}
```







