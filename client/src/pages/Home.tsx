import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main>
        <div className="navbar navigasi h-28"/>
        <div className="ml-40 mt-24 font-noto-sans-jp">
          <h1 className="text-5xl font-bold">
            share your 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"> story </span>
            around the 🌍?.
          </h1>
          <h1 className="text-5xl font-bold">
            with 
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-teal-800 via-teal-600 to-slate-400"> blogger </span>
            you can do that❗❗
          </h1>
          <div className="w-2/4 my-2">
            <p className="text font-bold text-sm font-sans">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quo, nam similique exercitationem commodi omnis recusandae, sapiente adipisci, quia porro impedit quisquam ad odio aspernatur tempore repellat velit eos id ab minus nulla! Quidem, quo amet? Maiores eaque necessitatibus repellendus saepe, provident quia id itaque, laboriosam quae dignissimos accusantium non?
            </p>
            <Link to='/login' className="btn btn-neutral px-10 font-bold my-8">Get Started</Link>
          </div>
        </div>
    </main>
  )
}

export default Home
