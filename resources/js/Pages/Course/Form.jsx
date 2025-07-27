import React from 'react';
export default function Form({ data, setData, errors }) {
    return (
        <>
            <div className="mb-4"><label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label><input type="text" id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />{errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}</div>
            <div className="mb-4"><label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label><input type="text" id="amount" value={data.amount} onChange={(e) => setData('amount', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />{errors.amount && <div className="text-red-500 text-sm mt-1">{errors.amount}</div>}</div>
            <div className="mb-4"><label htmlFor="start_date" className="block text-sm font-medium text-gray-700">Start_Date</label><input type="date" id="start_date" value={data.start_date} onChange={(e) => setData('start_date', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />{errors.start_date && <div className="text-red-500 text-sm mt-1">{errors.start_date}</div>}</div>
            <div className="mb-4"><label htmlFor="end_date" className="block text-sm font-medium text-gray-700">End_Date</label><input type="date" id="end_date" value={data.end_date} onChange={(e) => setData('end_date', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />{errors.end_date && <div className="text-red-500 text-sm mt-1">{errors.end_date}</div>}</div>
            <div className="mb-4"><label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label><input type="text" id="status" value={data.status} onChange={(e) => setData('status', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />{errors.status && <div className="text-red-500 text-sm mt-1">{errors.status}</div>}</div>
            <div className="mb-4"><label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label><textarea id="description" value={data.description} onChange={(e) => setData('description', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>{errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}</div>
        </>
    );
}
