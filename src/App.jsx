import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Theme from "./theme/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "./route.js";
import Sitemap from './sitemap1.js'

function App() {
 console.log("render App")
  
  return (
      <Theme>
      <GlobalStyle />

      <Routes>
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
      <ToastContainer />
    </Theme>
   
  );
}


export default App;
