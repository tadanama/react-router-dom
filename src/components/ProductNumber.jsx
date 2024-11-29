import React from "react";
import { useParams } from "react-router-dom";

function ProductNumber() {
	const { id } = useParams();
	return <h1>Product {id}</h1>;
}

export default ProductNumber;
