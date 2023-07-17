import { Footer, Header } from '@/components/UI/organisms';
import { createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

const router = createBrowserRouter([
  // {
  //   path: '/login',
  //   element: <Login/>
  // },
  // {
  //   path: '/login',
  //   element: <Login/>
  // }
]);

export const App = () => {
  return (
    <>
      <AuthProvider>
        <Header />

        <Footer />
      </AuthProvider>
    </>
  );
};
