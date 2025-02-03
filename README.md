# E-Commerce Product Filtering & Sorting

This project is a simple e-commerce front-end application that fetches product data from the [FakeStoreAPI](https://fakestoreapi.com/products). It provides features like filtering, sorting, and adding products to a wishlist.

## Features

- **Product Listing**: Displays a list of products fetched from the API.
- **Filters**: Filter products by various categories such as "Ideal For", "Occasion", "Work", "Fabric", "Segment", etc.
- **Sorting**: Sort products by price, popularity, and newest.
- **Wishlist**: Mark products as favorites (wishlist functionality).
- **Customizable Filter**: Option to filter by customizable products.
- **Responsive Layout**: Fully responsive for mobile and tablet devices.

## Tech Stack

- **Frontend**: React.js (with hooks like `useState`, `useEffect`)
- **API**: [FakeStoreAPI](https://fakestoreapi.com/products)
- **CSS**: Plain CSS (no CSS frameworks)
- **Deployment**: Can be deployed to platforms like Netlify or Vercel.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://npmjs.com/) (or [yarn](https://yarnpkg.com/))

### Installation

1. Clone this repository:

   git clone https://github.com/Sarthar01/Appscrip-task-Sarthar_Mohaideen.git
Navigate into the project directory:


cd e-commerce-product-filtering
Install the dependencies:


npm install
Start the development server:


npm start
Open the application in your browser: http://localhost:3000

Open the application in your browser: [http://localhost:3000](http://localhost:3000)

## Usage
Once the app is running locally, you will see the following sections:
- **Filters**: The sidebar on the left allows you to filter the products by categories such as "Ideal For", "Occasion", and more.
- **Product Grid**: The products are displayed in a grid with an option to add them to the wishlist.
- **Sorting**: You can sort the products by different criteria such as price and popularity.

## Customization
You can modify the `filters` object in the `Home.js` file to add more filter categories or update existing ones. You can also change the API to fetch data from another source if desired.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request if you'd like to add features or fix bugs.

## License
This project is licensed under the MIT License—see the LICENSE file for details.

## Acknowledgements
- [FakeStoreAPI](https://fakestoreapi.com/) for providing free product data.
- [React](https://reactjs.org/) for the powerful front-end framework.