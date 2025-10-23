import React, { useState } from "react";

interface Drink {
  name: string;
  abv: number; // alcohol %
  volume: number; // ml
  time: string;
}

export default function DrinkLogger() {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [name, setName] = useState("");
  const [abv, setAbv] = useState("");
  const [volume, setVolume] = useState("");

  const addDrink = () => {
    if (!name || !abv || !volume) return;
    const newDrink: Drink = {
      name,
      abv: parseFloat(abv),
      volume: parseInt(volume),
      time: new Date().toLocaleTimeString(),
    };
    setDrinks([...drinks, newDrink]);
    setName("");
    setAbv("");
    setVolume("");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Log a Drink</h2>
      <input
        type="text"
        placeholder="Drink (e.g. Beer)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="ABV %"
        value={abv}
        onChange={(e) => setAbv(e.target.value)}
      />
      <input
        type="number"
        placeholder="Volume (ml)"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
      />
      <button onClick={addDrink}>Add</button>

      <h3>Drinks Tonight</h3>
      <ul>
        {drinks.map((d, i) => (
          <li key={i}>
            {d.name} – {d.volume}ml ({d.abv}%) at {d.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
