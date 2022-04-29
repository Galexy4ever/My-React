import React from "react";
import './App.sass';
import { AuthProvider } from "./hooks/AuthProvider";
import Router from "./pages/Router";

function App() {
    return (   
    <div className="App">
    <AuthProvider>
        <Router /> 
    </AuthProvider>
    </div> 
    ); 
}

export default App;
