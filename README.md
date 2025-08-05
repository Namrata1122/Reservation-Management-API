# Reservation-Management

Title:
Reservation Management API

Content:
Overview:

The Reservation Management API manages reservation of predefined resources such as rooms, halls, or slots. The API follows RESTful principles and emphasizes clean architecture, modular code organization, and best practices for security.

The system supports two user roles: regular users who can browse available resources and make or cancel their own reservations, and administrators who can manage all resources and oversee all reservations in the system.



Understand and implement RESTful API design.
Apply user authentication and role-based authorization.
Practice route-level protection using custom middleware.
Configure and use environment variables for sensitive information.


Functional Requirements
1. Authentication & Authorization
POST /auth/register – Register a new user account
POST /auth/login – Authenticate user and return access token
GET /auth/profile – Return the authenticated user’s profile


2. Resource Management (Admin Only)
GET /resources – List all available resources
POST /resources – Create a new resource
GET /resources/:id – Get details of a specific resource
PUT /resources/:id – Update an existing resource
DELETE /resources/:id – Delete a resource
3. Reservation Management
For Regular Users:
GET /reservations/my – List all reservations by the current user
POST /reservations – Create a new reservation (resourceId, startTime, endTime)
DELETE /reservations/:id – Cancel a reservation (only their own)
For Admins:
GET /reservations – View all reservations in the system
DELETE /reservations/:id – Cancel any reservation
4. Middleware
Authentication Middleware
Verify token in Authorization header.
Attach authenticated user info to request object.
Authorization Middleware
Check user role (admin or user).
Restrict access to admin-only routes 

