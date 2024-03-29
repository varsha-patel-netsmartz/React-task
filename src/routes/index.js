import '../App.css';
import * as React from "react";
import Guard from './guard';
import { createBrowserRouter } from "react-router-dom";
import Home from '../components/Home';
import Counter from '../components/Counter';
import ParentComponent from '../components/ParentComponent';
import DataFetcher from '../components/DataFetcher';
import LoginForm from '../components/LoginForm';
const router = createBrowserRouter([
  {
    path: "/",
    element: (<Guard><Home/></Guard>),
  },
  {
    path: "/counter",
    element: (<Guard><Counter/></Guard>),
  },
  {
    path: "/parent",
    element: (<Guard><ParentComponent/></Guard>),
  },
  {
    path: "/data-fetcher",
    element: (<Guard><DataFetcher/></Guard>),
  },
  {
    path: "/login-form",
    element: (<Guard><LoginForm/></Guard>),
  },
])

export default router;
