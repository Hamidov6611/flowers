import { Route, Routes, useLocation } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Theme from "./theme/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "./route.js";
import Sitemap from './sitemap1.js'
import { useState } from "react";
import { ProductsContext } from "./context/ProductContext";

function App() {
  const location = useLocation()
  // console.log(location.pathname)
   const [state, setstate] = useState(JSON.parse(localStorage.getItem('basket')) || [])


   const getData = (data) => {
    setstate(data)
   }
  
  return (
      <Theme>
      <GlobalStyle />
      <ProductsContext.Provider value={{state, setstate, getData}}>

      <Routes>
      {/*<Route exact path="/sitemap.xml" render={sitemap1} />*/}
      {/*<Route exact path="/robots.txt" render={() => <pre>{robotsTxt}</pre>} />*/}
        {routes?.map((c) => (
          <Route
            key={c?.id}
            path={`${c?.path}`}
            title={c?.title}
            element={c?.element}
            logo={c?.logo}
            kor={c?.kor}
          />
        ))}
		  <Route path="/sitemap.xml" element={<Sitemap/>} />
      </Routes>
      </ProductsContext.Provider>
      <ToastContainer />
    </Theme>
   
  );
}

// const robotsTxt = `
// User-agent: admin
// Disallow:
// Sitemap: https://buketyana-admin.ru/api/sayts/sitemap.xml
// `;

export default App;
