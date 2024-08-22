// ./src/components/shared/Header.jsx
import SearchBox from '../shared/SearchBox'
import Messages from '../shared/Messages'
import Profile from '../shared/Profile'

function Header() {
    return (
        <div className="flex justify-between items-center bg-white h-16 px-4 border-b border-gray-200">
            <SearchBox />
            <div className="flex flex-row items-center gap-2 mr-2">
                <Messages />
                <Profile />
            </div>
        </div>
    );
}

export default Header;
