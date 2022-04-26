import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from './ui/theme/theme';
import { useLayoutEffect } from 'react'
import { Navbar } from "./components/header";
import { Footer } from "./components/footer";
import { Index } from "./components/home";

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
            <Navbar />
            <Routes>
              <Route path="/">
                <Route index element={<Index />} />
              </Route>
            </Routes>
            <Footer />
          </Wrapper>

        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
