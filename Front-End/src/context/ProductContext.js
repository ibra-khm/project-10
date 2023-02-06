import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {

	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("");

	useEffect(() => {
		axios.get("http://localhost:8000/api/product").then((response) => {
			setProducts(response.data);
			setFilteredProducts(response.data);
		});
	}, []);

	useEffect(() => {
		if (selectedCategory) {
			setFilteredProducts(products.filter(product => product.category === selectedCategory));
		} else {
			setFilteredProducts(products);
		}
	}, [selectedCategory, products]);

	const handleCategorySelection = (selectedCategory) => {
		setSelectedCategory(selectedCategory);
	};

	return (
		<>
			<ProductContext.Provider
				value={{
					products,
					filteredProducts,
					selectedCategory,
					handleCategorySelection
				}}
			>
				{children}
			</ProductContext.Provider>
		</>
	);
}