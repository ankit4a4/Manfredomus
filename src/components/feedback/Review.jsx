import { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  // Booking.com Reviews
  const bookingReviews = [
    {
      name: 'Patrick',
      date: '2025-05-21',
      rating: 10,
      text: '☺The collection is truly sympathetic and sincere. The logement is impeccable and soigné. Petit déjeuner copieux et varié. A good time.',
      source: 'Booking.com',
    },
    {
      name: 'Tyler',
      date: '2025-05-14',
      rating: 10,
      text: 'exceptional',
      source: 'Booking.com',
    },
    {
      name: 'Helga',
      date: '2025-05-11',
      rating: 10,
      text: '☺Der Ausblick von unserem Bett auf die Burg.\nThe reichhaltige und qualitativ hochwertige Frühstück\n · Keine Sessel um gemütlich auf Balkon zu sitzen wir',
      source: 'Booking.com',
    },
    {
      name: 'Simone_kushi',
      date: '2025-05-10',
      rating: 10,
      text: 'exceptional',
      source: 'Booking.com',
    },
    {
      name: 'Peter',
      date: '2025-05-10',
      rating: 8,
      text: 'zu Empfehlen!\n · Die besondere Gastfreundlichkeit, die sauberen Räume und das taste Frühstück, sowie der Parkplatz sind optimal für einen Aufenthalt. Abgelegen von den großen Touristen Massen, sehr schöne Lage.',
      source: 'Booking.com',
    },
    {
      name: 'Aloysius',
      date: '2025-05-05',
      rating: 9,
      text: '☺This vanuit de suite was magnificent! There was a big upgrade for 20 euros for the first time! De bedden waren heerlijk!!! En alles prachtig nieuw, smaakvol en mooi ingericht. De hele familie zet zich in voor deze plek, super mooi.\nWe had a great time, we had a great time.\n · Niets',
      source: 'Booking.com',
    },
    {
      name: 'Mary',
      date: '2025-05-04',
      rating: 10,
      text: 'A corner of rural paradise\n · If you happen to go to Mussomeli, then you must choose this structure. It is a corner of paradise immersed in the Sicilian countryside...',
      source: 'Booking.com',
    },
    {
      name: 'Savior',
      date: '2025-05-04',
      rating: 10,
      text: 'exceptional',
      source: 'Booking.com',
    },
    {
      name: 'Julia',
      date: '2025-05-02',
      rating: 10,
      text: 'Comfortable, elegant... with an incredible welcome\n · That idea you have of the legendary warmth of southern Italy? It\'s here. I travel most weeks for work in Italy but have never had an experience like this...',
      source: 'Booking.com',
    },
    {
      name: 'Veronika',
      date: '2025-04-28',
      rating: 10,
      text: 'Exceptional\n · The host was very friendly and hospitable. The breakfast was very tasty and varied. Time spent there was very enjoyable.',
      source: 'Booking.com',
    },
  ];

  // Google Reviews
  const googleReviews = [
    {
      name: 'Alessia Ranzani',
      date: '2025-07-05',
      rating: 5,
      text: 'Our family stay in this property was a wonderful experience. The brand new property has a clean and linear style, but warm and welcoming...',
      source: 'Google',
    },
    {
      name: 'Helen V.',
      date: '2025-07-05',
      rating: 5,
      text: 'We werden heel hartelijk ontvangen in een werkelijk prachtige omgeving... Ik raad het iedereen aan!',
      source: 'Google',
    },
    {
      name: 'Concetta Cavallaro',
      date: '2025-05-04',
      rating: 5,
      text: 'We spent a night at this wonderful property during our little tour of the Sicilian hinterland... Definitely recommended.',
      source: 'Google',
    },
    {
      name: 'Adriana Mento',
      date: '2025-04-27',
      rating: 5,
      text: 'Friendly hosts, available for suggestions on attractions to visit and restaurants to eat at. Excellent breakfast...',
      source: 'Google',
    },
    {
      name: 'Mario Valenti',
      date: '2025-04-27',
      rating: 5,
      text: 'I stayed at this property during a motorbike trip... Super abundant breakfast. The owners are truly wonderful people...',
      source: 'Google',
    },
    {
      name: 'Between Between',
      date: '2025-04-27',
      rating: 5,
      text: 'We arrived in Mussomeli for a short trip... Excellent cleaning. Highly recommended.',
      source: 'Google',
    },
    {
      name: 'claudia ventura',
      date: '2025-04-26',
      rating: 5,
      text: 'Brand new structure with attentive, helpful and courteous staff... Definitely recommended.',
      source: 'Google',
    },
    {
      name: 'Neil Scicluna',
      date: '2025-04-08',
      rating: 5,
      text: 'We absolutely loved our stay at Manfredomus... Highly recommend the place and we are looking forward to another visit!',
      source: 'Google',
    },
    {
      name: 'JF',
      date: '2025-04-08',
      rating: 5,
      text: 'Best accommodation on the whole island. Brand new, lovely rooms, we didn\'t miss anything. All in all a perfect stay...',
      source: 'Google',
    },
  ];

  const [activeSource, setActiveSource] = useState('all');
  const sliderRef = useRef(null);

  // Combine and filter reviews
  const filteredReviews = [
    ...bookingReviews.map(r => ({ ...r, sourceType: 'booking' })),
    ...googleReviews.map(r => ({ ...r, sourceType: 'google' }))
  ].filter(review =>
    activeSource === 'all' ||
    (activeSource === 'booking' && review.sourceType === 'booking') ||
    (activeSource === 'google' && review.sourceType === 'google')
  );

  // Slider settings
  const sliderSettings = {
    ref: sliderRef,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  };

  // Enhanced rating stars with partial filling
  const RatingStars = ({ rating, max = 10 }) => {
    const percentage = (rating / max) * 100;
    return (
      <div className="relative inline-block">
        <div className="flex">
          {[...Array(max)].map((_, i) => (
            <span key={i} className="text-xl text-[#e4ddd4]">
              ★
            </span>
          ))}
        </div>
        <div
          className="absolute top-0 left-0 overflow-hidden whitespace-nowrap"
          style={{ width: `${percentage}%` }}
        >
          <div className="flex">
            {[...Array(max)].map((_, i) => (
              <span key={i} className="text-xl text-[#A5886E]">
                ★
              </span>
            ))}
          </div>
        </div>
        <span className="ml-2 text-sm font-medium text-[#A5886E]">
          {rating}/{max}
        </span>
      </div>
    );
  };

  // Source badge component
  const SourceIcon = ({ source }) => {
    const isBooking = source.includes('Booking');

    return (
      <div className={`flex items-center px-2 py-1 rounded-full ${isBooking ? 'bg-[#f0ebe6]' : 'bg-[#eef0e6]'
        }`}>
        <span className={`text-xs font-medium ${isBooking ? 'text-[#000]' : 'text-[#0F9D58]'
          }`}>
          {source}
        </span>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 bg-[#faf8f5]">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-[#3a352e] mb-4">
          Guest Experiences
        </h2>
        <div className="w-24 h-1 bg-[#A5886E] mx-auto rounded-full"></div>
        <p className="mt-4 text-[#6d6458] max-w-2xl mx-auto">
          Discover what our valued guests have to say about their stays at our property
        </p>
      </div>

      {/* Source Filter Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1 bg-[#ede9e4] rounded-lg">
          {['all', 'booking', 'google'].map((source) => (
            <button
              key={source}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${activeSource === source
                ? 'bg-white text-[#A5886E] shadow-sm'
                : 'text-[#8a7f72] hover:text-[#A5886E]'
                }`}
              onClick={() => {
                setActiveSource(source);
                sliderRef.current?.slickGoTo(0);
              }}
            >
              {source === 'all' ? 'All Reviews' :
                source === 'booking' ? 'Booking.com' : 'Google'}
            </button>
          ))}
        </div>
      </div>

      {/* Combined Reviews Slider */}
      <div className="relative">
        <Slider {...sliderSettings}>
          {filteredReviews.map((review, i) => (
            <div key={`${review.sourceType}-${i}`} className="px-3 py-2 focus:outline-none">
              <div className="bg-white rounded-xl p-6 border border-[#e9e2d9] shadow-[0_10px_30px_rgba(165,136,110,0.08)] hover:shadow-[0_15px_40px_rgba(165,136,110,0.15)] transition-all duration-300 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg text-[#3a352e]">{review.name}</h4>
                    <p className="text-[#8a7f72] text-sm">{review.date}</p>
                  </div>
                  <SourceIcon source={review.source} />
                </div>

                <div className="mb-4">
                  <RatingStars
                    rating={review.rating}
                    max={review.sourceType === 'booking' ? 10 : 5}
                  />
                </div>

                <div className="relative mb-4 flex-grow">
                  <p className="text-[#5a5349] leading-relaxed line-clamp-5">
                    {review.text}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#f1ece5]">
                  <span className="text-xs text-[#8a7f72]">
                    {review.sourceType === 'booking' ? 'Booking.com' : 'Google'} review
                  </span>
                  <button className="text-[#A5886E] font-medium text-sm hover:text-[#8a7157] transition-colors flex items-center group">
                    <span className="mr-1">Read full</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <div className="text-center p-6 bg-white rounded-xl border border-[#e9e2d9]">
          <div className="text-5xl font-serif text-[#A5886E] font-bold mb-2">9.8/10</div>
          <h3 className="text-lg font-semibold text-[#3a352e]">Average Rating</h3>
          <p className="text-[#8a7f72] mt-2">Across all platforms</p>
        </div>

        <div className="text-center p-6 bg-white rounded-xl border border-[#e9e2d9]">
          <div className="text-5xl font-serif text-[#A5886E] font-bold mb-2">98%</div>
          <h3 className="text-lg font-semibold text-[#3a352e]">Guest Satisfaction</h3>
          <p className="text-[#8a7f72] mt-2">Would recommend our property</p>
        </div>

        <div className="text-center p-6 bg-white rounded-xl border border-[#e9e2d9]">
          <div className="text-5xl font-serif text-[#A5886E] font-bold mb-2">250+</div>
          <h3 className="text-lg font-semibold text-[#3a352e]">5-Star Reviews</h3>
          <p className="text-[#8a7f72] mt-2">From our valued guests</p>
        </div>
      </div>

      {/* Custom Dots Styling */}
      <style jsx>{`
        :global(.slick-dots li button:before) {
          color: #d4c9bb;
          font-size: 10px;
          opacity: 1;
        }
        :global(.slick-dots li.slick-active button:before) {
          color: #A5886E;
        }
        :global(.slick-prev:before, .slick-next:before) {
          color: #A5886E;
          font-size: 24px;
        }
        :global(.slick-prev) {
          left: -40px;
        }
        :global(.slick-next) {
          right: -40px;
        }
      `}</style>
    </div>
  );
};

export default Review;