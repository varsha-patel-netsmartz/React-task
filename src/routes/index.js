import '../App.css';
import * as React from "react";
import Guard from './guard';
import { createBrowserRouter } from "react-router-dom";
import Home from '../components/Home';
import Counter from '../components/Counter';
const router = createBrowserRouter([
  {
    path: "/",
    element: (<Guard><Home/></Guard>),
  },
  {
    path: "/counter",
    element: (<Guard><Counter/></Guard>),
  },
])

export default router;
