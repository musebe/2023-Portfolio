---
title: 'Simplifying Authentication in Next.js     Applications with Clerk'
description: Integrating authentication into Nextjs applications using Clerk.
author: Eugene Musebe
authorImage: https://res.cloudinary.com/hackit-africa/image/upload/v1675688988/DSC_8730_2.jpg
coverImage: https://res.cloudinary.com/hackit-africa/image/upload/v1688675184/Banner.png
date: '2023-07-06'
---

## Introduction

Building secure and user-friendly authentication systems is crucial for modern web applications. As a developer, your goal is to provide a seamless experience for users while keeping their data safe. That's where [Clerk](https://clerk.com) comes in. Clerk is a powerful authentication and user management platform designed to simplify authentication in Next.js and Reactjs applications, offering an exceptional developer experience and robust user security.

In this step-by-step guide, we will walk you through using Clerk and Next.js to implement authentication in your web applications. Clerk provides a seamless developer experience and robust user security. Combined with the versatility and efficiency of Next.js, you can easily create secure and user-friendly authentication systems.

By following the steps outlined in this guide, you'll integrate Clerk into your Next.js application and leverage its features to enhance user onboarding, simplify authentication flows, and ensure data security.

Let's get started!

## Prerequisites
 
To follow along with this tutorial, you'll need:

