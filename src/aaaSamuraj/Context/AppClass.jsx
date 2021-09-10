import React from 'react'
import AppProvider from './AppContext';

import Button from './Button';
import UserInfo from './UserInfo';

const AppClass = () => (    
        <div>
            <AppProvider>
                <UserInfo />
                <Button />
            </AppProvider>
        </div>            
);
 
export default AppClass;