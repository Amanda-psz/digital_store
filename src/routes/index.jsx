import App from "../App";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductViewPage";
import ProductLiting from "../pages/ProductListingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, //Layout principal com Heder e Footer
        children: [
            { path: "/", element: <Home /> }, // Página inicial
            { path: "/products", element: <ProductLiting /> }, // Página de produtos
            { path: "/products/:productId", element: <ProductDetails /> }, // Página de detalhes do produto
        ],
    },
]);

 const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default AppRouter;

