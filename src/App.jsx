import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from './components/Navibar';
import Home from './Home';
import Footer from './components/Footer.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Introduction from './pages/Theme №1/Введение в JavaScript 1.1.jsx'
import Reference from './pages/Theme №1/Справочники и спецификации 1.2'
import Editor from './pages/Theme №1/Редакторы кода 1.3'
import Console from './pages/Theme №1/Консоль разработчика 1.4'
import ScrollToTop from './components/ScrollToTop'
import HelloWorld from './pages/Theme №2/Hello World 2.1'
import StructureCode from './pages/Theme №2/StructureCode 2.2'
import UseStrict from './pages/Theme №2/UseStrict 2.3'
import Variables from './pages/Theme №2/Variables 2.4 '
import DataTypes from './pages/Theme №2/DataTypes 2.5'
import StartPanel from './components/StartPanel.jsx';
import InteractionAlert from './pages/Theme №2/Взаимодействие 2.6.jsx';
import TypeConversion from './pages/Theme №2/TypeConversion 2.7.jsx';
import BasicOperators from './pages/Theme №2/BasicOperators 2.8.jsx';
import ComparisonOperators from './pages/Theme №2/ComparisonOperators 2.9.jsx';
import ConditionalBranching from './pages/Theme №2/ConditionalBranching 2.10.jsx';
import LogicalOperators from './pages/Theme №2/LogicalOperators 2.11.jsx';
import NullishCoalescing from './pages/Theme №2/NullishCoalescing 2.12.jsx';
import Loops from './pages/Theme №2/Loops 2.13.jsx';
import SwitchStatement from './pages/Theme №2/SwitchStatement 2.14.jsx';
import FunctionsDoc from './pages/Theme №2/FunctionsDoc 2.15.jsx';
import FunctionExpressionDoc from './pages/Theme №2/FunctionExpressionDoc 2.16.jsx';
import ArrowFunctionsDoc from './pages/Theme №2/ArrowFunctionsDoc 2.17.jsx';
import JsFeaturesSummary from './pages/Theme №2/JsFeaturesSummary 2.18.jsx';
import DebuggingInTheBrowser from './pages/Theme №3/DebuggingInTheBrowser 3.1.jsx';
import CodeStyleTips from './pages/Theme №3/CodeStyleTips 3.2.jsx'
import CommentsDoc from './pages/Theme №3/Comments 3.3.jsx';


export default function App() {
  return (
    <Router basename="/WebLearn">
      <ScrollToTop />
      <Navibar />
      <Routes>
      {/* Theme #1 */}
        <Route path="/" element={<StartPanel />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Reference" element={<Reference />} />
      {/* Theme #2 */}
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
        <Route path="/ComparisonOperators" element={<ComparisonOperators/>} />
        <Route path="/ConditionalBranching" element={<ConditionalBranching/>} />
        <Route path="/LogicalOperators" element={<LogicalOperators/>} />
        <Route path="/NullishCoalescing" element={<NullishCoalescing/>} />
        <Route path="/Loops" element={<Loops/>} />
        <Route path="/SwitchStatement" element={<SwitchStatement/>} />
        <Route path="/FunctionsDoc" element={<FunctionsDoc/>} />
        <Route path="/FunctionExpressionDoc" element={<FunctionExpressionDoc/>} />
        <Route path="/ArrowFunctionsDoc" element={<ArrowFunctionsDoc/>} />
        <Route path="/JsFeaturesSummary" element={<JsFeaturesSummary/>} />
      {/* Theme #3 */}
        <Route path="/DebuggingInTheBrowser" element={<DebuggingInTheBrowser/>} />
        <Route path="/CodeStyleTips" element={<CodeStyleTips />} />
        <Route path="/CommentsDoc" element={<CommentsDoc />} />
      </Routes>
      <Footer />
    </Router>
  );
}