
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../../assets/img/review1.jpg'

const testimonials = [
  {
    name: "Isabel del Río",
    comment: "I ordered eggs laid under moonlight, and I swear they taste like dreams. Your farm is a miracle wrapped in feathers and earth.",
    img: 'src/assets/img/review2.jpg'
  },
  {
    name: "Old Man Mateo",
    comment: "The goat cheese reminded me of my childhood, when the wind smelled of honey and magic. Thank you for bringing those memories back.",
    img: 'src/assets/img/review1.jpg'
  },
  {
    name: "Clara & the Twins",
    comment: "We never knew tomatoes could sing until we tried yours. Every bite feels like a sunbeam on the tongue.",
    img: 'src/assets/img/review3.jpg'
  },
  {
    name: "Luciano the Baker",
    comment: "I use your herbs in all my breads now. The customers say they dream of forests after just one slice.",
    img: 'src/assets/img/review4.jpg'
  }
];
const Testimonial = () => {
 var settings = {
    className:"center",
    dots: true,
    infinite: true,
    centerPadding:"60px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 200,
    pauseOnHover: true,
    arrows:false,
    responsive:[
        {
            breakpoint:1024,
            settings:{
                slidesToShow:2,
                centerPadding: "40px",
            },
        },
         {
            breakpoint:640,
            settings:{
                slidesToShow:1,
                centerPadding: "20px",
            },
        },
    ]
  };
  return (
    <section className="py-16 px-4 bg-rosa-fresa"
   
>
        <h2 className="text-3xl font-bold text-center text-rust-brown mb-10">Whispers from Our Happy Folks</h2>
        <div className="slider-container max-w-6xl mx-auto">
            {
            <Slider {...settings}>
                {testimonials.map((item,index)=>(
                    <div key={index} className="px-4 mb-2">
                        <div className="bg-fondo-claro p-6 rounded-lg shadow-md text-center h-full">
                            <img src={item.img} alt={item.name}
                            className="w-40 aspect-square mx-auto rounded-full object-cover mb-5" />
                            <p className="text-gray-700 italic mb-2">{item.comment}</p>
                            <p className="font-semibold text-verde-noche">{item.name}</p>
                            
                        </div>
                    </div>
                ))

                }
            </Slider>
        }

        </div>
        

         


    </section>
     );
}

export default Testimonial