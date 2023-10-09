import {createBrowserRouter, Navigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Informasi from "./pages/Informasi.jsx";
import ArtikelDetail from "./pages/ArtikelDetail.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import AboutUsDetail from  "./pages/AboutUsDetail.jsx"
import EventDetail from "./pages/EventDetail.jsx";
import Kemahasiswaan from "./pages/Kemahasiswaan.jsx"
import KemahasiswaanDetail from "./pages/KemahasiswaanDetail.jsx";
import Event from "./pages/Event.jsx";
import ProfilEMDSI from "./pages/ProfilEMDSI.jsx";
import ProfilBPMDSI from "./pages/ProfilBPMDSI.jsx";
import Artikel from "./pages/Artikel.jsx";
import Advokasi from "./pages/Advokasi.jsx";
import AdvokasiDetail from "./pages/AdvokasiDetail.jsx";
import Navbar from "./components/Navbarr.jsx";
import Login from "./pages/Login.jsx";
import Registrasi from "./pages/Registrasi.jsx";
import Welcome from "./pages/Welcome.jsx";
import Timeline from "./pages/TimelineOprec.jsx";
import Pendaftaran from "./pages/Pendaftaran.jsx";
import EditPendaftaran from "./pages/EditPendaftaran.jsx";











const router = createBrowserRouter([

  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/pendaftaran',
    element: <Pendaftaran/>
  },
  {
    path: '/edit',
    element: <EditPendaftaran/>
  },

  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/registrasi',
    element: <Registrasi/>
  },
  {
    path: '/dashboard',
    element: <Welcome/>
  },
  {
    path: '/timeline',
    element: <Timeline/>
  },
  {
    path: '/profil-EMDSI',
    element: <ProfilEMDSI/>
  },
  {
    path: '/profil-BPMDSI',
    element: <ProfilBPMDSI/>
  },
  {
    path: '/contact-us',
    element: <Contact/>
  },
  {
    path: '/informasi',
    element: <Informasi/>
  },
  {
    path: '/artikel-detail/:id',
    element: <ArtikelDetail/>
  }
  ,
  {
    path: '/artikel',
    element: <Artikel/>
  }
  ,
  {
    path: '/advokasi-detail/:id',
    element: <AdvokasiDetail/>
  }
  ,
  {
    path: '/advokasi',
    element: <Advokasi/>
  },

  {
    path: '/about-us',
    element: <AboutUs/>
  }
  ,
  {
    path: '/about-us-detail',
    element: <AboutUsDetail/>
  },
  {
    path: '/event-detail/:id',
    element: <EventDetail/>
  },
  {
    path: '/event',
    element: <Event/>
  },
  {
    path: '/kemahasiswaan',
    element: <Kemahasiswaan/>
  },
  {
    path: '/kemahasiswaan-detail/:id',
    element: <KemahasiswaanDetail/>
  },
])

export default router;
