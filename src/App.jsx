import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";

import Index from "./ui/pages/index";
import Blog from "./ui/pages/blog";
import Item from "./ui/pages/blog/item";
import Page404 from "./ui/pages/404";

import { ThemeProvider } from "@mui/material/styles";
import theme from './ui/theme/theme';

import { useLayoutEffect } from 'react'

// scroll to top
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}


function App() {
  return (
    <div>
      <ThemeProvider theme={theme} >
        <BrowserRouter>
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Index />} />
                <Route path="blog">
                  <Route index element={<Blog />} />
                  <Route path="item" element={<Item />} />
                </Route>
              </Route>
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Wrapper>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
