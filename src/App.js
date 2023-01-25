import {BrowserRouter, Route} from 'react-router-dom'
import Routes from './routes';
import AuthProvider from './contexts/auth';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes/>
         <div >
        
         </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
