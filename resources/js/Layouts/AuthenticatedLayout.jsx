import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    HomeIcon,
    UsersIcon,
    CogIcon,
    ArrowRightStartOnRectangleIcon,
    Bars3Icon,
    XMarkIcon,
    Squares2X2Icon,
    AcademicCapIcon,
    BuildingOfficeIcon,
    BanknotesIcon,
    ChevronDownIcon,
    RectangleStackIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';

// Re-defining NavLink and DropdownLink here for clarity and to ensure they are used by the Sidebar component
// This is a temporary measure to ensure the full code is available for the write_file command.
// In a real scenario, these would likely be separate components or part of the Sidebar itself.

const NavLink = ({ href, active, children, icon: Icon }) => (
    <Link
        href={href}
        className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 group ${
            active
                ? 'bg-maroon/30 text-white shadow-lg animate-glow' // Maroon accent for active
                : 'text-gray-300 hover:bg-white/5 hover:text-white'
        } border border-white/10 backdrop-blur-sm`} // Glassmorphism border
    >
        <Icon className="mr-3 flex-shrink-0 h-6 w-6 text-gray-300 group-hover:text-white" />
        {children}
    </Link>
);

const DropdownLink = ({ title, children, icon: Icon, active }) => {
    const [isOpen, setIsOpen] = useState(active);

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-left text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-all duration-300 group border border-white/10 backdrop-blur-sm"
            >
                <span className="flex items-center">
                    <Icon className="mr-3 flex-shrink-0 h-6 w-6 text-gray-300 group-hover:text-white" />
                    {title}
                </span>
                <ChevronDownIcon
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-screen' : 'max-h-0'
                }`}
            >
                <div className="pl-8 pr-2 py-2 space-y-1">{children}</div>
            </div>
        </div>
    );
};

// The actual Sidebar component, now with the new design
const Sidebar = () => {
    const { auth, settings } = usePage().props;
    const user = auth.user;
    const currentRoute = route().current();

    const isActive = (routeName) => currentRoute.startsWith(routeName);

    return (
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            <div className="flex flex-col flex-grow bg-black/50 backdrop-blur-xl border-r border-white/10 pt-5 overflow-y-auto shadow-lg"> {/* Darker transparent background */}
                <div className="flex items-center flex-shrink-0 px-4">
                    <Link href="/" className="flex items-center space-x-3">
                        <img className="h-10 w-auto" src="/images/logo.png" alt="Logo" /> {/* Ensure this logo is visible on dark background */}
                        <span className="text-white text-xl font-semibold tracking-wider">
                            {settings.app_name || 'Turning Point'}
                        </span>
                    </Link>
                </div>
                <div className="mt-8 flex-grow">
                    <nav className="px-4 space-y-2">
                        <NavLink href={route('dashboard')} active={isActive('dashboard')} icon={HomeIcon}>
                            Dashboard
                        </NavLink>

                        {user.permissions?.includes('crud-builder-access') && (
                            <NavLink href={route('crud.builder')} active={isActive('crud.builder')} icon={Squares2X2Icon}> {/* Corrected icon */}
                                CRUD Builder
                            </NavLink>
                        )}

                        {user.permissions?.some(p => ['manage-users', 'manage-roles', 'manage-permissions', 'manage-settings'].includes(p)) && (
                            <DropdownLink title="Admin Panel" icon={CogIcon} active={isActive('admin')}>
                                {user.permissions?.includes('manage-users') && <NavLink href={route('admin.users')} active={isActive('admin.users')} icon={UsersIcon}>Users</NavLink>}
                                {user.permissions?.includes('manage-roles') && <NavLink href={route('admin.roles')} active={isActive('admin.roles')} icon={UserGroupIcon}>Roles</NavLink>}
                                {user.permissions?.includes('manage-permissions') && <NavLink href={route('admin.permissions')} active={isActive('admin.permissions')} icon={UserGroupIcon}>Permissions</NavLink>}
                                {user.permissions?.includes('manage-settings') && <NavLink href={route('admin.settings.index')} active={isActive('admin.settings.index')} icon={CogIcon}>Settings</NavLink>}
                            </DropdownLink>
                        )}

                        {user.permissions?.includes('manage-students') && (
                            <NavLink href={route('admin.students.index')} active={isActive('admin.students.index')} icon={AcademicCapIcon}>
                                Students
                            </NavLink>
                        )}

                        {user.permissions?.includes('manage-courses') && (
                            <NavLink href={route('admin.courses.index')} active={isActive('admin.courses.index')} icon={RectangleStackIcon}>
                                Courses
                            </NavLink>
                        )}

                        {user.permissions?.includes('manage-batches') && (
                            <NavLink href={route('admin.batches.index')} active={isActive('admin.batches.index')} icon={BuildingOfficeIcon}>
                                Batches
                            </NavLink>
                        )}

                        {user.permissions?.includes('paymentmethods_view') && (
                            <NavLink href={route('paymentmethods.index')} active={isActive('paymentmethods.index')} icon={BanknotesIcon}>
                                Payment Methods
                            </NavLink>
                        )}

                        {user.permissions?.includes('representatives_view') && (
                            <NavLink href={route('representatives.index')} active={isActive('representatives.index')} icon={UserGroupIcon}>
                                Representatives
                            </NavLink>
                        )}
                    </nav>
                </div>
                <div className="border-t border-white/10 p-4"> {/* Transparent border */}
                    <div className="flex items-center">
                        <img className="h-10 w-10 rounded-full border border-white/20" src={`https://ui-avatars.com/api/?name=${user.name}&background=random`} alt="User Avatar" />
                        <div className="ml-3">
                            <p className="text-sm font-medium text-white">{user.name}</p>
                            <Link href={route('profile.edit')} className="text-xs text-gray-400 hover:text-white">
                                View Profile
                            </Link>
                        </div>
                        <Link href={route('logout')} method="post" as="button" className="ml-auto text-gray-400 hover:text-white">
                            <ArrowRightStartOnRectangleIcon className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default function AuthenticatedLayout({ header, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen"> {/* Background handled by app.css */}
            <Sidebar />
            <div className="md:pl-64 flex flex-col flex-1">
                {/* Mobile sidebar toggle */}
                <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-black/50 backdrop-blur-md border-b border-white/10">
                    <button
                        type="button"
                        className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-maroon"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <main className="flex-1 p-4 md:p-8">
                    {header && (
                        <header className="bg-black/50 dark:bg-black/50 backdrop-blur-xl shadow-lg rounded-xl mb-8 border border-white/10"> {/* Transparent header */}
                            <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 text-white"> {/* Text color for header */}
                                {header}
                            </div>
                        </header>
                    )}
                    {children}
                </main>
            </div>
        </div>
    );
}