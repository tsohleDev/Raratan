import Image from "next/image";
import styles from '@/styles/Home.module.css';

const Hello = () => {
  const gamesInProgress: {id: number, name: string}[] = [];

   return (
    <section className={styles.bg}>
        <div className="self-end">
          <Image className="rounded-full m-2"
            src='https://avatars.githubusercontent.com/u/102636489?s=400&u=fce3dbe7dbeb5c88b4961ea44b2b27a69dd400a2&v=4'
            width={77} height={33}
            alt="My Profile"/>
        </div>

        <h1 className="text-secondary font-fuzzy-bubbles border-b-2 border-tertiary">
          <span className="text-6xl m-0.4 inline-block transform rotate-10">R</span>
          <span className="text-3xl m-0.4 inline-block transform rotate-10">a</span>
          <span className="text-4xl m-0.4 inline-block transform -rotate-10">R</span>
          <span className="text-5xl m-0.4">A</span>
          <span className="text-5xl m-0.4">T</span>
          <span className="text-5xl m-0.4 inline-block transform -rotate-20">a</span>
          <span className="text-6xl m-0.4 inline-block transform rotate-10">N</span>
        </h1>

        {gamesInProgress.length > 0 && 
          <>
              <h2>Games in progress:</h2>
  
              <ul>
                {gamesInProgress.map((game) => (
                  <li key={game.id}>{game.name}</li>
                ))}
              </ul>
          </>}

        <div className="trophies mt-auto mb-auto">
            <div></div>

            <Image
              src='/trophy.png'
              width={77}
              height={33}
              alt=""/>

            <div></div>

            <Image
              src='/trophy.png'
              width={77}
              height={33}
              alt=""/>

            <div></div>

            <Image
              src='/trophy.png'
              width={77}
              height={33}
              alt=""/>
        </div>
    </section>
    );
}
 
export default Hello;