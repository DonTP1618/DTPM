
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function PoultryManagerApp() {
  const [eggCount, setEggCount] = useState('');
  const [feedIntake, setFeedIntake] = useState('');
  const [mortality, setMortality] = useState('');
  const [records, setRecords] = useState([]);

  const handleSubmit = () => {
    if (!eggCount || !feedIntake || !mortality) return alert('Please fill all fields');
    setRecords([...records, {
      eggCount: Number(eggCount),
      feedIntake: Number(feedIntake),
      mortality: Number(mortality),
      date: new Date().toLocaleDateString()
    }]);
    setEggCount('');
    setFeedIntake('');
    setMortality('');
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 20 }}>Don Terefck Poultry Manager</h1>
      <div style={{ marginBottom: 20 }}>
        <input
          type="number"
          placeholder="Egg Count (trays)"
          value={eggCount}
          onChange={e => setEggCount(e.target.value)}
          style={{ width: '30%', marginRight: 10, padding: 8, fontSize: 16 }}
        />
        <input
          type="number"
          placeholder="Feed Intake (kg)"
          value={feedIntake}
          onChange={e => setFeedIntake(e.target.value)}
          style={{ width: '30%', marginRight: 10, padding: 8, fontSize: 16 }}
        />
        <input
          type="number"
          placeholder="Mortality"
          value={mortality}
          onChange={e => setMortality(e.target.value)}
          style={{ width: '25%', padding: 8, fontSize: 16 }}
        />
        <button
          onClick={handleSubmit}
          style={{ padding: '8px 16px', marginLeft: 10, fontSize: 16, cursor: 'pointer' }}
        >
          Save Record
        </button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={records}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="eggCount" fill="#4ade80" name="Egg Trays" />
          <Bar dataKey="feedIntake" fill="#60a5fa" name="Feed (kg)" />
          <Bar dataKey="mortality" fill="#f87171" name="Mortality" />
        </BarChart>
      </ResponsiveContainer>
      <p style={{ textAlign: 'center', marginTop: 20, fontStyle: 'italic', color: '#555' }}>
        Enter daily production data and track your poultry farm easily.
      </p>
    </div>
  );
}
