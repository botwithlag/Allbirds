import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from "./redux/store"
import {Provider} from "react-redux"
import ManualThemeSwitcher from './NavBar/ThemeSwitch.tsx';
import './i18n.tsx'
createRoot(document.getElementById('root')!).render(
    



   <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Theme  >
     
      <App />
    
    </Theme>
    </PersistGate>
    
     </Provider>
)
