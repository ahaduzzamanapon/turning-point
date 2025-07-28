import React from 'react';
export default function Form({ data, setData, errors }) {
    return (
        <>
            <div className="mb-4"><label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label><input type="text" id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />{errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}</div>
            <div className="mb-4"><label htmlFor="number" className="block text-sm font-medium text-gray-700">Number</label><input type="text" id="number" value={data.number} onChange={(e) => setData('number', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />{errors.number && <div className="text-red-500 text-sm mt-1">{errors.number}</div>}</div>
        </>
    );
}
