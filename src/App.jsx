import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Userpage from "./components/Userpage";
import Homepage from "./components/Homepage";
import Aboutpage from "./components/Aboutpage";
import Product from "./components/Product";
import ProductList from "./components/ProductNumber";
import NewProduct from "./components/NewProduct";
import ProductLayout from "./components/ProductLayout";

function App() {
	return (
		<>
			<Link to={"/user"}>User</Link>
			<br />
			<Link to={"/about"}>About</Link>
			<br />
			<Link to={"/product"}>Product</Link>
			<br />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/user" element={<Userpage />} />
				<Route path="/about" element={<Aboutpage />} />

				{/* Nested routes */}
				<Route path="/product" element={<ProductLayout />}>
				{/* Renders <ProductLayout /> before any children element below  */}
				{/* Element for the route below renders at the point where <Outlet /> is defined inside <ProductLayout /> */}
				{/* If is not defined, then the element below won't render*/}
					<Route index element={<Product />} />
					<Route path=":id" element={<ProductList />} />
					<Route path="new" element={<NewProduct />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
