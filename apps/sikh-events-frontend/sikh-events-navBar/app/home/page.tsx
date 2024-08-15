import Link from '@/node_modules/next/link'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import EventsCard from '../components/EventsCard'
import UpcomingEvents from '../components/UpcomingEvents'

export default function Home() {
  return (


   <main> 

    <div> 
      <NavBar></NavBar>
      <div className="flex-grow m-10">
        <EventsCard></EventsCard>
      </div>
      <Footer></Footer>
    </div>

    {/* <Link href="/users"> Users</Link> */}
    </main>
  )
}
