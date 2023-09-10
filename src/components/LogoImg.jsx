import React from 'react'
import { GithubOriginal, JavascriptOriginal,
PythonOriginal,
ReactOriginal} from 'devicons-react'
const LogoImg = () => {
  return (
    <div className=' flex gap-4'>
    <JavascriptOriginal size="4rem" />
    <PythonOriginal size="4rem" />
    <ReactOriginal size="4rem" />
    <GithubOriginal size="4rem" className=' bg-white'/>
    
    </div>
  )
}

export default LogoImg