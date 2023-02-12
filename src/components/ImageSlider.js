import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from 'react-icons/rx';
const ImageSlider = () => {
    const slides = [
        { url: 'https://images.unsplash.com/photo-1615761136599-86165bdf1a83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' ,title:'Lobster'},
        { url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' ,title:'Sushi'},
        { url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' ,title:'Pasta'},
        { url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' ,title:'Salmon'},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        currentIndex !== 0 ? setCurrentIndex(currentIndex - 1) : setCurrentIndex(slides.length - 1)
    }
    const nextSlide = () => {
        currentIndex < slides.length - 1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0)
    }

    const goToSlide = (slIndex) => {
        setCurrentIndex(slIndex);
    }

    setInterval(()=>{
        nextSlide();
    },4000)


    return (
        <div className="max-w-[1400px] h-[500px] m-auto   px-4 relative group">
            <div style={{ backgroundImage: `url(${slides[currentIndex].url}` }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-2xl">
            </div>
            <div onClick={prevSlide}>
                <BsChevronCompactLeft size={30} className='hidden hover:scale-125 ease-in-out duration-700 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer' />
            </div>
            <div onClick={nextSlide}>
                <BsChevronCompactRight size={30} className='hidden hover:scale-125 ease-in-out duration-700 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer' />
            </div>
            <div className="flex justify-center py-2">
            
                {slides.map((sl, slIndex) => (

                    <div className='cursor-pointer hover:scale-125 ease-in-out duration-700 text-2xl text-gray-500' key={sl.title} onClick={() => { goToSlide(slIndex) }}>
                        {slIndex === currentIndex && <RxDotFilled size={30} key={sl.url} className='text-black' />}
                        {slIndex !== currentIndex && <RxDotFilled size={30} key={sl.url} />}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;