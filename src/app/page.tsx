import Image from 'next/image'
// import styles from "./page.module.css";

export default function Home() {
  return <div className='check'>{process.env.NEXT_PUBLIC_NODE}</div>
}
