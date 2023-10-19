import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useMainContext } from '../Contexts/MainContext';
import { Sidebar } from './Sidebar';
import { SearchBar } from './SearchBar';

export const Navbar = () => {
  const { sideBar, setSidebar, searchMode, setSearchMode } = useMainContext();

  return (
    <>
    { (!searchMode) ?
    (
    
    <div className='w-full bg-gradient-to-r flex min-h-fit justify-between border-b-6'>
        {sideBar && !searchMode ? <Sidebar /> : null}
      <div className='text-2xl'>
        <button onClick={() => setSidebar(!sideBar)}>
          <MenuIcon />
        </button>
      </div>
      <div>
        <button className='bg-yellow-500 text-black font-bold p-4'>IMDb</button>
      </div>
      <button onClick={() => setSearchMode(true)}>
        <SearchOutlinedIcon />
      </button>
      <button>Sign In</button>
      <button>About</button>

    
     
    
    </div>):<SearchBar/>}
    </>
  );
};
