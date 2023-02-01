---
title: "Markdown Extensive Example"
description: Learn how to write markdown
author: Eugene Musebe
authorImage: https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=50
coverImage: https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=50
date: "2022-04-20"
---


Creating reusable and customizable Navbar and Footer components can be a tedious task, but with the help of Tailwindcss and Next.js, it becomes much easier and efficient. In this blog post, we will go over how to create these components and how to customize them to your liking, as well as how to add dark mode and light mode capabilities.

To get started, you will need to have Next.js and Tailwindcss installed in your project. If you don't have these already, you can follow the instructions on the Next.js and Tailwindcss websites to set them up.

First, let's create our Navbar component. In your project, create a new file called Navbar.js and add the following code:

```react
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <a className="text-white font-bold text-2xl" href="#">My Site</a>
      <div className="flex items-center">
        <a className="text-white px-4 py-2 mr-4" href="#">Home</a>
        <a className="text-white px-4 py-2 mr-4" href="#">About</a>
        <a className="text-white px-4 py-2" href="#">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

```

This creates a basic Navbar component with a logo and three links. We are using Tailwindcss classes to style the component and make it responsive. The bg-gray-800 class sets the background color to a dark gray, and the p-4 class adds padding to the component. The flex class makes the component a flex container, and the justify-between class aligns the logo and links to the left and right, respectively. The items-center class aligns the items vertically in the center.

Next, let's customize the Navbar component. We can do this by adding props to the component and using them to set the values of the logo and links.

```js
import React from 'react';

const Navbar = ({ logo, links }) => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <a className="text-white font-bold text-2xl" href="#">{logo}</a>
      <div className="flex items-center">
        {links.map(link => (
          <a className="text-white px-4 py-2 mr-4" href="#">{link.name}</a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

```

Now, we can pass in the values for the logo and links as props when we use the Navbar component. For example:

```
<Navbar
  logo="My Site"
  links={[
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]}
/>

```

Now that we have a customizable Navbar component, let's add the dark mode and light mode capabilities. We can do this by using a hook called useColorMode from the @chakra-ui/react library.

First, install the library by running npm install @chakra-ui/react. Then, import the hook in your Navbar component:

```javascript
import { useColorMode } from '@chakra-ui/react';
```

Next, use the hook to get the current color mode and a function to toggle the color mode.

```
const { colorMode, toggleColorMode } = useColorMode();
```

Now, we can use the colorMode variable to set the colors of the Navbar depending on the current color mode. We can do this by using a ternary operator in the className attribute of each element.

```
<nav className={`bg-${colorMode === 'light' ? 'gray-800' : 'white'} p-4 flex justify-between items-center`}>
  <a className={`text-${colorMode === 'light' ? 'white' : 'gray-800'} font-bold text-2xl`} href="#">{logo}</a>
  <div className="flex items-center">
    {links.map(link => (
      <a className={`text-${colorMode === 'light' ? 'white' : 'gray-800'} px-4 py-2 mr-4`} href="#">{link.name}</a>
    ))}
  </div>
</nav>

```

Now, the Navbar will switch between a dark and light theme depending on the current color mode. To toggle the color mode, we can add a button to the Navbar that calls the toggleColorMode function when clicked.

```
<button onClick={toggleColorMode}>Toggle Color Mode</button>

```

You can customize the button to your liking using Tailwindcss classes.


And that's it! We have created reusable and customizable Navbar component that has dark mode and light mode capabilities using Tailwindcss and Next.js. This component can be easily imported and used in any Next.js project, and  can be customized to fit the specific needs of your site.

I hope this blog post has helped you understand how to create and customize these components. Happy coding!