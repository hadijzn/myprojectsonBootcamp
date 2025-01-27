import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox';
import CardItem from './CardItem';
import "./style.css";

export default function CardList() {
  const [monstersList, setMonstersList] = useState([]);
  const [newMonstersList, setNewMonstersList] = useState([]);

useEffect(() =>{
  const fetchdata = async () =>{
    const req = await fetch ("https://jsonplaceholder.typicode.com/users")
    const data = await req.json();
    setMonstersList(data);
      setNewMonstersList(data);

  } 
  fetchdata()
}, [] );


const handleSearch = (param) => {
  const newMonsters = monstersList.filter((monster) => {
    return monster.name.toLowerCase().includes(param.toLowerCase());
  });
  setNewMonstersList(newMonsters);
};





return (
  <>
    <header className="flex justify-center flex-col items-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHf1Bna1RlWOiy5AAicMxR41zyA64T8dRJTmS9aiZfcwJSloiF1epEShxc7A3BHYu6hA&usqp=CAU"
        alt="logo"
      />
      <SearchBox method={handleSearch} />
    </header>
    <main>
      <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {newMonstersList.map((monster) => {
          return <CardItem key={monster.id} data={monster} />;
        })}
      </section>
    </main>
  </>
);

}