import DealsComponent from "@/Components/flights/deals";
import Home from "../home/page";
import img1 from "@/public/static/images/img1.png";
import img2 from "@/public/static/images/img2.png";
import img3 from "@/public/static/images/img3.png";
import image from "@/public/static/images/image.png";
import img4 from "@/public/static/images/img4.png";
import img5 from "@/public/static/images/img5.png";
import img6 from "@/public/static/images/img6.png";
import person from "@/public/static/images/person.png"
import PlacesComponent from "@/Components/flights/places";
import Reviews from "@/Components/flights/reviews";
import {Footer1,Footer2} from "@/Components/footer";

function UniquePlace({ title, image }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} />
    </div>
  );
}

export default function Flights() {
  const deals = [
    {
      city: "The Bund",
      place: "Shanghai",
      price: "$598",
      description: "China’s most international city.",
      image: img2,
    },
    {
      city: "Sydney Opera House",
      place: "Sydney",
      price: "$981",
      image: img3,
      description: "Take a stroll along the famous harbor",
    },
    {
      city: "Kōdaiji Temple",
      place: "Kyoto",
      price: "$633",
      description: "Step back in time in the Gion district.",
      image: img1,
    },
    {
      city: "Tsavo East National Park",
      place: "Kenya",
      price: "$1,248",
      image: image,
      description:
        "Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert.",
    },
  ];

  const uniquePlaces = [
    {
      city: "Stay among the atolls in ",
      place: "Maldives",
      description:
        "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages.",
      image: img4,
    },
    {
      city: "Experience the Ourika Valley in ",
      place: "Morocco",
      image: img5,
      description:
        "Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East.",
    },
    {
      city: "Live traditionally in ",
      place: "Mongolia",
      description:
        "Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel.",
      image: img6,
    },
  ];
  const reviews = [
    {
      avatar:person,
      name: "John Doe",
      location: "New York, USA",
      date: "January 2023",
      rating: 5,
      content:
        "Tripma is amazing! I had a wonderful experience and will definitely use it again.",
    },
    {
      avatar: person,
      name: "Jane Smith",
      location: "London, UK",
      date: "February 2023",
      rating: 4,
      content:
        "Great service and easy to use. Highly recommend Tripma for your travel needs.",
    },
    {
      avatar: person,
      name: "Alice Johnson",
      location: "Sydney, Australia",
      date: "March 2023",
      rating: 3,
      content:
        "Good experience overall, but there is room for improvement in customer support.",
    },
   
  ];

  return (
    <>
      <Home />
      <div className="flex flex-col items-center justify-center w-full">
        <DealsComponent flights={deals} />
        <PlacesComponent places={uniquePlaces} />
        <Reviews reviews={reviews} />
        <Footer1 />
        <Footer2/>
      </div>
    </>
  );
}
