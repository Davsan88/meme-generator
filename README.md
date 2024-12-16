# Workflow Guide: Building the Meme Generator App

## Overview
**Objective**: Build an interactive Meme Generator App that allows users to generate memes by selecting random images from an API and customizing top and bottom text.  
**Technologies Used**: React, JavaScript, CSS.  
**Key Concepts**:
- State management with `useState`.
- Fetching data from an API using `useEffect`.
- Handling forms and input changes.
- Conditional rendering.
- CSS styling for responsive design.

---

## Step-by-Step Workflow

### 1. **Initialize State for Meme**
**Action**: Set up a state variable to manage the current meme's text and image.

```javascript
const [meme, setMeme] = useState({
  topText: "One does not simply",
  bottomText: "walk into Mordor",
  randomImage: "http://i.imgflip.com/1bij.jpg"
});
```

**Purpose**: This state stores the meme's top text, bottom text, and the image URL.

---


### 2. **Fetch Meme Data from API**
**Action**: Use `useEffect` to fetch an array of memes from the Imgflip API when the component first renders.

```javascript
useEffect(() => {
  fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes));
}, []);
```

**Purpose**: Fetch meme data and store it in a state variable for later use.

---


### 3. **Generate a Random Meme Image**
**Action**: Create a function to generate a random meme image from the fetched API data.

```javascript
const generateMeme = () => {
  const randomIndex = Math.floor(Math.random() * allMemes.length);
  const memeUrl = allMemes[randomIndex].url;
  setMeme(prevMeme => ({
    ...prevMeme,
    randomImage: memeUrl
  }));
};
```




Work in progress...