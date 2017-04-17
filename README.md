# React Dashboard

A React-powered status dashboard designed to be used on a large screen. Keeps things customisable using modular components and pull data regularly from an API.

Also includes a simple Express server to simulate a data source. In this case, it's emulating a support ticket system with random values.

Uses the power of CSS Grid to keep things in proportion, which falls back to a single-column layout in smaller windows or unsupported browsers.

Also uses [Axios][Axios] for managing data requests, and [react-chartjs-2][react-chartjs-2] to render graphs as a React component.

Create for Web Designer Magazine issue 262.

[Axios]:https://github.com/mzabriskie/axios
[react-chartjs-2]:https://github.com/gor181/react-chartjs-2