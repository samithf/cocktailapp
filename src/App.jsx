import { AppContextProvider } from "./context/appContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  );
}

export default App;
