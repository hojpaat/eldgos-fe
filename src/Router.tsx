import HomePage from './HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DrawerAppBar from './Nav'
import Test from './Test';


export default function Router() {
    return (
        <BrowserRouter>
            <DrawerAppBar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/test' element={<Test />} />
            </Routes>
        </BrowserRouter>
    )
}