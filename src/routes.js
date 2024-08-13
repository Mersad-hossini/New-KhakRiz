import React from "react";

import Home from "./Pages/Home/Home";
import Adabiat from "./Pages/Adabiat/Adabiat";
import Soti from "./Pages/Soti/Soti";
import SotiDetalis from "./Pages/SotiDetalis/SotiDetali";
import TextBook from "./Pages/TextBook/TextBook";
import TextBookDetail from "./Pages/TextBookDetails/TextBookDetail";
import Honari from "./Pages/Honari/Honari";
import HonariClip from "./Pages/HonariClip/HonariClip";
import HonariClipDetails from "./Pages/HonariClipDetails/HonariClipDetail";
import HonariRaidoDetail from "./Pages/HonariRaidoDetails/HonariRaidoDetail";
import Library from "./Pages/Library/Library";
import LibraryDetali from "./Pages/libraryDetalis/libraryDetali";
import Majazi from "./Pages/Majazi/Majazi";
import HonariRaido from "./Pages/HonariRaido/HonariRaido";
import Yadman from "./Pages/Yadman/Yadman";
import YadmanDetail from "./Pages/YadmanDetails/YadmanDetail";
import MajaziGallery from "./Pages/majaziGallery/majaziGallery";
import AboutUs from "./Pages/AboutUs/AboutUs";
import SearchResult from "./Pages/SearchResult/SearchResult";

import NotFound from "./Pages/NotFound/NotFound";
import MajaziGaleryDetail from "./Pages/MajaziGaleryDetails/MajaziGaleryDetail";
import MajaziClip from "./Pages/MajaziClip/MajaziClip";
import MajaziClipDetails from "./Pages/MajaziClipDetails/MajaziClipDetail";

let routes = [
  { path: "", element: React.createElement(Home) },

  { path: "/adabiat", element: React.createElement(Adabiat) },
  { path: "/adabiat/soti", element: React.createElement(Soti) },
  { path: "/adabiat/soti/:id", element: React.createElement(SotiDetalis) },

  { path: "/adabiat/textBook", element: React.createElement(TextBook) },
  { path: "/adabiat/textBook/:id", element: React.createElement(TextBookDetail) },

  { path: "/honari", element: React.createElement(Honari) },
  { path: "/honari/honariClip", element: React.createElement(HonariClip) },
  { path: "/honari/honariClip/:id", element: React.createElement(HonariClipDetails) },
  { path: "/honari/honariRaido", element: React.createElement(HonariRaido) },
  { path: "/honari/honariRaido/:id", element: React.createElement(HonariRaidoDetail) },


  { path: "/library", element: React.createElement(Library) },
  { path: "/library/:id", element: React.createElement(LibraryDetali) },

  { path: "*", element: React.createElement(NotFound) },

  { path: "/majazi", element: React.createElement(Majazi) },
  { path: "/majazi/majaziGallery", element: React.createElement(MajaziGallery) },
  { path: "/majazi/majaziGallery/:id", element: React.createElement(MajaziGaleryDetail) },

  { path: "/majazi/majaziClip", element: React.createElement(MajaziClip) },
  { path: "/majazi/majaziClip/:id", element: React.createElement(MajaziClipDetails) },


  { path: "/yadman", element: React.createElement(Yadman) },
  { path: "/yadman/:id", element: React.createElement(YadmanDetail) },

  { path: "/about-us", element: React.createElement(AboutUs) },
  { path: "/search/:title", element: React.createElement(SearchResult) },
];

export default routes;
