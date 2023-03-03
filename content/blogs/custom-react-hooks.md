---
title: 'Boost Your React Development with These Custom Hooks'
description: Simplify your React code with these custom hooks.
author: Eugene Musebe
authorImage: https://res.cloudinary.com/hackit-africa/image/upload/v1675688988/DSC_8730_2.jpg
coverImage: https://res.cloudinary.com/hackit-africa/image/upload/v1675861996/maxim-zhavoronko-nu8rym-lx6M-unsplash-1.jpg
date: '2023-02-08'
---

# Introduction

Custom React Hooks are a way to extract state logic and side-effects from a component and share it across multiple components. They are a way to reuse stateful logic and make your code more readable and maintainable. In this blog post, we will look at some custom hooks that you can use to simplify and transform your React code.

## 1. useDebounce

Debouncing is a technique to prevent a function from being called too frequently. For example, if you have a search bar that fetches results as you type, you might not want to make an API call for every character that is entered. Instead, you can wait for the user to stop typing for a certain amount of time before making the API call.

Here's an example of a custom useDebounce hook that takes a value and a delay in milliseconds as inputs and returns a debounced value:

```js
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

```

To use this hook, you can simply pass the value that you want to debounce and the delay time in milliseconds:

```js
const SearchResults = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    // make API call with debouncedSearchTerm
  }, [debouncedSearchTerm]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
    />
  );
};

```

## 2. useWindowSize

The useWindowSize hook returns the current window size (width and height) as an object. It's a handy hook that can be used to build responsive components in React.

Here's an example:

```js
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

```

To use this hook, you can simply import it into your component and destructure the width and height properties:

```js
const ResponsiveComponent = () => {
  const { width, height } = useWindowSize();

  return <div>Window size: {width} x {height}</div>;
};

```

## 3. useInterval

The useInterval hook allows you to run a callback function at a specified interval. It's useful when you need to perform an action repeatedly, such as updating a timer or animating an element. Here's an example of a useInterval hook:

```js
import { useState, useEffect } from 'react';

function useInterval(callback, delay) {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(callback, delay);
      return () => clearInterval(intervalId);
    }
  }, [isRunning, callback, delay]);

  return [isRunning, setIsRunning];
}

```

To use this hook, you can simply pass a callback function and the delay time in milliseconds:

```js
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useInterval(() => {
    setSeconds(seconds + 1);
  }, 1000);

  return (
    <div>
      <div>Seconds: {seconds}</div>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};

```

## 4. useLocalStorage

The useLocalStorage hook allows you to store and retrieve data from the local storage in your web browser. Here's an example:

```js
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

```

To use this hook, you can simply pass the key that you want to store the data under and an initial value:

```js

const Settings = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <div>Current theme: {theme}</div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle theme
      </button>
    </div>
  );
};

```

## 5. usePrevious

The usePrevious hook allows you to access the previous value of a state variable. This can be useful when you need to compare the current value with the previous value, such as in an animation. Here's an example:

```js
import { useEffect, useRef } from 'react';

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

```

To use this hook, you can simply pass the state variable that you want to track:

```js
const Animation = () => {
  const [x, setX] = useState(0);
  const prevX = usePrevious(x);

  useEffect(() => {
    const delta = x - prevX;
    // use delta to animate an element
  }, [x, prevX]);

  return (
    <div>
      <div>X: {x}</div>
      <button onClick={() => setX(x + 10)}>Move</button>
    </div>
  );
};

```

In conclusion, custom React hooks are a powerful tool that can help you simplify and improve your React code. They allow you to extract state logic and side-effects from your components and reuse it across multiple components, making your code more readable, maintainable, and reusable. Try using some of these hooks in your next project and see the difference it makes!