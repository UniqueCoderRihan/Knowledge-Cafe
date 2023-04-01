import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a href='/Home' className="btn btn-ghost normal-case text-2xl">Programming Cafe</a>
                </div>
                
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                    
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            
                            <div className="w-10 rounded-full">
                                <img src="https://scontent.fcgp32-1.fna.fbcdn.net/v/t39.30808-6/330530741_228147783058710_1860295800557712112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEN3gAI3U1m7MtzXHo394lwwI1f-Ela4wLAjV_4SVrjAnhlZmEnZbUGlcOSzVssV6_FFeiodFeJP4LKbPrInwIl&_nc_ohc=2fWZ2bJrBx0AX_ALALX&_nc_ht=scontent.fcgp32-1.fna&oh=00_AfCdpcNumEXUEKISL80dYix9JfltRXHt-Myl5c5buXdWfg&oe=6429D1EE" alt="" />
                            </div>
                        </label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;