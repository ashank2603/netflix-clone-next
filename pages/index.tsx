import Billboard from '@/components/Billboard'
import Navbar from '@/components/Navbar'
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect : {
        destination: '/auth',
        permanant: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <Billboard />
    </div>
  )
}
