# Reddit Clone Fullstack Application

This project is a full-stack Reddit clone application built with **TypeScript**, **Next.js**, **React**, **Tailwind CSS**, **Prisma**, and **PostgreSQL**. It mimics the core functionalities of Reddit including post creation, commenting, voting, and community management.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

This Reddit clone aims to provide an interactive, modern UI and a scalable backend system similar to Reddit. It demonstrates core full-stack development skills, including user authentication, data modeling, API design, client-side rendering, and state management.

## Features

- Authentication with NextAuth
- Create, update, delete, and read posts and comments
- Upvote and downvote functionality
- Subreddit-like community creation and moderation
- Responsive UI with Tailwind CSS
- Server-side rendering and API integration with Next.js
- ORM with Prisma and PostgreSQL database

## Tech Stack

### Frontend

- **React** (via Next.js)
- **Tailwind CSS** – Utility-first CSS framework
- **TypeScript** – Static type-checking

### Backend

- **Next.js API routes** for server-side logic
- **Prisma ORM** – Database modeling and migrations
- **PostgreSQL** – Relational database
- **NextAuth.js** – Authentication and session management

## Installation

> Make sure you have Node.js, PostgreSQL, and Git installed.

```bash
git clone https://github.com/mrkankilic27/reddit-clone-fullstack.git
cd reddit-clone-fullstack
npm install
```
Create a `.env` file in the root and configure the following:

```
DATABASE_URL=postgresql://username:password@localhost:5432/dbname
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000
```

Then, apply the Prisma migrations and seed the database if necessary:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

Start the development server:

```bash
npm run dev
```

The application will be running on `http://localhost:3000`.

## Usage

- Sign up or log in using a provider (e.g., GitHub or email)
- Create a community
- Create and vote on posts
- Add comments to discuss topics
- Moderate communities as the creator

## Project Structure

```
/pages           → Next.js pages and API routes
/components      → Reusable React components
/lib             → Utility functions and server helpers
/prisma          → Prisma schema and migrations
/styles          → Tailwind global and custom styles
/public          → Static assets
```

## Contributing

Contributions, suggestions, and improvements are welcome. Please fork the repository and submit a pull request. For major changes, open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

**Mertcan Kankılıç**  
Email: mertcankankilic27@gmail.com  
GitHub: [@mrkankilic27](https://github.com/mrkankilic27)

---

This project showcases modern full-stack application development with a focus on clean architecture, scalability, and user experience.