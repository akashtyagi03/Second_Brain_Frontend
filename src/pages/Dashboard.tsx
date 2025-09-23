import { useEffect, useState } from 'react'
import '../App.css'
import { Button } from '../component/Button'
import { Card } from '../component/Card'
import { CreateContentModel } from '../component/CreateContentModel'
import { PlusIcon } from '../icon/PlusIcon'
import { ShareIcon } from '../icon/ShareIcon'
import { Sidebar } from '../component/Sidebar'
import { useContent } from '../hooks/useContent'
import { ProfileIcon } from '../icon/ProfileIcon'
import { useNavigate } from 'react-router-dom'

export function Dashboard() {
    const [modalopen, setmodalopen] = useState(false);
    const [profilemodalopen, setprofilemodalopen] = useState(false);
    const {contents, refresh} = useContent();
    const navigate = useNavigate()

    useEffect(()=>{
        refresh()
    },[modalopen])

    const toggleProfileMenu = ()=>{
        setprofilemodalopen(!profilemodalopen)
    }
    
    return (
        <div>
            <Sidebar />
            <div className='bg-gray-100 min-h-screen ml-72 pl-4'>
                <div className='flex justify-between items-center'>
                    <div className='p-5'>
                        <h1 className='text-4xl font-bold'>My Brain</h1>
                    </div>
                    <div className='flex gap-2 pr-3 justify-end'>
                        {/* here we have to use recoil or redux */}
                        <CreateContentModel open={modalopen} onclosed={() => {setmodalopen(false)}} />

                        {/* This div will contain the profile button and the dropdown */}
                        <div className="relative">
                            <Button
                                starticon={<ProfileIcon />}
                                variant="secondary"
                                size="md"
                                text="Profile"
                                onClick={toggleProfileMenu}
                            />
                            {profilemodalopen && (
                                // This menu will only appear if isProfileOpen is true.
                                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => {
                                            // Add your logout logic here
                                            console.log("Logout clicked");
                                            setprofilemodalopen(false); 
                                            navigate("/signin")
                                        }}>Logout</button>
                                </div>
                            )}
                        </div>
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