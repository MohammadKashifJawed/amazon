const Profile = () => {
  return (
    <div className="h-screen w-full bg-[#9898]">
        <div className="h-2/3 w-full flex flex-col justify-center items-center border-b-2 border-neutral-800 rounded-xl">
            <img src="https://i.pinimg.com/736x/97/8d/fe/978dfe2eed24660a344f07c8784065c8.jpg" alt="ronaldo" className="h-70 w-70 rounded-[50%]" />
            <p className="text-2xl font-bold">Cristiano Ronaldo</p>
            <p className="text-lg">ronaldo@gmail.com</p>
        </div>
        <div className="h-1/3 w-full flex flex-col justify-evenly items-center text-xl font-semibold">
            <p className="h-1/4 w-9/10 bg-neutral-400 flex justify-start items-center pl-5 rounded-xl">Full name:  <span className="font-light pl-5">Cristiano Ronaldo Dos Santos Aviero</span></p>
            <p className="h-1/4 w-9/10 bg-neutral-400 flex justify-start items-center pl-5 rounded-xl">Address: <span className="font-light pl-5">Madeira, Portugal</span></p>
            <p className="h-1/4 w-9/10 bg-neutral-400 flex justify-start items-center pl-5 rounded-xl">Contact: <span className="font-light pl-5">78768890</span></p>
        </div>
      
    </div>
  )
}

export default Profile
