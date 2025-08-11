
import { useState , useEffect} from 'react';
import axios from "axios";
import { API_URL } from "../../.config.js";
import { ProductContext } from './ProductContext.jsx';


const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/products`);
           
            setProducts(res.data);
            const uniqueCategories = [...new Set(res.data.map(p => p.category))];
            setCategories(uniqueCategories);
            setLoading(false);
        } catch (err) {
            console.error("Erreur lors du chargement des Products", err);
        }
    };

      useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ fetchProducts, loading, products, categories }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider