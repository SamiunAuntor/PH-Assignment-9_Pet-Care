import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';

const HomeLayout = () => {
    return (
        <div>
            <nav>
                <NavBar></NavBar>
            </nav>
            <main className='min-h-screen'>
                <Outlet>
                    
                </Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;