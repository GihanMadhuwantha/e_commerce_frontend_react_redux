
# Shoe Store Web Application

This project is a responsive web application for an online shoe store that allows users to browse, search, and filter shoes by category, price range, and name. It also includes user authentication and a cart functionality for managing shopping items.

## Features

- **Product Search and Filtering**: Users can search and filter products based on name, price range, and category.
- **Responsive Design**: The application is designed to provide a seamless user experience across devices.
- **User Authentication**: Registration and login features with secure password hashing.
- **Shopping Cart**: Add, remove, and manage product quantities in the cart.
- **Persistent State**: The cart and authentication state are saved across page reloads.

## Technologies Used

- **Frontend**: React with TypeScript, Material-UI for styling
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **Password Security**: bcryptjs
 ## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/e_commerce_frontend_react_redux.git

   cd frontend
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm start
## Design Decisions

   - **Material-UI**: Chosen for its comprehensive and responsive components that simplify UI development.
   - **Redux Toolkit**: Used for managing application state efficiently and with minimal boilerplate.
   - **Password Hashing**: Implemented using bcryptjs to ensure secure storage of user credentials.
   
## Special Features

   - **Price Filtering**: Includes pre-defined price ranges and dynamically filters the product list.
   - **Category Filter**: Categories like Running, Casual, Basketball, and Fashion for easy product discovery.
   - **Responsive Product Cards**: Cards adjust dynamically based on screen size to ensure proper alignment.



 





