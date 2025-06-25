import Image from 'next/image'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <Image 
            src="/img/logo.png" 
            alt="logo" 
            width={200} 
            height={60}
            priority
          />
        </a>
      </div>
    </header>
  )
}