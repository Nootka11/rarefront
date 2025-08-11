
import { useState , useEffect} from 'react';
import axios from "axios";
import { API_URL } from "../../.config.js";
import { VegetableContext } from './VegetableContext.jsx';


const VegetableProvider = ({ children }) => {
    const [vegetables, setVegetables] = useState([]);
    // const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchVegetables = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/Vegetables`);
           
            setVegetables(res.data);
            // const uniqueCategories = [...new Set(res.data.map(v => v.category))];
            // setCategories(uniqueCategories);
            setLoading(false);
        } catch (err) {
            console.error("Erreur lors du chargement des Vegetables", err);
        }
    };

      useEffect(() => {
        fetchVegetables();
    }, []);

    useEffect(() => {
        if (vegetables) {
            localStorage.setItem('vegetables', JSON.stringify(vegetables));
        }
        }, [vegetables]);

    return (
        <VegetableContext.Provider value={{ fetchVegetables, loading, vegetables }}>
            {children}
        </VegetableContext.Provider>
    )
}

export default VegetableProvider