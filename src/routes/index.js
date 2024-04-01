import '../App.css';
import * as React from "react";
import Guard from './guard';
import { createBrowserRouter } from "react-router-dom";
import Home from '../components/Home';
import Counter from '../components/Counter';
import ParentComponent from '../components/ParentComponent';
import DataFetcher from '../components/DataFetcher';
import LoginForm from '../components/LoginForm';
import CardContainer from '../components/CardContainer';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
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
  {
    path: "/card-container",
    element: (<Guard><CardContainer/></Guard>),
  },
  {
    path: "/todo-form",
    element: (<Guard><TodoForm/></Guard>),
  },
  {
    path: "/todo-list",
    element: (<Guard><TodoList/></Guard>),
  },
  {
    path: "/edit-todo/:id",
    element: (<Guard><TodoItem/></Guard>),
  },
])

export default router;
