// ./src/components/shared/Messages.jsx
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { HiOutlineChatAlt } from "react-icons/hi";

function Messages() {
    return (
        <Popover>
            <PopoverButton className="data-[active]:bg-gray-100 hover:bg-gray-100 p-1.5 rounded-sm inline-flex items-center text-gray-700 focus:outline-none active:bg-gray-900">
                <HiOutlineChatAlt fontSize={24} />
            </PopoverButton>
            <PopoverPanel
                transition
                anchor="bottom"
                className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0" >

                <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">Messages</strong>
                    <div className="mt-2">
                        This is the panel
                    </div>
                    <div>
                        This is the panel
                    </div>
                </div>

            </PopoverPanel>
        </Popover>
    );
}

export default Messages;
