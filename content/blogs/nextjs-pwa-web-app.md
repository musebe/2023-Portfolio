---
title: 'Building a Progressive Web App (PWA) with Next.js'
description: Building a Progressive Web App with Next.js.
author: Eugene Musebe
authorImage: https://res.cloudinary.com/hackit-africa/image/upload/v1675688988/DSC_8730_2.jpg
coverImage: https://res.cloudinary.com/hackit-africa/image/upload/v1675688157/eng---progressive-web-apps.png
date: '2023-02-06'
---



A Progressive Web App (PWA) is a web application that uses modern web technologies to deliver an app-like experience to users. It has offline support, push notifications, and can be installed on the user's device just like a native app.

In this tutorial, we'll build a PWA using Next.js, a popular React-based framework for building fast and scalable web applications.

## Step 1: Setting up the project

To start, you'll need to have Node.js and npm installed on your machine. You can install them from the official website if you don't already have them.

Once you have Node.js and npm set up, create a new Next.js project by running the following command in your terminal:

```ts
npx create-next-app my-pwa --use-npm --example with-typescript
```
This will create a new Next.js project in a directory called my-pwa. Change into that directory and start the development server by running:

```ts
cd my-pwa
npm run dev
```
## Step 2: Adding a service worker

A service worker is a script that runs in the background and enables offline support, push notifications, and other native app-like features in a PWA.

Next.js has built-in support for service workers. To add one to your project, create a new file called service-worker.ts in the public directory and paste the following code:

```ts
// service-worker.ts

self.addEventListener('install', (event) => {
  console.log('Service worker installed.');
});

```
Next, you need to register the service worker in your main pages/index.tsx file. Add the following code to the bottom of the file:

```ts
// pages/index.tsx

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service worker registered:', registration);
      })
      .catch((error) => {
        console.error('Error registering service worker:', error);
      });
  });
}

```

## Step 3: Adding a manifest file

A manifest file is a JSON file that provides information about your PWA, such as the start URL, display mode, and theme color.

Create a new file called manifest.json in the public directory and paste the following code:

```ts
{
  "short_name": "My PWA",
  "name": "My Progressive Web App",
  "icons": [
    {
      "src": "/icon.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

Make sure to replace the values with your own information. You'll also need to add an icon in the public directory, as specified in the manifest.json file.

## Step 4: Linking the manifest file

Finally, you need to link the manifest file to your HTML so that the browser can access it. Add the following code to the head section of your pages/index.tsx file:

```ts
// pages/index.tsx

import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <h1>Welcome to My PWA</h1>
    </>
  );
}

export default Home;

```

## Step 5: Testing the PWA

To test your PWA, visit your Next.js app in a browser that supports service workers, such as Google Chrome. You can do this by visiting http://localhost:3000 if you're running the development server, or by deploying your app to a hosting provider.

In Chrome, you can inspect your PWA by opening the DevTools and clicking on the "Application" tab. You should see a "Service Workers" section, which indicates that your service worker is registered and running.

You can also test the offline functionality by disconnecting from the internet and refreshing the page. The page should still load and display the message "Service worker installed." from the console.

Congratulations! You've successfully built a PWA with Next.js and Typescript. You can now add more features, such as offline support, push notifications, and more, to enhance the user experience.

I hope this tutorial has been helpful in your journey towards building a PWA with Next.js and Typescript. Happy coding!