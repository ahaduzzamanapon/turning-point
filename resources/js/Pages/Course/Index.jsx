import React from 'react';
import { Link, Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({ data }) {
    const { auth } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Course</h2>}
        >
            <Head title="Course" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold text-xl text-gray-800 leading-tight">Course</h2>
                                {auth.user.permissions.includes('courses_create') && (
                                    <Link href={route('courses.create')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Create
                                    </Link>
                                )}
                            </div>
                            <table className="min-w-full divide-y divide-gray-200 mt-6">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start_Date</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End_Date</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                        {(auth.user.permissions.includes('courses_edit') || auth.user.permissions.includes('courses_delete')) && (
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {data.map((item) => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.start_date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.end_date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
                                            {(auth.user.permissions.includes('courses_edit') || auth.user.permissions.includes('courses_delete')) && (
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    {auth.user.permissions.includes('courses_edit') && (
                                                        <Link href={route('courses.edit', item.id)} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
                                                    )}
                                                    {auth.user.permissions.includes('courses_delete') && (
                                                        <Link href={route('courses.destroy', item.id)} method="delete" as="button" type="button" className="text-red-600 hover:text-red-900 ml-4">Delete</Link>
                                                    )}
                                                </td>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
