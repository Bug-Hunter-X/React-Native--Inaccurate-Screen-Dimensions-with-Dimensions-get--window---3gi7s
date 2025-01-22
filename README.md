# React Native Inaccurate Screen Dimensions

This repository demonstrates a common issue in React Native applications where using `Dimensions.get('window')` to obtain screen dimensions can yield inaccurate results.  The primary problem is that this method isn't always updated immediately after orientation changes or when the app first starts.  This can cause layout issues and unexpected behavior.

The `bug.js` file shows the problematic code using `Dimensions.get('window')`.  The `bugSolution.js` file presents a more robust solution using the `useWindowDimensions` hook introduced in React Native 0.64, which is preferred for responsiveness and accuracy.