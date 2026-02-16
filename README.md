# 🛒 ShoppyGlobe - E-Commerce Application

ShoppyGlobe is a modern, responsive e-commerce web application built using **React** and **Vite**. It features a dynamic product catalog, detailed product views, a fully functional shopping cart managed by Redux, and a seamless checkout experience.

## 🚀 Live Demo
https://shopeeglobe.vercel.app/

## ✨ Features

### 1. Product Management
* **Dynamic Fetching:** Products are fetched from the [DummyJSON API](https://dummyjson.com/products).
* **Search :** A real-time search feature (integrated with Redux) allows users to filter products by title.
* **Detailed Views:** Dynamic routing (`/product/:id`) provides deep-dive information for every item.

### 2. Shopping Cart (Redux Toolkit)
* **Global State:** Centralized cart management using Redux slices.
* **Functionality:** * Add items to the cart.
    * Adjust quantities (with a minimum limit of 1).
    * Remove items or clear the entire cart.
* **Persistence:** Real-time updates across the Home, Cart, and Checkout pages.

### 3. Advanced Routing & Performance
* **CreateBrowserRouter:** Implemented using the modern `createBrowserRouter` API for better data handling.
* **Code Splitting:** Optimized performance using `React.lazy` and `Suspense` for all major page components.
* **Image Optimization:** Lazy loading implemented for product thumbnails to improve initial load times.

### 4. Checkout Process
* **Billing Form:** A sleek checkout form to collect user details.
* **Order Summary:** A final breakdown of items and total cost before purchase.
* **Automated Workflow:** Placing an order clears the Redux cart state and redirects the user to the Home page after a success message.

## 🛠️ Tech Stack
* **Frontend:** React 18 (Vite)
* **State Management:** Redux Toolkit & React-Redux
* **Routing:** React Router DOM v6
* **Styling:** Tailwind CSS 
* **API:** DummyJSON

## 📦 Installation & Setup

Clone the repository:
   ```bash
   git clone https://github.com/Er-Saurabh-Gondane/shopeeglobe.git
   cd shoppyglobe

Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Build for production:

Bash
npm run build