import React from 'react'
import Header from './pages/Header'
import Main from './pages/Main'
import Sidebar from './pages/Sidebar';
// export default function App() {
//   return (
//     <div className='  text-white w-screen'>
//       <Header />
//       <div className='flex flex-1'>
//         <aside className="w-1/5 bg-[rgba(43,43,43,255)] p-4 shadow-lg border-t-2 border-black ">
//         <Sidebar/>
//         </aside>
//         <main className=" p-4 bg-[rgba(3,3,3,1)] h-screen w-screen">
//           <Main />
//         </main>
//       </div>
//     </div>
//   );
// }
export default function App() {
  return (
    <div className="flex flex-col h-screen w-screen text-white">
      <Header />
      <div className="flex flex-1">
        <aside className="w-1/5 bg-[rgba(43,43,43,255)] p-4 shadow-lg border-t-2 border-black">
          <Sidebar />
        </aside>
        <main className="flex-1 p-4 bg-[rgba(3,3,3,1)]">
          <Main />
        </main>
      </div>
    </div>
  );
}
