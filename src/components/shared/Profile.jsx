// ./src/components/shared/Profile.jsx
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@headlessui/react'

function Profile() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                <div className="h-10 w-10 rounded-full bg-rose-200 bg-cover" style={{ backgroundImage: 'url("https://picsum.photos/80")' }}>
                    <span className="sr-only">
                        Hugh Jackman
                    </span>
                </div>
            </MenuButton>
            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems anchor="bottom end"
                    transition
                    className="flex flex-col origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md bg-white ring-1 ring-opacity-5 focus:outline-none">
                    <MenuItem>
                        <a className="hover:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200" href="/profile">
                            Profile
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a className="hover:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200" href="/settings">
                            Settings
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a className="hover:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200" href="/logout">
                            Logout
                        </a>
                    </MenuItem>
                </MenuItems></Transition >


        </Menu >
    );
}

export default Profile;
