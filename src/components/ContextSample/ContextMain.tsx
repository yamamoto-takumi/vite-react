// ReactからcreateContextとuseStateをimport
import React, {createContext, useState} from 'react'
import ContextA from './ContextA';

//createContextを使ってUserContextとHobbyContextを作成
export const UserContext = createContext()
export const HobbyContext = createContext()

const ContextMain = () => {
  const [user, setUser] = useState({
    name: 'やまもと',
    age: '26'
  })
  
  const [hobby, setHobby] = useState('ゲーム')
  return (
    <div>
        {/* userContext。Providerを作成、valueにはuserをセット */}
        <UserContext.Provider value={user}>
        {/* HobbyContext.Providerを作成、valueにはhobbyをセット */}
        <HobbyContext.Provider value={hobby}>
          <ContextA/>
        </HobbyContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default ContextMain;