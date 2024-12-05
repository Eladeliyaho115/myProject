import { createContext, useContext, useState } from 'react';
import Navbar from '../components/Navbar';

//לייצר לי מרחב וירוטאלי משותף בו אני אשמור דברים
const NavbarContext = createContext();

//הוא פותח את הגישה לנאב-בר-עמוס קונטקסט
export const useNavbarContext = () => useContext(NavbarContext);

const HomePage = () => {
    const [user, setUser] = useState({ username: 'ErezIzKing' });
    const [fontSize, setfontSize] = useState(16); 

    setUser();
    //prop-drilling
    return (
        <div>
            <NavbarContext.Provider value={{ user }}>
                <Navbar />
            </NavbarContext.Provider>
            <label htmlFor="">{fontSize}px</label>
            <input
                type="range"
                value={fontSize}
                min={8}
                max={32}
                onChange={(e) => setfontSize(Number(e.target.value))}
            />
        </div>
    );
};

export default HomePage;
