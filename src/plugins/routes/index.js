export default [
  {
    path: "/",
    component: require("view/Home").default,
    exact: true
  },
  {
    path: "/detail/:id",
    component: require("view/Detail").default,
    exact: true
  },
  {
    path: "/*",
    component: require("view/NotFound").default,
    exact: true
  }
];
