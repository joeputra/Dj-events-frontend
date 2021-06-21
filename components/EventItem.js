import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/EventItem.module.css'

export default function EventItem({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={evt.image ? evt.image : '/images/image-default.jpg'}
          width={170}
          height={100}
        />
      </div>

      <div className={styles.info}>
        <h2> Name Player : {evt.name}</h2>
        <h3> Position : {evt.role}</h3>
        <h3>Name Clans : {evt.clan.name}</h3>
        <h3>Tag Clans : {evt.clan.tag}</h3>
        <div className={styles.link}>
          <Link href={`/events/${evt.name}`}>
            <a className='btn'>Detail</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
