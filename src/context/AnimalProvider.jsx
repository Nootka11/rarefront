
import { useState , useEffect} from 'react';
import { AnimalContext } from './animalContext'
import axios from "axios";
import { API_URL } from "../../.config.js";


const AnimalProvider = ({ children }) => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAnimals = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/animals`);
           
            setAnimals(res.data);
            setLoading(false);
        } catch (err) {
            console.error("Erreur lors du chargement des animals", err);
        }
    };

      useEffect(() => {
        fetchAnimals();
    }, []);

    return (
        <AnimalContext.Provider value={{ fetchAnimals, loading, animals}}>
            {children}
        </AnimalContext.Provider>
    )
}

export default AnimalProvider