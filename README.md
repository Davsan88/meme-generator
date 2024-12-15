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


