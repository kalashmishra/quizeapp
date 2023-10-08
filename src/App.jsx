import {  Route, Routes, BrowserRouter } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";


function App() {
  return (
    <BrowserRouter>
      
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
              <Typography variant="h2" fontWeight="bold">
                Quiz App
              </Typography>
        </Box>
         <Routes>
      <Route path="/" element ={<Settings />} />
       <Route path="/questions" element ={< Questions />} />
      <Route path="/score" element ={< FinalScreen />} />
     </Routes>
   
      </Container>
    
  
    </BrowserRouter>



    // <BrowserRouter>
    // </BrowserRouter>
  );
}

export default App;