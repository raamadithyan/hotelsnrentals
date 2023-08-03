'use client';

import Container from "../Container"
import Logo from "./Logo";
import Search from "./Search";
import Login from "./Login";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import Categories from "./Categories";
function Navbar() {
  return (
    <div className="fixed w-full  z-0 bg-white  ">
      <div className="py-4 border-b-[1px]">
=======
import Categories from './Categories'
function Navbar() {
  return (
    <div className="fixed w-full  z-0  bg-white shadow-sm border-[1px]   ">
      <div className="py-4 border-b-[1px] shadow-sm ">
>>>>>>> Stashed changes
=======
import Categories from './Categories'
function Navbar() {
  return (
    <div className="fixed w-full  z-0  bg-white shadow-sm border-[1px]   ">
      <div className="py-4 border-b-[1px] shadow-sm ">
>>>>>>> Stashed changes
        <Container>
          <div className="flex items-center shadow-md pb-4 justify-between lg:gap-16 sm:gap-8" >
            <Logo />
            <Search />
            <Login />
          </div>
          <Categories/>
        </Container>

      </div>
    <Categories />

    </div>
  )
}

export default Navbar