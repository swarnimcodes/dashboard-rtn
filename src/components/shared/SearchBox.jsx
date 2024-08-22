// ./src/components/shared/SearchBox.jsx
import { HiOutlineSearch } from 'react-icons/hi'

function SearchBox() {
    return (
        <div className="relative">
            <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />
            <input type="text" placeholder="Search" className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 px-2 pl-11" />
        </div>
    );
}
export default SearchBox;
