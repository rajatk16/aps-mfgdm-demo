import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import { useAppSelector } from '../hooks';
import profileSvg from '../assets/profile.svg';
import { selectClientId, selectClientSecret, selectProfile, selectThreeLOAuth, useGetUserProfile } from '../redux';
import { useEffect } from 'react';
import { AutodeskIcon } from './AutodeskIcon';

export const Header: React.FC = () => {
  const profile = useAppSelector(selectProfile);
  const clientId = useAppSelector(selectClientId);
  const clientSecret = useAppSelector(selectClientSecret);
  const { access_token } = useAppSelector(selectThreeLOAuth);

  const [getUserProfile] = useGetUserProfile();

  useEffect(() => {
    if (access_token) getUserProfile(undefined);
  }, [getUserProfile, access_token]);

  return (
    <header className="sticky top-0 z-50 p-3 border-bottom bg-black">
      <div>
        <div className="flex justify-between">
          <Link title="Autodesk" to="/" reloadDocument>
            <AutodeskIcon />
          </Link>
          {clientId && clientSecret && (
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="mr-15 flex items-center cursor-pointer">
                <img id="avatarImage" src={profileSvg} alt="mdo" width="32" height="32" className="rounded-circle" />
                {profile?.name && <span className="p-1 align-middle font-base text-white">{profile.name}</span>}
              </MenuButton>
              <MenuItems
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  <MenuItem>
                    <Link
                      to="/credentials"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-1"
                    >
                      Credentials
                    </Link>
                  </MenuItem>
                  {profile && (
                    <>
                      <MenuItem>
                        <Link
                          to="/basecollections"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-1"
                        >
                          Base Collections
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          to="/logout"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-1"
                        >
                          Signout
                        </Link>
                      </MenuItem>
                    </>
                  )}
                </div>
              </MenuItems>
            </Menu>
          )}
        </div>
      </div>
      <div>
        <span className="text-small text-white">MFG Data Model APIs • Demo Application</span>
      </div>
    </header>
  );
};
