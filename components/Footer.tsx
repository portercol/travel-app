import { FOOTER_LINKS } from '@/constants';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}
const FooterColumn = ({ title, children }: FooterColumnProps ) => {
  return (
    <div>
      <h4>{title}</h4>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>
      <div className='padding-container max-container flex flex-col w-full gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href="/" className='mb-10'>
            <Image src='/hilink-logo.svg' alt='logo icon' width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((links) => (
              <FooterColumn title={links.title}>

              </FooterColumn>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer