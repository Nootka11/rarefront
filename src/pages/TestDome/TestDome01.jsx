import React, { useState } from 'react'

const TestDome01 = () => {

  const [formData, setFormaData] = useState({
    type: "standard",
    weight: "",
    totalPrice: 0,
  });

  

  const PRICE_PER_KG = 10;

  const getDiscount = (type, weight) => {
    switch (type) {
      case "standard":
        return 0.06;
      case "seasonal":
        return 0.12;
      case "weight":
        if (parseFloat(weight) >= 10) return 0.18;
        return 0.06;
      default:
        return 0;
    }
  };

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormaData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('datos del form :', formData); 
    
  };

const numericWeight = parseFloat(formData.weight) || 0;
const numericTotalPrice = parseFloat(formData.totalPrice) || 0;
const discount = getDiscount(formData.type, numericWeight);
const discountedPrice = (numericTotalPrice * (1 - discount)).toFixed(2);
//============
const [form2, setForm2] = useState({
  precioBase:"",
  tax:"",
});
const onChange2 = (e) =>{
 const {name, value} = e.target;
 setForm2((prev) =>({
  ...prev,
  [name]:value,
 }))
}
  const handleSubmit2 = (e) => {
    
    e.preventDefault();
    console.log(form2); 
    
  };
  const getTax = (tax) =>{
    switch (tax) {
      case "normal":
        return 0.21;
      case "reducido":
        return 0.1;
      case "superReducido":
        return 0.04;
      default:
        return 0

  }};
  const theTax = getTax(form2.tax);
  const precio = parseFloat(form2.precioBase);
  const iva = parseFloat(form2.precioBase * theTax)
  const totalIva = precio + iva;

  //=============
  const [form3, setForm3] = useState({
    precio:0,
    cupon:"",
  })
  const onChange3 = (e) =>{
    const {name, value} = e.target;
    setForm3((prev)=>({
      ...prev,
      [name]:value
    }))
  }
const getDiscount3 = (cupon) =>{
  switch(cupon) {
    case ('SAVE10'):
      return 0.1;
    case ('SAVE20'):
      return 0.2;
    case ('SUPER30'):
      return 0.3;
    default:
      return 0
  }
}
  const Submit3 = (e) => {
    e.preventDefault()
   
  }
  const discount3 = getDiscount3(form3.cupon);
 
  const precioNumber= parseFloat(form3.precio) || 0;
  const preciofinal3 = precioNumber * (1 - discount3);

  //=====================
  const [data4, setData4] = useState({
    precio:'',
    iva:'',
    coupon:''
  })

  const getIva = (tax) =>{
    switch (tax) {
      case 'normal':
        return 0.21;
      case 'reducido':
        return 0.1;
      case 'superReducido':
        return 0.04;
      default:
        return 0.21

    }
  }
  const getDiscount4 = (coupon) => {
    switch (coupon) {
      case 'SAVE10':
        return 0.1;
      case 'SAVE20':
        return 0.2;
      case 'SUPER30':
       return 0.3;
      default:
        return 0
    }
  }

  const onChange4 = (e)=>{
    const {name, value} = e.target;

    setData4((prev)=>({
      ...prev,
      [name]:value,
    }))
  }
const Submit4 = (e) =>{
  e.preventDefault();
  console.log(data4)
}
const precio4Numero = parseFloat(data4.precio) || 0;
const discount4 = getDiscount4(data4.coupon);
const tax4 = getIva(data4.iva);
// const precioFinal4 = precio4Numero * (1 - discount4)
const montantIva = precio4Numero * tax4;
const precioConIva = precio4Numero + montantIva;
const precioFinal4 = +(precioConIva * (1 - discount4)).toFixed(2);
const getShippingCost = (total) =>{
  
    if (total > 100){
      return 0;
    }else {
        return 15;
    }
  }
