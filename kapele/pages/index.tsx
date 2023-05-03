import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hello from '@/components/home/hello';
import Articles from '@/components/home/articles';
import GameForm from '@/components/home/gameForm';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const gamesInProgress = [
    {
      id: 1,
      name: 'Game 1',
      players: [
        {
          id: 1,
          name: 'Player 1',
          color: 'white',
          timeRemaining: 1000,
        },
        {
          id: 2,
          name: 'Player 2',
          color: 'black',
          timeRemaining: 1000,
        },
      ],
    },
    {
      id: 2,
      name: 'Game 2',
      players: [
        {
          id: 1,
          name: 'Player 1',
          color: 'white',
          timeRemaining: 1000,
        },
        {
          id: 2,
          name: 'Player 2',
          color: 'black',
          timeRemaining: 1000,
        },
      ],
  }];

  return (
   <main className='bg-gradient-to-r from-dark to-primary'>
      {/*Hello User*/}
      <Hello />

      {/*Form Section*/}
      <GameForm />
      
      {/*Chess Videos*/}
      <Articles />

      {/* <h2>Prizes Won</h2>
      <ul>
        {prizesWon.map((prize) => (
          <li key={prize.id}>{prize.name}</li>
        ))}
      </ul>
      
      <h2>Prizes Owed</h2>
      <ul>
        {prizesOwed.map((prize) => (
          <li key={prize.id}>{prize.name}</li>
        ))}
      </ul>
      
      <h2>Prizes I Owe</h2>
      <ul>
        {prizesIOwe.map((prize) => (
          <li key={prize.id}>{prize.name}</li>
        ))}
      </ul> */}
   </main>
  )
}
