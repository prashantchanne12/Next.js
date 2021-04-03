import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
      <Link href='/ninjas'>
        <a>See Ninja Listing</a>
      </Link>
    </div>
  )
}
