import './App.css'
import { Button } from './component/Button'
import { Card } from './component/Card'
import { PlusIcon } from './icon/PlusIcon'
import { ShareIcon } from './icon/ShareIcon'

function App() {

  return (
    <div className='bg-[#f8fafb] min-h-screen'>
      <div className='flex gap-2 bg-[#f8fafb] pt-7 pr-3 justify-end '>
        <Button starticon={<ShareIcon size="sm"/>} variant="primary" size="sm" text="Share Brain" />
        <Button starticon={<PlusIcon size="md"/>} variant="secondary" size="sm" text="Add content" />
     </div>
     <div className='flex gap-2'>
        <Card title='how to build anything'  type='twitter' link={"https://x.com/Akash_ty_03/status/1965861421109096794"}/>
        <Card title='how to build anything'  type='youtube'/>
     </div>
    </div>
  )
}

export default App
