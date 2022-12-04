import { AuthContextProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/theme";
import { Login } from "./pages/Login";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <Login />
        </ThemeProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
