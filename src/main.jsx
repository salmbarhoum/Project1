import { StrictMode } from 'react'
import { BrowserRouter} from "react-router-dom"
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './Start/Start.css'
import './SignIn/SignIn.css'
import './SignUp/SignUp.css'
import './Terms/Terms.css'
import './Admin/Home.css'
import './assets/all.min.css'

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
