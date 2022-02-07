<div id="top"></div>
<div align="right">

[![LinkedIn][linkedin-shield]][linkedin-url]

</div>
<!-- PROJECT NAME -->
<br />
<div align="center">

  <h1 align="center">Insurance Quote SPA</h1>

  <p align="center">
    <br />
    <a href="https://github.com/dtoxvanilla1991/homeInsuranceQuote-SPA"><strong>Explore the docs »</strong></a>
    <!-- <br />
    <br />
    <a href="">View Demo</a>
    ·
    <a href="">Report Bug</a>
    ·
    <a href="">Request Feature</a>
  </p> -->
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The App

React.js app SPA, featuring new section of the Home Insurance Company "REST" product. This new section is a quote summary page which allows the user to add various addons to their quote.

A user is able to add, remove extras to his/her quote. Moreover, the user is always visually able to see which addons he/she selected along with the accurate total price, having a convenient ability to toggle in between monthly and annual quote price.

The task was originally approached using functional components with hooks(useState, useEffect and useFetch), deriving all the data from mock API for the purpose of the task. Both useEffect and useFetch have been used to retreive the data merely for demostration purposes, although I personally prefer useFetch in my work projects. Navbar was added and made responsive for a better experience. Styled components were used for the wrapping containers with a purpose of demostration of the knowledge and understanding of the library. Implemented React lazy loading for pages to improve user experience.

UPDATE 01/22/2022: Routing implemented with the newest React.js Router-Dom update v6 once it came out. Footer added with "About" page for demonstration purposes.All logic functionality has been accomplished using states to properly rerender the React DOM. Index.css files optimized and modele.css files created for all components for a better organization of the code.

UPDATE 02/06/2022: React Redux and its @toolkit was implemented on 2/6/2022 update, taking over the state management(I understand the true unnecessary nature of Redux in this app as it is not a large-scale web product, but it was done for the demonstration purposes). Navbar enchanced with creative css only styled Login/Signup Page.


<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

Frameworks/libraries/languages used:

- HTML, CSS, JS
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [React Redux](https://react-redux.js.org/)
- [Bootstrap Navbar](https://getbootstrap.com/docs/4.0/components/navbar/)
- [CodePen.io](https://codepen.io/DToxVanilla)
- [Styled Components](https://styled-components.com/docs/basics)
- [React Fetch Hook](https://www.npmjs.com/package/react-fetch-hook)


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps after downloading the files from the Github.

### Prerequisites

To run this SPA, install it locally using npm and run mock API on a separate terminal:

```
$ npm install
$ npm run jsondb
$ npm start
```

<!-- CONTACT -->

## Contact

Yuri Avdiyevski - [@dtoxvanilla](https://twitter.com/dtoxvanilla) - dtoxvanilla@gmail.com

Project Link: [Insurance Quote SPA Files](https://github.com/dtoxvanilla1991/homeInsuranceQuote-SPA)

<!-- Deployed Project Link: [Live Cube Project](https://cube-project.herokuapp.com/) -->

<!-- **NOTE**: Live project is in the FREE Heroku tier so please allow a few second for the site to load as Heroku puts them to hybernate since they are not used too often. -->

<p align="right">(<a href="#top">back to top</a>)</p>

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/yuri-avdijevski
