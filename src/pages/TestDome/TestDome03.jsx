import React, { useState } from 'react'

const ImageGallery = ({links}) => {
    const [images, setImages] = useState(links); // aqui pasa el prop a un array local que se llama images

    const removeImage = (indexToRemove) => {
        setImages(images.filter((_, index) => index !== indexToRemove));
        
    }; 
    return(
        <>
        <div className='flex h-[80%] relative overflow-hidden flex-wrap'>
         {images.map((link,index)=>(
            <div key={index} className='h-90 p-5 m-2 relative border border-sky-600 rounded shadow'>
                <img src={link} alt=""  className='h-full object-cover max-h-[200px] w-auto'/>
                <button 
                className='absolute right-2 top-2 px-2 rounded-full border bg-red-600 text-amber-50
                hover:bg-red-900 cursor-pointer'
                onClick={()=>removeImage(index)}
                >
                    X</button>
            </div>
        ))}
        </div>
        </>
       
    )

}
const Product = ({name, votes, onVote }) => {
    

  //    const plus = (votes) => {
  //       return votes+1
  //   // Call props.onVote to increase the vote count for this product
  // };
  // const minus = () => {
  //   // Call props.onVote to decrease the vote count for this product
  // };
    
   

    return(
        <>
        <li className='border border-sky-300 rounded-xl my-5 p-5'>
          <p className='pb-6'>Name:  {name} - Votes : {votes}</p> 
          <div>
            <button className="px-3 py-2 rounded bg-verde-calma hover:bg-verde-pistacho"
            onClick={() => onVote('plus')}>Plus</button>
            <button className="px-3 py-2 rounded bg-naranja-vida hover:bg-rosa-fresa ml-5"
            onClick={() => onVote('minus')}>Menos</button>
        </div>

        </li>
        </>
    )
}

const TestDome03 = () => {
    const links = ['https://acdn-us.mitiendanube.com/stores/001/174/214/products/14701i1-20a7edde69a42e705917126741323708-1024-1024.jpg',
        'https://pegalinas.com/wp-content/uploads/2020/04/galeria-mirado-d.jpg',
        'https://util.com.pe/cdn/shop/files/LAPICES_DE_COLORES_STABILO_X_12_UND._2.png?v=1748874970&width=1445',
        'https://as1.ftcdn.net/jpg/02/41/54/42/1000_F_241544253_ZiNtkAfkqozD5ehb39RZWStGYFKICIpc.jpg'

    ]
    //===========
    //let [products, setProducts] = React.useState(props.products);
 const onVote = (dir, index) => {
    setProducts(prevProducts => {
      return prevProducts.map((product, i) => {
        if (i === index) {
          const updatedVotes = dir === 'plus' ? product.votes + 1 : Math.max(0, product.votes - 1);
          return { ...product, votes: updatedVotes };
        }
        return product;
      });
    });
  };

    const [products, setProducts] = useState([
    { name: "Oranges", votes: 0 },
    { name: "Apples", votes: 0 },
    { name: "Grapes", votes: 0 },
    { name: "Citrons", votes: 0 },
    { name: "Watermelon", votes: 0 },
    { name: "Bananas", votes: 0 }
  ]);
  return (
    <div className='max-w-6xl mx-auto my-10 p-4'>
        <section className='border p-6 my-5 border-sky-300'>
            <h1>Image Gallery PENCILS</h1>
        <ImageGallery links={links}/>
        </section>
        <section className='border p-6 my-5 border-sky-300'>
            <h1>Grocery APP</h1>
            <ul className='flex gap-3 flex-wrap'>
                {products.map((product, index)=>(
                    <>
                    <Product key={index} name={product.name} votes={product.votes}  onVote={(dir) => onVote(dir, index)}/>
                    </>
                ))}
            </ul>
        </section>
        
    
    </div>
  )
}

export default TestDome03