import { useContext } from 'react';
import logo from '../assets/amazon-logo.png'
import { CgProfile } from "react-icons/cg";
import { CartContext } from '../contexts/CartContext'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const {cartProducts} = useContext(CartContext)
  return (
    <nav className='h-[10vh] w-full flex justify-between items-center border px-4 bg-blue-950 text-[#999999] font-bold'>
      <img className='h-2/4 w-1/10' src={logo} alt="logo" />
      <ul className='flex justify-evenly items-center gap-4 cursor-pointer'>
        <NavLink to='/'className=' hover:text-white'>Home</NavLink>
        <NavLink to='/about'className=' hover:text-white'>About</NavLink>
        <NavLink to='/contact'className=' hover:text-white'>Contact</NavLink>
      </ul>
      <NavLink to='/cart' className=' hover:text-white cursor-pointer text-lg'>Cart<sup>{cartProducts.length}</sup></NavLink>
      <NavLink to='/profile' className='h-3/4 flex flex-col justify-center items-center cursor-pointer'>
        <CgProfile className='h-2/3 w-2/3' />
        <p>Profile</p>
      </NavLink>
    </nav>
  )
}

export default Navbar
