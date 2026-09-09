import React from 'react';

export default function TeamPage() {
  const team = [
    { name: 'Dr. Anita Sharma', role: 'Founder & Director' },
    { name: 'Rajesh Kumar', role: 'Program Coordinator' },
    { name: 'Sunita Devi', role: 'Community Outreach Lead' },
    { name: 'Vikram Singh', role: 'Field Operations' },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8 md:p-24">
      <h1 className="text-5xl font-serif mb-12">Our Team</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <div key={member.name} className="bg-neutral-900 p-8 rounded-3xl border border-white/10">
            <div className="w-24 h-24 bg-neutral-800 rounded-full mb-6 mx-auto"></div>
            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
            <p className="text-neutral-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}