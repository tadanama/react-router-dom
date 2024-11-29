import React from "react";
import { Outlet, Link } from "react-router-dom";

function ProductLayout() {
	return (
		<>
			<br />
			<br />
			<Link to={"/product/new"}>New Product</Link>
			<br />
			<Link to={"/product/1"}>Product 1</Link>
			<br />
			<Link to={"/product/2"}>Product 2</Link>
			<br />

			<Outlet />  {/* Renders the element for the children route (<Product />, <ProductList />, <NewProduct />) */}
		</>
	);
}

export default ProductLayout;
