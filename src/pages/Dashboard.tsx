import { useEffect, useState } from 'react'
import '../App.css'
import { Button } from '../component/Button'
import { Card } from '../component/Card'
import { CreateContentModel } from '../component/CreateContentModel'
import { PlusIcon } from '../icon/PlusIcon'
import { ShareIcon } from '../icon/ShareIcon'
import { Sidebar } from '../component/Sidebar'
import { useContent } from '../hooks/useContent'

export function Dashboard() {
    const [modalopen, setmodalopen] = useState(false);
    const {contents, refresh} = useContent();

    useEffect(()=>{
        refresh()
    }   )

    return (
        <div>
            <Sidebar />
            <div className='bg-gray-100 min-h-screen ml-72 pl-4'>
                <div className='flex justify-between'>
                    <div className='pt-5 pl-10'>
                        <h1 className='text-4xl font-bold'>My Brain</h1>
                    </div>
                    <div className='flex gap-2 pt-10 pr-3 justify-end'>
                        {/* here we have to use recoil or redux */}
                        <CreateContentModel open={modalopen} onclosed={() => {setmodalopen(false)}} />
                        <Button starticon={<ShareIcon size="sm" />} variant="secondary" size="sm" text="Share Brain" />
                        <Button starticon={<PlusIcon size="md" />} variant="primary" size="sm" text="Add content" onClick={() => { setmodalopen(true) }} />
                    </div>
                </div>
                <div className='flex gap-2 pt-5 flex-wrap'>
                    {/* type is define yet, have define them */}
                    {contents.map(({link, title, types})=><Card title={title} types={types} link={link} />)}
                </div>
            </div>
        </div>
    )
}