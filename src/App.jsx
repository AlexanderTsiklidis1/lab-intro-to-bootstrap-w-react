import React from 'react';
import Header from './Components/Header';
import Quote from './Components/Quote';
import SearchBar from './Components/SearchBar';
import PostsList from './Components/PostsList';
import LocationTable from './Components/LocationTable';
import Footer from './Components/Footer';
import "./App.css";

const App = () => {
  const data = [
    [
      {
        "id": "63ebd220e80158f7948b8cb4",
        "title": "A Sunny Day in Seattle",
        "content": "Amet proident exercitation minim sint. Culpa pariatur Lorem culpa cupidatat pariatur pariatur sint dolore deserunt. Sint laboris reprehenderit elit duis. Elit dolore laborum elit est cupidatat ipsum Lorem aliqua. Ad ut consequat ad nostrud reprehenderit est laborum pariatur excepteur quis est.\n\nExcepteur proident elit ipsum fugiat. Laboris in Lorem tempor aliqua pariatur nisi eiusmod elit ipsum qui irure in ea laboris. Elit officia sunt ea pariatur laboris voluptate. Ad labore qui nisi Lorem exercitation duis consectetur nulla irure proident qui do nulla excepteur.\n\nEx reprehenderit aliquip id dolor fugiat aute. Est est duis do cupidatat consequat dolore irure. Quis amet anim voluptate minim minim consequat ipsum.",
        "location": "Seattle",
        "createdAt": "2022-04-11T02:58:15.102Z",
        "updatedAt": "2022-04-12T02:58:15.102Z",
        "image": "src/images/seattle.jpg"
    
      },
      {
        "id": "63ebd220e32dc49d8f9d8319",
        "title": "Memory Lane",
        "content": "Quis excepteur mollit veniam enim aliquip ea incididunt voluptate exercitation eiusmod ipsum reprehenderit labore. Sit Lorem officia fugiat dolor veniam qui. Voluptate adipisicing proident eu aute minim ipsum cupidatat aute pariatur. Dolor eiusmod occaecat esse sint aliquip aute. Cillum irure voluptate cupidatat eu enim. Est laborum ad est aute ex irure consectetur esse elit ipsum ex exercitation commodo. Consectetur exercitation esse veniam veniam.\n\nNisi sunt id labore et eu anim ex est proident in eu ea. Elit adipisicing pariatur consequat mollit excepteur tempor ex magna Lorem. Minim tempor pariatur commodo cillum irure Lorem proident commodo duis incididunt esse anim consequat.\n\nEsse amet ullamco aute sunt cillum proident officia officia minim sint dolor. Dolor culpa ad sint consequat fugiat irure consequat sit excepteur pariatur. Amet adipisicing qui labore amet.",
        "location": "Shibuya",
        "createdAt": "2021-04-24T00:48:05.031Z",
        "updatedAt": "2021-04-25T00:48:05.031Z",
        "image": "src/images/shibuya.jpg"
      },
      {
        "id": "63ebd22030bb6b90e4fc0cde",
        "title": "Back to One of my Favorites",
        "content": "Do cillum cupidatat occaecat exercitation ex quis et fugiat enim cupidatat minim laboris. Tempor amet irure deserunt aliqua laboris aute officia aliqua adipisicing eu minim commodo. Tempor sint qui fugiat minim esse officia qui occaecat aliqua enim eu. Culpa culpa velit magna eiusmod cillum proident nisi eiusmod adipisicing. Id ullamco quis sint do ullamco aute tempor voluptate sunt exercitation ut quis id voluptate. Culpa exercitation fugiat minim aliquip amet ullamco aliqua consectetur do sint adipisicing reprehenderit amet.\n\nEx do minim laboris dolore dolor mollit Lorem exercitation irure qui sunt. Est laboris deserunt dolor excepteur id nisi ullamco consectetur laboris veniam veniam in. Anim irure consectetur id exercitation amet id velit est duis dolor ut aliquip adipisicing. Dolore fugiat amet labore ullamco aute nostrud tempor amet enim sunt et adipisicing ut irure. Adipisicing officia occaecat excepteur ex ea sit ullamco. Id consequat veniam non pariatur irure nulla anim fugiat nulla elit est ipsum minim magna.\n\nEst eiusmod enim elit aute irure nisi sit adipisicing proident laborum incididunt aliqua. Amet eu duis quis et consectetur esse magna culpa irure magna officia. Ut reprehenderit est nulla ullamco. Laboris veniam irure laboris aute ut proident ullamco eiusmod ad. Deserunt sint voluptate officia sit magna culpa eiusmod incididunt sit. Laboris commodo excepteur fugiat labore eiusmod sit Lorem adipisicing eu tempor. Deserunt cillum et non enim.",
        "location": "Chicago",
        "createdAt": "2020-05-31T06:13:13.555Z",
        "updatedAt": "2020-06-01T06:13:13.555Z",
        "image" : "src/images/chicago.jpg"
      },
      {
        "id": "63ebd2202af4bd5386e6ea7f",
        "title": "Winter in July",
        "content": "Nulla nulla pariatur incididunt duis duis nisi. Voluptate nulla cillum laboris fugiat et. Sit commodo excepteur cupidatat aliqua pariatur minim cupidatat fugiat excepteur exercitation adipisicing ut ullamco. Ea velit nostrud cillum magna cillum dolore enim aliqua. Laboris amet magna ut aute laboris est commodo ad Lorem eiusmod aute voluptate eu nulla. Magna aute esse consequat ullamco amet elit laborum enim tempor proident. Sunt et laboris nostrud nulla amet officia anim.",
        "location": "San Francisco",
        "createdAt": "2020-02-24T14:28:43.046Z",
        "updatedAt": "2020-02-25T14:28:43.046Z",
        "image": "src/images/san-francisco.jpg"
      },
      {
        "id": "63ebd220b66610086f9643c1",
        "title": "An Unexpected Journey",
        "content": "Amet qui non est commodo velit tempor ut labore qui ea consequat incididunt. Sunt velit ipsum tempor ut nostrud dolore id id velit ullamco laboris. Duis velit culpa occaecat ad sunt adipisicing incididunt. Fugiat irure aliquip quis ad voluptate in in consequat.\n\nEnim aute excepteur sint nisi. Est occaecat consequat dolor commodo tempor consectetur. Qui minim labore officia sunt.",
        "location": "San Diego",
        "createdAt": "2019-11-11T06:58:05.059Z",
        "updatedAt": "2019-11-12T06:58:05.059Z",
        "image": "src/images/san-diego.jpg"
      },
      {
        "id": "63ebd22029ca123e7a31f85d",
        "title": "A Wondrous Gem",
        "content": "Labore labore sunt mollit adipisicing qui. Lorem aliqua amet dolor occaecat ullamco quis. Sit fugiat ipsum est eu ullamco tempor commodo ullamco ex. Est non quis ex deserunt culpa aliquip velit nisi nisi. Dolor enim exercitation ea aute est consectetur ullamco est.\n\nVelit ad aute do ex reprehenderit exercitation officia veniam dolore et. Cupidatat irure cupidatat velit eiusmod dolor exercitation deserunt. Exercitation adipisicing labore excepteur deserunt. Voluptate ea consequat eu dolore reprehenderit proident qui Lorem amet eu. Esse quis non sint ipsum ex et consequat dolor eiusmod dolore. Ipsum consequat ex ipsum excepteur. Est fugiat Lorem cillum ipsum mollit cillum minim minim mollit id.",
        "location": "Sevilla",
        "createdAt": "2019-09-25T19:25:03.664Z",
        "updatedAt": "2019-09-26T19:25:03.664Z",
        "image": "src/images/sevilla.jpg"
      },
      {
        "id": "63ebd22088f2a55c2d895a80",
        "title": "Off the Well-known Path",
        "content": "Veniam duis consequat velit sint consequat ad mollit cillum in aute deserunt est. Ad do cillum velit veniam ullamco ea tempor minim nostrud reprehenderit. Consectetur proident officia deserunt ad veniam nulla pariatur dolor. Est eu est elit ex non quis nisi magna ea sunt incididunt id. Ipsum fugiat sunt consequat incididunt enim. Eu occaecat nulla sit fugiat enim laboris duis pariatur officia nostrud. Cillum cillum laboris velit nostrud velit id id do amet nulla aliquip elit eu pariatur.",
        "location": "Porto",
        "createdAt": "2018-08-12T21:26:36.007Z",
        "updatedAt": "2018-08-13T21:26:36.007Z",
        "image": "src/images/porto.jpg"
      },
      {
        "id": "63ebd2205c0e7d4657b87675",
        "title": "The Sights of Burano",
        "content": "Veniam anim adipisicing tempor nulla dolor laboris incididunt mollit. Magna tempor irure voluptate Lorem in velit cupidatat nulla eiusmod dolor et irure officia aliquip. Esse tempor fugiat irure consectetur labore. Laborum id do eiusmod nulla id eu mollit enim irure veniam labore dolore velit pariatur. Est cillum dolore enim magna esse proident amet est duis enim eu ex occaecat exercitation.\n\nEu quis cupidatat sint eiusmod sunt culpa ad exercitation pariatur sit id. Labore do incididunt ut in esse duis voluptate. Velit duis in velit irure magna anim duis tempor nulla. Ullamco adipisicing fugiat duis laboris velit amet nisi non ea.",
        "location": "Burano",
        "createdAt": "2018-07-21T13:08:50.234Z",
        "updatedAt": "2018-07-22T13:08:50.234Z",
        "image": "src/images/burano.jpg"
      },
      {
        "id": "63ebd2209106910a33825cc3",
        "title": "Across the Pond",
        "content": "Lorem ex enim ut est commodo. Dolore deserunt et mollit ipsum ullamco ex. Mollit deserunt non ex irure occaecat fugiat esse culpa ad fugiat adipisicing duis elit eu. Fugiat velit ut pariatur laborum incididunt amet ex do irure exercitation.\n\nUllamco minim qui non nisi et veniam aliqua pariatur minim. Ut anim enim id est voluptate velit nostrud eiusmod nisi. Consectetur magna nisi deserunt magna non dolor dolor sit nostrud fugiat commodo culpa labore proident.\n\nCupidatat aute aliqua fugiat ipsum elit labore eu duis sit. Elit enim proident reprehenderit non aliqua dolore dolore in irure ipsum ut aliquip amet. Eu amet ad reprehenderit cupidatat. Ullamco ullamco esse incididunt velit nisi nisi.",
        "location": "London",
        "createdAt": "2017-08-30T01:53:15.785Z",
        "updatedAt": "2017-08-31T01:53:15.785Z",
        "image": "src/images/london.jpg"
      },
      {
        "id": "63ebd220c1be914e4c6be929",
        "title": "The Windy City Lives up to its Name",
        "content": "Elit ut sunt id voluptate. Tempor in aliquip enim adipisicing laboris. Ea aute quis nulla in minim. In aute deserunt velit exercitation eu anim ullamco ea duis aliquip Lorem ea nisi. Pariatur aliqua duis exercitation veniam aliquip amet eiusmod labore amet sunt aliquip. Reprehenderit excepteur aliqua ipsum ea proident eiusmod.",
        "location": "Chicago",
        "createdAt": "2017-04-24T00:08:59.679Z",
        "updatedAt": "2017-04-25T00:08:59.679Z",
        "image": "src/images/chicago.jpg"
      },
      {
        "id": "63ebd2206cf20d7205345971",
        "title": "The Busy City of Dubai",
        "content": "Minim nulla labore non aliquip sunt reprehenderit magna velit labore aliqua nostrud officia ea. Dolore laboris veniam labore et et laborum nisi labore amet. Quis non eiusmod commodo aliquip anim velit enim Lorem officia. Pariatur eiusmod ipsum laboris Lorem mollit consectetur nulla reprehenderit eu sint. Sint elit officia fugiat incididunt enim eu.\n\nAdipisicing deserunt irure deserunt nisi qui elit deserunt cillum aliquip fugiat minim ad eiusmod nostrud. Sint veniam nulla est cillum dolore. Minim tempor eiusmod commodo proident. Velit culpa ad aliqua non et anim consequat elit enim.\n\nDo labore sit qui do dolor proident minim velit ut commodo. Lorem nulla nisi exercitation velit deserunt eiusmod ea exercitation dolor proident. Ullamco exercitation cupidatat irure est labore aliquip occaecat adipisicing deserunt ea. Commodo fugiat et ipsum tempor duis mollit sint elit pariatur duis elit. Aliqua duis ea officia reprehenderit. Pariatur voluptate deserunt incididunt nostrud dolor pariatur sint officia quis duis ex. Et laboris sunt est enim veniam voluptate ad mollit tempor.",
        "location": "Dubai",
        "createdAt": "2016-07-17T15:54:15.147Z",
        "updatedAt": "2016-07-18T15:54:15.147Z",
        "image": "src/images/dubai.jpg"
      },
      {
        "id": "63ebd2201302bdafe8dc20cc",
        "title": "My First Trip Abroad",
        "content": "Elit magna aute enim laborum nisi occaecat laboris sint ex cupidatat id commodo non est. Incididunt cupidatat et excepteur quis nostrud cillum est nulla in in laboris dolor quis. Ut anim enim aute sunt mollit non tempor aliquip. Dolore excepteur tempor laborum anim est. Esse laborum anim duis nulla nulla aliquip excepteur officia et velit velit.",
        "location": "Shibuya",
        "createdAt": "2016-01-04T13:35:37.847Z",
        "updatedAt": "2016-01-05T13:35:37.847Z",
        "image": "src/images/shibuya.jpg"
      }
    ]
    
  ];

  // Flatten the nested array
  const flattenedData = [].concat(...data);
  const locationCounts = flattenedData.reduce((counts, post) => {
    const location = post.location;
    counts[location] = (counts[location] || 0) + 1;
    return counts;
  }, {});
  
  const locationData = Object.keys(locationCounts).map((location) => ({
    name: location,
    count: locationCounts[location],
  }));

  return (
    <div className="App">
      <Header />
      <Quote />
      <SearchBar />
      <main>
        <PostsList posts={flattenedData} />
        <LocationTable locations={locationData} />
      </main>
      <Footer />
    </div>
  );
};

export default App;