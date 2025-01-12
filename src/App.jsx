
import { BrowserRouter, Route, Link, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import Layout from "./components/Extra/Layout";



function App() {

  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>} >
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />} ></Route>
      <Route path="/service" element={<ServicePage/>}></Route>
      <Route path="/project" element={<ProjectPage/>}></Route>
      <Route path="/blog" element={<BlogPage/>}></Route>
      <Route path="/contact" element={<ContactPage/>}></Route>
    </Route>
  ))

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
