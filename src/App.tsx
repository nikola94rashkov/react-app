import { Footer, Header } from '@/components/UI/organisms';
import { AuthProvider } from './context/AuthContext';

// const router = createRoutesFromElements(<Route></Route>);

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
