---
title: 'Integrating Authentication in Nextjs Applications using Next-Auth'
description: Integrating authentication into Nextjs applications using Next-Auth.
author: Eugene Musebe
authorImage: https://res.cloudinary.com/hackit-africa/image/upload/v1675688988/DSC_8730_2.jpg
coverImage: https://res.cloudinary.com/hackit-africa/image/upload/v1676049960/social-media-card.png
date: '2023-01-30'
---

Authentication is an essential aspect of web development and it is a key feature for many applications. Nextjs is a popular React framework for building server-side rendered applications, and Next-Auth is a popular library that provides a simple and flexible way to add authentication to your Nextjs applications.

In this blog post, we will be exploring how to integrate authentication into a Nextjs application using Next-Auth. We will start by creating a new Nextjs application, installing Next-Auth, and then setting up the necessary configurations for authentication.

## Step 1: Create a new Nextjs application

The first step is to create a new Nextjs application. You can do this by running the following command in your terminal:

```js
npx create-next-app my-app
```

This will create a new Nextjs application in a directory named “my-app”.

## Step 2: Install Next-Auth

The next step is to install the Next-Auth library. You can do this by running the following command in your terminal:

```js
npm install next-auth
```
## Step 3: Set up configurations

Next-Auth requires a set of configurations to work properly. To set up these configurations, create a new file named “next-auth.config.js” in the root directory of your Nextjs application.

In this file, you need to define the following configurations:

```js
module.exports = {
  providers: [
    {
      name: "google",
      ClientId: "your google client id",
      ClientSecret: "your google client secret",
    },
  ],
  database: {
    type: "mongodb",
    url: "mongodb://localhost:27017/next-auth-example",
  },
  session: {
    jwt: true,
  },
};

```

In this example, we are using Google as the provider for authentication, but you can use any other provider like Facebook, Twitter, etc. You will also need to set up a database connection. In this example, we are using MongoDB, but you can use any other database like MySQL, PostgreSQL, etc.

## Step 4: Set up the authentication pages

Next-Auth provides an easy way to set up authentication pages like login, register, and logout. To set up these pages, create a new directory named “pages” in the root directory of your Nextjs application.

In the “pages” directory, create a new file named “login.js” and add the following code:

```js
import { useSession } from "next-auth/client";

export default function Login() {
  const [session, loading] = useSession();

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && !session && (
        <>
          <p>You are not logged in.</p>
          <a href="/api/auth/signin/google">Sign in with Google</a>
        </>
      )}
      {!loading && session && (
        <>
          <p>You are logged in.</p>
          <a href="/api/auth/signout">Sign out</a>
        </>
      )}
    </div>
  );
}

```

In this code, we are using the “useSession hook from Next-Auth to check if the user is logged in or not. If the user is not logged in, they will see a “Sign in with Google” button. If the user is logged in, they will see a “Sign out” button.

Similarly, you can create the register page and the logout page.

## Step 5: Implement the server-side logic

Next-Auth provides a simple and easy way to implement the server-side logic for authentication. To do this, create a new directory named “api” in the root directory of your Nextjs application.

In the “api” directory, create a new file named “auth.js” and add the following code:

```js
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  database: {
    type: "mongodb",
    url: process.env.MONGODB_URI,
  },
  session: {
    jwt: true,
  },
};

export default (req, res) => NextAuth(req, res, options);

```

In this code, we are using the “NextAuth” function from the Next-Auth library to handle the server-side logic for authentication. We are also using the “Google” provider from the “Next-Auth/providers” library to handle the authentication with Google.

## Step 6: Add environment variables

To keep the sensitive information like client id and client secret safe, it is a good practice to use environment variables. To do this, create a new file named “.env” in the root directory of your Nextjs application and add the following code:

```js
GOOGLE_CLIENT_ID=your google client id
GOOGLE_CLIENT_SECRET=your google client secret
MONGODB_URI=mongodb://localhost:27017/next-auth-example

```

## Step 7: Test the authentication

The final step is to test the authentication. To do this, run the following command in your terminal:

```js
npm run dev
```

This will start the development server, and you can access the login page by navigating to “http://localhost:3000/login” in your web browser. You should see a “Sign in with Google” button, and if you click on it, you will be redirected to the Google sign-in page.

After signing in, you will be redirected back to the login page, and you should see a “Sign out” button. This means that the authentication is working correctly.

## Conclusion

In this blog post, we explored how to integrate authentication into a Nextjs application using Next-Auth. We started by creating a new Nextjs application, installing Next-Auth, and then setting up the necessary configurations for authentication. Then we set up the authentication pages, implemented the server-side logic, added environment variables, and finally tested the authentication.

Next-Auth provides a simple and easy way to add authentication to your Nextjs applications, and it is a great choice for developers who want to add authentication to their
