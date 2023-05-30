//ReactからuseContextをimport
import React, {useContext} from 'react'
//AppコンポーネントからUserContext, HobbyContextをimport
import { UserContext, HobbyContext } from './ContextMain'


const ContextC = () => {
  //useContextの引数に、UserContextやHobbyContextを渡すことによって、
  //ContextMainコンポーネントでProviderに渡したvalueの値を変数に代入することが出来る
  const user:any = useContext(UserContext)
  const hobby = useContext(HobbyContext)
  return (
    <p>{user.name}{user.age}歳: 趣味は{hobby}です。</p>
  )
}

export default ContextC