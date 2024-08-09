
import img1 from "@/public/static/images/img1.png";
import img2 from "@/public/static/images/img2.png";
import img3 from "@/public/static/images/img3.png";
import image from "@/public/static/images/image.png";
import img4 from "@/public/static/images/img4.png";
import img5 from "@/public/static/images/img5.png";
import img6 from "@/public/static/images/img6.png";
import person from "@/public/static/images/person.png";
import logo1 from "@/public/static/logos/Air China.svg";
import logo2 from "@/public/static/logos/Air France.svg";
import logo3 from "@/public/static/logos/EVA Air.svg";
import logo4 from "@/public/static/logos/Japan Airlines.svg";
import logo5 from "@/public/static/logos/Korean Air.svg";
import logo6 from "@/public/static/logos/Emirates.svg";

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
      avatar: person,
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
  const GridData = {
    columns: ["2/12", "2/13", "2/14", "2/15", "2/16"],
    rows: [
      {
        date: "3/7",
        prices: [
          { value: "$837" },
          { value: "$592" },
          { value: "$592" },
          { value: "$837" },
          { value: "$837" },
        ],
      },
      {
        date: "3/8",
        prices: [
          { value: "$837" },
          { value: "$592" },
          { value: "$592" },
          { value: "$837" },
          { value: "$1,308" },
        ],
      },
      {
        date: "3/9",
        prices: [
          { value: "$624" },
          { value: "$592" },
          { value: "$624" },
          { value: "$592" },
          { value: "$592" },
        ],
      },
      {
        date: "3/10",
        prices: [
          { value: "$1,308" },
          { value: "$624" },
          { value: "$624" },
          { value: "$837" },
          { value: "$837" },
        ],
      },
      {
        date: "3/11",
        prices: [
          { value: "$592" },
          { value: "$624" },
          { value: "$1,308" },
          { value: "$837" },
          { value: "$624" },
        ],
      },
    ],
  };
  
  const priceHistoryData = [
    { date: "3/1", price: 700 },
    { date: "3/2", price: 600 },
    { date: "3/3", price: 800 },
    { date: "3/4", price: 750 },
    { date: "3/5", price: 650 },
    { date: "3/6", price: 700 },
    { date: "3/7", price: 850 },
    { date: "3/8", price: 900 },
    { date: "3/9", price: 800 },
  ];
   const flightDetailsData = [
    {
      airline: "Hawaiian Airlines",
      logo: logo1,
      duration: "16h 45m",
      departTime: "7:00AM",
      arriveTime: "4:15PM",
      stops: "1",
      stopInfo: "2h 45m in HNL",
      price: "624",
    },
    {
      airline: "Hawaiian Airlines",
      logo: logo2,
      duration: "16h 45m",
      departTime: "7:00AM",
      arriveTime: "4:15PM",
      stops: "1",
      stopInfo: "2h 45m in HNL",
      price: "624",
    },
    {
      airline: "Hawaiian Airlines",
      logo: logo3,
      duration: "16h 45m",
      departTime: "7:00AM",
      arriveTime: "4:15PM",
      stops: "1",
      stopInfo: "2h 45m in HNL",
      price: "624",
    },
    // Add more flight details here
    {
      airline: "Delta Airlines",
      logo: logo4,
      duration: "10h 30m",
      departTime: "9:30AM",
      arriveTime: "8:00PM",
      stops: "0",
      stopInfo: "Non-stop",
      price: "450",
    },
    {
      airline: "United Airlines",
      logo: logo5,
      duration: "8h 15m",
      departTime: "1:45PM",
      arriveTime: "10:00PM",
      stops: "1",
      stopInfo: "1h 30m in ORD",
      price: "520",
    },
    {
      airline: "American Airlines",
      logo: logo6,
      duration: "12h 10m",
      departTime: "6:00AM",
      arriveTime: "6:10PM",
      stops: "2",
      stopInfo: "2h 30m in DFW, 1h 45m in MIA",
      price: "680",
    },
    {
      airline: "Delta Airlines",
      logo: logo4,
      duration: "10h 30m",
      departTime: "9:30AM",
      arriveTime: "8:00PM",
      stops: "0",
      stopInfo: "Non-stop",
      price: "450",
    },
    {
      airline: "United Airlines",
      logo: logo5,
      duration: "8h 15m",
      departTime: "1:45PM",
      arriveTime: "10:00PM",
      stops: "1",
      stopInfo: "1h 30m in ORD",
      price: "520",
    },
    {
      airline: "American Airlines",
      logo: logo6,
      duration: "12h 10m",
      departTime: "6:00AM",
      arriveTime: "6:10PM",
      stops: "2",
      stopInfo: "2h 30m in DFW, 1h 45m in MIA",
      price: "680",
    },
  ];
  export { deals, uniquePlaces, reviews ,GridData ,priceHistoryData,flightDetailsData};