1.  Basic knowledge of React and Next.js.
2.  Node.js and npm (Node Package Manager) installed on your machine.
3.  A Clerk account (you can sign up for free at [https://www.clerk.com](https://www.clerk.dev/).


## Setting Up Your Next.js Application

First, let's create a new Next.js project by running the following commands in your terminal:

```
npx create-next-app my-clerk-app
cd my-clerk-app

```
## Configuring a new Clerk application for Authentication 

![Clerk Dashboard](https://res.cloudinary.com/hackit-africa/image/upload/v1688676392/new-setup.png "Clerk Dashboard")


To begin using Clerk, the first step is to create a Clerk account. You can do this by visiting clerk.dev and signing up for a free account. After signing in, you will be prompted to create a new application within your account. This application will serve as your starting point to explore and make use of the various features and capabilities offered by Clerk as highlighted above.

![Application](https://res.cloudinary.com/hackit-africa/image/upload/v1688676948/Application_name.png "Clerk Dashboard")


Once you have clicked on `Add application` after signing in, Give your application a name and select all the 'Social authentication' methods you would like your users to leverage. 

## Installing Clerk in the Next.js Application 

Clerk provides an easy-to-use Nextjs library for integrating with its authentication system. Navigate to your Next.js project's directory and run the following command to install Clerk :

```
npm install @clerk/nextjs
```
## Configuring Clerk in Your Next.js Application


![Api_Keys](https://res.cloudinary.com/hackit-africa/image/upload/v1688677690/API-Keys.png "Clerk Dashboard")

Create a `.env.local` file in the root of your Next.js project and include your `CLERK_PUBLISHABLE_KEY` key and `CLERK_SECRET_KEY` as environment variables. You can obtain these values from your clerk dashboard under the `API keys` section as highlighted above.  


```
// clerk environment variables

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="<Your Publishable Key>"
CLERK_SECRET_KEY="<Your Clerk Secret Key>"
```

## Mounting The ClerkProvider
In this step, we will mount  the  `ClerkProvider` component to wrap your Next.js application's root layout with the ClerkProvider context. This will allow your application to access Clerk's authentication methods and user data.


```
// app/layout.jsx
import  {  ClerkProvider  }  from  '@clerk/nextjs';

const Layout = ({ children }) => {
  return (
    <ClerkProvider>
      {/* Your layout code goes here */}
      {children}
    </ClerkProvider>
  );
};

export default Layout;

```

## Safeguarding your Application Routes

Now that Clerk has been installed and mounted in your application, it's time to decide which pages are public and which require authentication. We accomplish this by placing a `middleware.js` file at the root of the project structure and declaring the public and private routes. In our case, we only want the home page to be public and the rest of the page to be inaccessible until the user logs into the application. This is possible with the following code:

```
// Protects access from all the other pages except the home page

import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ["/"]
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
```


## SignIn and SignUp Components

Clerk provides a selection of ready-made components that allow you to integrate sign-in, sign-up, and other user management features into your Next.js application. To utilize these features, you can use the `<SignIn />` and `<SignUp />` components alongside Next.js' optional catch-all route.

To implement this, within the "app" folder of your project, create two new directories named "sign-up" and "sign-in". Inside each directory, insert the corresponding code for the sign-up and sign-in functionalities.

### Signin

```
// app/sign-in/pages.js

import { SignIn } from "@clerk/nextjs";

const signIn = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default signIn;

```

### Signup

```
// app/sign-up/pages.js

import { SignUp } from "@clerk/nextjs";

const signUp = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default signUp;
```

With this in place, When you visit the route `http://localhost:3000/sign-in` you should be able to load Clerks login page as illustrated below :

![Application](https://res.cloudinary.com/hackit-africa/image/upload/v1688682376/clerk.png)


## Setting Up SignedIn, SignedOut and User Profile

Clerk offers us a set of components that serve specific purposes in managing user authentication within our application. These components include "SignedIn," "SignedOut," and "RedirectToSignIn." By utilizing these components, we can conveniently wrap other components with the necessary authentication functionality. This means that we can easily control the behavior of our application based on whether a user is signed in or signed out. Additionally, we have the ability to trigger a redirection to the sign-in page whenever required. These components greatly enhance our ability to handle user authentication seamlessly within our application.

To finalize the application we need to show the `SignInButton`, `UserButton` and `SignedOut`  on the applications  `Navbar` component. Navigate to your applications component and Imports various components and hooks from the '@clerk/nextjs' library as highlited below : 

```
import  {SignedIn, SignedOut,SignInButton,UserButton,}  from  '@clerk/nextjs';
```

To understand how each component highlighted above works visit [Clerks documentation](https://clerk.com/docs/nextjs/get-started-with-nextjs)  for further reading.

After importing the above components on the navbar component, wrap `UserButton` component with the `SignedIn` component. This indicates that the `UserButton` should only be rendered when a user is signed in.

The SignedOut component, Wraps the the `SignInButton` component with the `SignedOut` component. This indicates that the `SignInButton` should only be rendered when a user is signed out as illustrated in the codeblock below : 

```
const Navbar = () => {
  return (
    <nav>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal'>
          <button className='rounded border border-gray-400 px-3 py-0.5'>
            Sign in
          </button>
        </SignInButton>
      </SignedOut>
    </nav>
  );
};

export default Navbar;

```

With this in place you should be able to have a fully authenticated application as highlighted below : 

![Final Application](https://res.cloudinary.com/hackit-africa/image/upload/v1688687004/final.gif)



## Conclusion

In conclusion, Clerk is the ideal choice for authentication and identity management in Next.js and React applications, thanks to its effortless integration. Clerk's dedicated libraries for Next.js and React, along with its well-documented APIs, make the integration process straightforward and time-saving. Developers can swiftly set up authentication features like login, registration, and user management, leveraging Clerk's user-friendly components and powerful API. Moreover, Clerk seamlessly integrates with various application stacks, ensuring compatibility without significant modifications.

By opting for Clerk, developers can focus on building core application features instead of investing resources in complex authentication systems. Clerk's robust security measures, including multi-factor authentication and passwordless login, enhance application security without additional implementation complexities. With its easy integration, Clerk enables developers to create seamless and secure authentication experiences in Next.js and React applications, ensuring efficient functionality.

## Final Codebase 

- Github Repository : [https://github.com/musebe/Nextjs-Clerk](https://github.com/musebe/Nextjs-Clerk)

- Live Demo : [https://nextjs-clerk-nine.vercel.app/](https://nextjs-clerk-nine.vercel.app/)
