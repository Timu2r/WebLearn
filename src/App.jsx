import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from './components/Navibar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx'
import './App.css'
import Introduction from './pages/Введение в JavaScript 1.1'
import Reference from './pages/Справочники и спецификации 1.2'
import Editor from './pages/Редакторы кода 1.3'
import Console from './pages/Консоль разработчика 1.4'
import ScrollToTop from './components/ScrollToTop'
import HelloWorld from './pages/Hello World 2.1'
import StructureCode from './pages/StructureCode 2.2'
import UseStrict from './pages/UseStrict 2.3'
import Variables from './pages/Variables 2.4 '
import DataTypes from './pages/DataTypes 2.5'
import StartPanel from './components/StartPanel.jsx';
import InteractionAlert from './pages/Взаимодействие 2.6.jsx';
import TypeConversion from './pages/TypeConversion 2.7.jsx';
import BasicOperators from './pages/BasicOperators 2.8.jsx';

export default function App() {
  return (
    <Router basename="/WebLearn">
      <ScrollToTop />
      <Navibar />
      <Routes>
        <Route path="/" element={<StartPanel />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Reference" element={<Reference />} />
        <Route path="/Editor" element={<Editor />} />
        <Route path="/Console" element={<Console />} />
        <Route path="/HelloWorld" element={<HelloWorld />} />
        <Route path="/StructureCode" element={<StructureCode />} />
        <Route path="/UseStrict" element={<UseStrict />} />
        <Route path="/Variables" element={<Variables />} />
        <Route path="/DataTypes" element={<DataTypes />} />
        <Route path="/InteractionAlert" element={<InteractionAlert/>} />
        <Route path="/TypeConversion" element={<TypeConversion/>} />
        <Route path="/BasicOperators" element={<BasicOperators/>} />
      </Routes>
      <Footer />
    </Router>
  );
}