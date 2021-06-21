import Link from 'next/link'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import { API_URL } from '@/config/index'

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>This Our Player</h1>
      {events.lenght === 0 && <h3>No Player To Show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.tag} evt={evt} />
      ))}

      {events.lenght > 0 && (
        <Link href='/events'>
          <a className='btn-secondary'>View All Player</a>
        </Link>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: { events: events.slice(0, 3) },
    revalidate: 1,
  }
}
