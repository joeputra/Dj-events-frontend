import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import { API_URL } from '@/config/index'

export default function EventsPage({ events }) {
  //EventPage in tutor
  return (
    <Layout>
      <h1>Player</h1>
      {events.lenght === 0 && <h3>No Player To Show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.tag} evt={evt} />
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: { events },
    revalidate: 1,
  }
}
