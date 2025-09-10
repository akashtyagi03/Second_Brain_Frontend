import './App.css'
import { Button } from './component/ui/Button'
import { PlusIcon } from './icon/PlusIcon'
import { ShareIcon } from './icon/ShareIcon'

function App() {

  return (
    <>
     <Button starticon={<PlusIcon size="md" />} variant="primary" size="md" text="Click Me" />
     <Button starticon={<ShareIcon size='md'/>}   variant="secondary" size="md" text="contact Me" />
    </>
  )
}

export default App
