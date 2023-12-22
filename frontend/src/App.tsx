import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { DBConnectContext } from "./context/Context";
import Header from "./components/Header";
import DiceGame from "./pages/game/DiceGame";
import Leaderboard from "./pages/leaderboard/Leaderboard";

function App() {
    
    const [dbStatus, setDbStatus] = useState(true);

    return (
        <div>
            <DBConnectContext.Provider
                value={{ dbStatus: dbStatus, setDbStatus: setDbStatus }}
            >
                <Header />
                <Routes>
                    <Route path="/" element={<DiceGame />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                </Routes>
            </DBConnectContext.Provider>
        </div>
    );
}

export default App;
