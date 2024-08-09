// This file contains the data for the deals, unique places, reviews, and price history chart.


const deals = [
    {
      city: "The Bund",
      place: "Shanghai",
      price: "$598",
      description: "China’s most international city.",
      image: "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723219853/tripma/zv4wldnkbqxlzdxcj1lk.png",
    },
    {
      city: "Sydney Opera House",
      place: "Sydney",
      price: "$981",
      image:  "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723219848/tripma/aosmkytx6xefmm6psv29.png",
      description: "Take a stroll along the famous harbor",
    },
    {
      city: "Kōdaiji Temple",
      place: "Kyoto",
      price: "$633",
      description: "Step back in time in the Gion district.",
      image:  "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723219849/tripma/kravpp0r3avijry3qgdv.png",
    },
    {
      city: "Tsavo East National Park",
      place: "Kenya",
      price: "$1,248",
      image:  "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723219853/tripma/gmr5ub4hn85mm1cyu7oo.png",
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
      image: "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723219848/tripma/vgcbhgs6ecjhbhssc1rn.png",
    },
    {
      city: "Experience the Ourika Valley in ",
      place: "Morocco",
      image: "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723219840/tripma/ndghiaefivj4gzjf3ba9.png",
      description:
        "Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East.",
    },
    {
      city: "Live traditionally in ",
      place: "Mongolia",
      description:
        "Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel.",
      image: "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723219840/tripma/uovci5bjvybo8skfywlg.png",
    },
  ];
  const reviews = [
    {
      avatar: "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723219894/tripma/logos/gtlozyryieunk6cntedw.svg",
      name: "John Doe",
      location: "New York, USA",
      date: "January 2023",
      rating: 5,
      content:
        "Tripma is amazing! I had a wonderful experience and will definitely use it again.",
    },
    {
      avatar: "https://res.cloudinary.com/dzkj7rogo/image/upload/f_auto,q_auto/v1/tripma/yyuiqu9m0q6ivkc7tqsx",
      name: "Jane Smith",
      location: "London, UK",
      date: "February 2023",
      rating: 4,
      content:
        "Great service and easy to use. Highly recommend Tripma for your travel needs.",
    },
    {
      avatar: "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723233009/tripma/osfyxpjo243ods2simqt.png",
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
      logo: "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723219895/tripma/logos/igzhwxzfkwosb4w7nwgz.svg",
      duration: "16h 45m",
      departTime: "7:00AM",
      arriveTime: "4:15PM",
      stops: "1",
      stopInfo: "2h 45m in HNL",
      price: "624",
    },
    {
      airline: "Hawaiian Airlines",
      logo: "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723219895/tripma/logos/pgrmkeaxfi0fmni3dxni.svg",
      duration: "16h 45m",
      departTime: "7:00AM",
      arriveTime: "4:15PM",
      stops: "1",
      stopInfo: "2h 45m in HNL",
      price: "624",
    },
    {
      airline: "Hawaiian Airlines",
      logo: "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723219892/tripma/logos/u4xemgsschxchzu5ezxk.svg",
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
      logo: "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723219893/tripma/logos/asxxv3p5h5iqfcy16eme.svg",
      duration: "10h 30m",
      departTime: "9:30AM",
      arriveTime: "8:00PM",
      stops: "0",
      stopInfo: "Non-stop",
      price: "450",
    },
    {
      airline: "United Airlines",
      logo: "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723219894/tripma/logos/gtlozyryieunk6cntedw.svg",
      duration: "8h 15m",
      departTime: "1:45PM",
      arriveTime: "10:00PM",
      stops: "1",
      stopInfo: "1h 30m in ORD",
      price: "520",
    },
    {
      airline: "American Airlines",
      logo: "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723219893/tripma/logos/qcsne6nfcakg2xac6z0w.svg",
      duration: "12h 10m",
      departTime: "6:00AM",
      arriveTime: "6:10PM",
      stops: "2",
      stopInfo: "2h 30m in DFW, 1h 45m in MIA",
      price: "680",
    },
    {
      airline: "Delta Airlines",
      logo: "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723219894/tripma/logos/s7c58qu1gdx3mcdgbkfs.svg",
      duration: "10h 30m",
      departTime: "9:30AM",
      arriveTime: "8:00PM",
      stops: "0",
      stopInfo: "Non-stop",
      price: "450",
    },
    {
      airline: "United Airlines",
      logo: "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723219732/dffwtghnm4iwzomhjuzw.svg",
      duration: "8h 15m",
      departTime: "1:45PM",
      arriveTime: "10:00PM",
      stops: "1",
      stopInfo: "1h 30m in ORD",
      price: "520",
    },
    {
      airline: "American Airlines",
      logo: "https://res.cloudinary.com/dzkj7rogo/image/upload/v1723219893/tripma/logos/pivjy59yvpboovzgobd3.svg",
      duration: "12h 10m",
      departTime: "6:00AM",
      arriveTime: "6:10PM",
      stops: "2",
      stopInfo: "2h 30m in DFW, 1h 45m in MIA",
      price: "680",
    },
  ];
  export { deals, uniquePlaces, reviews ,GridData ,priceHistoryData,flightDetailsData};