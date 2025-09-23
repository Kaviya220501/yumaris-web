const NavBar=() => {
  return (
<div className="flex justify-between items-center px-12 py-5 bg-white/10 backdrop-blur-sm border-b border-white/10  shadow-md sticky top-0 z-50">
      <div className="text-2xl font-bold bg-gradient-to-r from-[#4973f2] via-[#5a49cf] to-[#7633d5] bg-clip-text text-transparent">Yumaris Agency</div>
      <ul className="flex gap-10 ">
        <li><a href="home" className="text-white hover:text-blue-500">Home</a></li>
        <li><a href="donate" className="text-white hover:text-blue-500">About</a></li>
        <li><a href="viewchildren" className="text-white hover:text-blue-500">Service</a></li>
        <li><a href="organisation" className="text-white hover:text-blue-500">Contact</a></li>
      </ul>
    </div>

  )
}
export default NavBar

