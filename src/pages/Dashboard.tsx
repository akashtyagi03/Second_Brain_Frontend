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
import { Sharelinkmodel } from '../component/Sharelinkmodel'
import { BACKEND_URL } from '../config'
import axios from 'axios'

interface DashboardProps {
    hash: string,
    setHash: (hash: string) => void
    username: string
}

export function Dashboard(props: DashboardProps) {
    const [modalopen, setmodalopen] = useState(false);
    const [shredlinkmodel, setSharedlinkmodel] = useState(false);
    const [profilemodalopen, setprofilemodalopen] = useState(false);
    const { contents, refresh } = useContent();
    const navigate = useNavigate()
    // const [hash, setHash] = useState("")
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        refresh()
    }, [modalopen])

    const toggleProfileMenu = () => {
        setprofilemodalopen(!profilemodalopen)
    }

    return (
        <div className='flex'>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
            <div className='flex-1 bg-gray-100 min-h-screen transition-all duration-300 ease-in-out'>
                <div className='flex justify-around items-center'>
                    <div className='p-5'>
                        <h1 className='text-4xl font-bold'>All Notes</h1>
                    </div>
                    <div className='flex gap-2 pr-3 justify-end'>
                        {/* here we have to use recoil or redux */}
                        <CreateContentModel open={modalopen} onclosed={() => { setmodalopen(false) }} />
                        <Sharelinkmodel open={shredlinkmodel} hash={props.hash} onclosed={() => { setSharedlinkmodel(false) }} />

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
                        <Button starticon={<ShareIcon size="sm" />} variant="secondary" size="sm" text="Share Brain" onClick={async () => {
                            try {
                                const response = await axios.get(`${BACKEND_URL}/brain/share`, {
                                    params: { share: true }, // query params
                                    headers: {
                                        "Authorization": `${localStorage.getItem("token")}`
                                    }
                                })
                                props.setHash(response.data.hash)
                                setSharedlinkmodel(true)
                            } catch (error) {
                                console.error("Error generating share link:", error);
                            }
                        }} />
                        <Button starticon={<PlusIcon size="md" />} variant="primary" size="sm" text="Add content" onClick={() => { setmodalopen(true) }} />
                    </div>
                </div>
                <div className="relative w-full max-w-lg pl-40">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-43 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="search"
                        className="block w-full p-3 pl-10 text-black rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-700 dark:bg-gray-200 dark:border-1 dark:placeholder-gray-400 dark:text-black"
                        placeholder="Search for content..."
                    />
                </div>
                <div className='flex gap-8 pt-10 pl-40 flex-wrap rounded-4xl'>
                    {/* type is define yet, have define them */}
                    {contents.map(({ link, title, types, _id }) => <Card key={_id} title={title} types={types} link={link} _id={_id} />)}
                </div>
            </div>
        </div>
    )
}