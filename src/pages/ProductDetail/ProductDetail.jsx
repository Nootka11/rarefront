
import { useContext } from "react";
import { useParams } from "react-router";
import { ProductContext } from "../../context/ProductContext";
import { API_URL } from "../../../.config";
import AnimatedButton from "../../components/Animations/AnimatedButton";

function ProductDetail() {
  const { id } = useParams();

  const { products } = useContext(ProductContext);

  const product = products.find((p) => p._id === id);
  

  if (!product) {
    return <div>Producto no encontrado</div>; // Puedes mostrar un spinner o redireccionar si quieres
  }

  // Aquí puedes usar `id` para hacer fetch o filtrar el producto
  // Por ejemplo: fetchProductById(id) o buscar en tu lista

  return (
   
    <section className="w-full md:max-w-7xl mx-auto py-10 px-8">
        <div className="flex flex-col-reverse md:flex-row md:h-96 gap-10">
            <div className="md:w-1/2 md:px-10 md:pt-6 md:h-96 flex flex-col justify-around"> 
                <h1 className="md:my-5 text-4xl md:text-6xl"> {product.name}</h1>
                <p>{product.description}</p>
                <p className="border-y p-3 border-y-verde-calma my-6">
                    <span className="font-bold text-verde-noche">Price: </span> 
                    <span className="text-xl">{product.price} €
                        </span></p>
                        
                            <AnimatedButton text="Buy Now" type='orange' size='big'/>

                        
                
            </div>
            <div className="md:w-1/2">
                <img src={`${API_URL}${product.imageUrl}`} alt="" className='md:h-96 w-full object-cover rounded-xl' />
            
            </div>

        </div>
     
      {/* Mostrar info del producto */}
    </section>
  );
}

export default ProductDetail;
