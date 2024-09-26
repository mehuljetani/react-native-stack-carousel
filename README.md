<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO Optimization -->
  <meta name="description" content="A React Native component for creating an animated stack carousel with customizable directions and gestures.">
  <meta name="keywords" content="React Native, Carousel, Animation, npm, JavaScript, Mobile Development">
  <meta name="author" content="Your Name">
  
  <!-- Social Media Open Graph (OG) Tags -->
  <meta property="og:title" content="react-native-stack-carousel" />
  <meta property="og:description" content="A React Native component for creating an animated stack carousel with customizable directions and gestures." />
  <meta property="og:url" content="https://github.com/mehuljetani/react-native-stack-carousel" />

  <!-- Twitter Card Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="react-native-stack-carousel" />
  <meta name="twitter:description" content="React Native animated stack carousel component." />
</head>
<body>

  <h1>react-native-stack-carousel</h1>
  <p>A React Native component for creating an animated stack carousel with customizable directions and gestures.</p>

  <!-- GitHub Badge -->
  <a href="https://github.com/mehuljetani/react-native-stack-carousel">
    <img src="https://img.shields.io/github/stars/mehuljetani/react-native-stack-carousel?style=social" alt="GitHub Stars">
  </a>

  <h2>Installation</h2>
  <p>To install the package, use npm or yarn:</p>

  <h3>Using npm:</h3>
  <pre><code>npm install react-native-stack-carousel</code></pre>

  <h3>Using yarn:</h3>
  <pre><code>yarn add react-native-stack-carousel</code></pre>

  <h2>Usage</h2>
  <p>To use the <code>Carousel</code> component in your React Native project, follow these steps:</p>

  <h3>Import the Component</h3>
  <pre><code>import Carousel from 'react-native-stack-carousel';</code></pre>

## Example

Here's a basic example of how to use the `Carousel` component:

```javascript
import React from "react";
import { View, StyleSheet } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-stack-carousel";

const App = () => {
  const currentIndex = useSharedValue(0);
  const animatedValue = useSharedValue(0);
  const IMAGES = [
    { id: 1, uri: "https://example.com/image1.jpg" },
    { id: 2, uri: "https://example.com/image2.jpg" },
    { id: 3, uri: "https://example.com/image3.jpg" },
  ];

  return (
    <View style={styles.container}>
      <Carousel
        data={IMAGES}
        maxVisibleItems={6}
        direction="vertical-top-variant1"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default App;
```

  <h2>Demo</h2>
  <p>Check out the demo of the component in action:</p>
  <img src="https://miro.medium.com/v2/resize:fit:438/format:webp/1*uiKT6Dq0cdx0_as42dMLvw.gif" alt="Demo GIF" loading="lazy" style="width: 160px; height: auto;">
  <img src="https://miro.medium.com/v2/resize:fit:438/format:webp/1*ulg-IbR0xPPBhJJpmpU3dg.gif" alt="Demo GIF" loading="lazy" style="width: 160px; height: auto;">
  <img src="https://miro.medium.com/v2/resize:fit:438/format:webp/1*mGJk9-kJYTRaDBDovdKvPg.gif" alt="Demo GIF" loading="lazy" style="width: 160px; height: auto;">
  <img src="https://miro.medium.com/v2/resize:fit:438/format:webp/1*3r-omLs1ADu-eEw4QsBiTg.gif" alt="Demo GIF" loading="lazy" style="width: 160px; height: auto;">
  <br>

  <h2>Props</h2>
  <table>
    <thead>
      <tr>
        <th>Prop</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>item</code></td>
        <td><code>object</code></td>
        <td><code>N/A</code></td>
        <td>The item to be displayed in the carousel.</td>
      </tr>
      <tr>
        <td><code>index</code></td>
        <td><code>number</code></td>
        <td><code>N/A</code></td>
        <td>The index of the current item.</td>
      </tr>
      <tr>
        <td><code>prevIndex</code></td>
        <td><code>number</code></td>
        <td><code>N/A</code></td>
        <td>The index of the previous item.</td>
      </tr>
      <tr>
        <td><code>dataLength</code></td>
        <td><code>number</code></td>
        <td><code>N/A</code></td>
        <td>Total number of items in the carousel.</td>
      </tr>
      <tr>
        <td><code>currentIndex</code></td>
        <td><code>object</code></td>
        <td><code>N/A</code></td>
        <td>The current index of the carousel.</td>
      </tr>
      <tr>
        <td><code>animatedValue</code></td>
        <td><code>object</code></td>
        <td><code>N/A</code></td>
        <td>Animated value for transitions.</td>
      </tr>
      <tr>
        <td><code>maxVisibleItems</code></td>
        <td><code>number</code></td>
        <td><code>3</code></td>
        <td>Maximum number of visible items at once.</td>
      </tr>
      <tr>
        <td><code>direction</code></td>
        <td><code>string</code></td>
        <td><code>"vertical-top-variant1"</code></td>
        <td>Direction of the carousel animations.</td>
      </tr>
      <tr>
        <td><code>imageStyle</code></td>
        <td><code>object</code></td>
        <td><code>{}</code></td>
        <td>Custom style for the carousel images.</td>
      </tr>
    </tbody>
  </table>

  <h2>License</h2>
  <p>This project is licensed under the ISC License.</p>

  <h2>Contact</h2>
  <p>If you have any questions or issues, please open an issue on the <a href="https://github.com/mehuljetani/react-native-stack-carousel/issues">GitHub repository</a> or contact the author directly.</p>

</body>
</html>