const shippingCost = getShippingCost(precioFinal4);
const precioConPortes = precioFinal4 + shippingCost;
 
  return (
    <div className='max-w-6xl mx-auto p-6'>
      <h1 className='text-6xl'>Test Dome</h1>

      <section className='hidden border m-1 p-2 rounded'>
        <h2>Test 01</h2>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <label htmlFor="type">Select Type:</label>
          <select id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              >
            <option value="standard">Standard</option>
            <option value="seasonal">Seasonal</option>
            <option value="weight">Weight</option>
          </select>

          <label htmlFor="weight">Weight (kg):</label>
          <input 
           id="weight"
            name="weight"
            type="number"
            value={formData.weight}
            onChange={handleChange}
            step="0.01" />

          <label htmlFor="totalPrice">Total Price ($):</label>
          <input  id="totalPrice"
            name="totalPrice"
            type="number"
            value={formData.totalPrice}
            onChange={handleChange}
            step="0.01" />
             <button type="submit" className='py-3 px-6 rounded bg-verde-pistacho'>Enviar</button>

          <div>Discounted price: <span id="discountedPrice">{discountedPrice}</span></div>
        </form>

      </section>
      <section  className='hidden border m-1 p-2 rounded'>
        <h2>Prueba dos</h2>
        <form action="" onSubmit={handleSubmit2}>
          <div>
            <label htmlFor="precioBase">Precio Base: </label>
            <input id="precioBase" type="text" name="precioBase" onChange={onChange2} value={form2.precioBase}/>

          </div>
          <div>
            <label htmlFor="precioBase">Tax </label>
            <select name="tax" id="" onChange={onChange2} value={form2.tax}>
              <option value="normal">Normal</option>
              <option value="reducido">Reducido</option>
              <option value="superReducido">Super reducido</option>
            </select>
          </div>
          
          <button className='w-52 rounded-2xl py-3 px-6 bg-verde-pistacho'>Ver el Total con el IVA</button>
        </form>
        <p>{form2.precioBase} + {iva}</p>
        <span>Precio Total con IVA : {totalIva}</span>
      </section>

      <section className='border rounded m-1 p-6'>
        <h2>Ejercicio 3</h2>
        <form action="" onSubmit={Submit3}>
          <div><label htmlFor="Precio">Precio</label>
          <input type="number" name='precio' value={form3.precio} onChange={onChange3} className='border px-2'/></div>
          <div><label htmlFor="Cupon">Cupon</label>
          <input type="text" name='cupon' value={form3.cupon} onChange={onChange3} className='border px-2'/>
          </div>
          <button>Enviar</button>
          <div>Precio final : <span>{preciofinal3}</span></div>
        </form>
      </section>

      <section>
        <form action="" onSubmit={Submit4}>
          <div className='my-3'>
            <label htmlFor="precioBase" className='font-bold mr-2'>Precio base</label>
            <input type="text" name="precio" className='border px-2' onChange={onChange4} value={data4.precio}/>
          </div>
          <div className='my-3'>
            <label htmlFor="tax" className='font-bold mr-2'>Tipo de IVA</label>
            <select type="text" name="iva"  className='border px-2' onChange={onChange4} value={data4.iva}>
           
              <option value="normal">Normal</option>
              <option value="reducido">Reducido</option>
              <option value="superReducido">Super Reducido</option>
            </select>
            </div>
          <div className='my-3'>
            <label htmlFor="coupon" className='font-bold mr-2'>Cupon : </label>
            <input type="text" name="coupon"  className='border px-2' onChange={onChange4} value={data4.coupon}/>
            </div>
            <button className='bg-verde-pistacho hover:bg-verde-pistacho py-3 px-5 rounded-2xl'>Enviar</button>
        </form>
        <div className='font-bold mt-5 text-xl'>Precio final : <span>{precioFinal4}</span></div>
        <div className="font-bold">Precio con Portes: <span>{precioConPortes}</span></div>
        
      </section>
    </div>
  )
}

export default TestDome01