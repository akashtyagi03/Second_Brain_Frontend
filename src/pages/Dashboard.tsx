import { useState } from 'react'
import '../App.css'
import { Button } from '../component/Button'
import { Card } from '../component/Card'
import { CreateContentModel } from '../component/CreateContentModel'
import { PlusIcon } from '../icon/PlusIcon'
import { ShareIcon } from '../icon/ShareIcon'
import { Sidebar } from '../component/Sidebar'

export function Dashboard() {
    const [modalopen, setmodalopen] = useState(false);

    return (
        <div>
            <Sidebar />
            <div className='bg-gray-100 min-h-screen ml-72 pl-4'>
                <div className='flex justify-between'>
                    <div className='pt-5 pl-10'>
                        <h1 className='text-4xl font-bold'>My Brain</h1>
                        <p className='text-sm pt-2 text-gray-500'>You have 32 items in your brain</p>
                    </div>
                    <div className='flex gap-2 pt-10 pr-3 justify-end'>
                        <CreateContentModel open={modalopen} onclosed={() => { setmodalopen(false) }} />
                        <Button starticon={<ShareIcon size="sm" />} variant="primary" size="sm" text="Share Brain" />
                        <Button starticon={<PlusIcon size="md" />} variant="secondary" size="sm" text="Add content" onClick={() => { setmodalopen(true) }} />
                    </div>
                </div>
                <div className='flex gap-2 pt-5'>
                    <Card title='how to build anything' type='twitter' link="https://x.com/Akash_ty_03/status/1965861421109096794" />
                    <Card title='how to build anything' type='youtube' />
                </div>
            </div>
        </div>
    )
}