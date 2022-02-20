/* eslint-disable import/no-anonymous-default-export */
import Home from "../Pages/Home";
import Convenios from "../Pages/Convenios";
import Convenio from "../Pages/Convenio";
import Error404 from "../Pages/Error404";

export default [
    {
        path: "/convenios",
        exact: true,
        page: Convenios,
    },
    {
        path: "/convenio",
        exact: true,
        page: Convenio,
    },
    {
        path: "/",
        exact: true,
        page: Home,
    },
    {
        path: "*",
        exact: true,
        page: Error404,
    },

];