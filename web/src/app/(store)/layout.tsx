import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="m-auto w-[1170px]">
        <Header />
        {children}
      </div>
      </>
  )
}
