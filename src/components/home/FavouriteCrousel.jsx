
import { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default class ImagesCaurosel extends Component {
    render() {
        const data = [
            { img: '/player1.jpg' },
            { img: '/player2.jpg' },
            { img: '/player3.jpg' },
            { img: '/player4.jpg' },
            { img: '/player5.jpg' },
            { img: '/player6.jpg' },
            { img: '/player7.jpg' },
            { img: '/player8.jpg' },
            { img: '/player9.jpg' },
            { img: '/player10.jpg' },
            { img: '/player11.jpg' },
            { img: '/player12.jpg' },
            { img: '/player13.jpg' },
            { img: '/player14.jpg' },
            { img: '/player15.jpg' },
            { img: '/player16.jpg' },
            { img: '/player17.jpg' },
            { img: '/player18.jpg' },
            { img: '/player19.jpg' },
            { img: '/player20.jpg' },
            { img: '/player21.jpg' },
            { img: '/player23.jpg' },
            { img: '/player24.jpg' },
          
        ];


        const settings = {

            dots: true,
            dotsClass: 'slick-dots line-indicator',
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        infinite: true,
                        dots: true
                    }
                }
            ],

            customPaging: (i) => (
                <div className='mt-3 text-xs opacity-0'>{i}</div>
            ),
        };
        return (
            <div className='mt-10 w-full'>
                <Slider {...settings} className='w-full'  >
                    {
                        data.map((val, index) => {
                            return (
                                <div className='px-3 xl-lg:px-1 group mb-10 md:mb-5 relative overflow-hidden cursor-pointer outline-none' key={index}>
                                    <div className='relative'>
                                        <img src={val.img} className='w-full' alt={val.title} />

                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>

            </div>
        );
    }
}