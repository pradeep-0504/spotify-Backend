# Spotify-like Music Streaming API

A Node.js backend application that provides a RESTful API for a music streaming platform similar to Spotify. Features include user authentication, music upload and management, album creation, and secure file storage.

## Features

- **User Authentication**: JWT-based authentication with role-based access (user/artist)
- **Music Management**: Upload music tracks with metadata storage
- **Album Creation**: Create and manage music albums
- **File Storage**: Secure file uploads using ImageKit
- **Database**: MongoDB with Mongoose for data persistence

## Tech Stack

- Node.js & Express.js
- MongoDB & Mongoose
- JWT Authentication
- bcryptjs for password hashing
- ImageKit for file storage
- Cookie-based session management

## API Endpoints

- `/api/auth` - User authentication (register, login, logout)
- `/api/music` - Music operations (create, get all music, create albums)
