const Articles = () => {
    return ( <section className="h-auto">
        <article className="shadow-md shadow-tertiary">
            <div className="flex">
              <iframe className="w-60% h-1/2 m-2"
              src="https://www.youtube.com/embed/YeB-1F-UKO0" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
              </iframe>
  
             <div className="m-1">
               <h2 className="text-center text-secondary font-bold font-fuzzy-bubbles text-3xl">Chess</h2>
            
               <p className="text-light text-xl text-left"><span className="xs:hidden">Strategic</span> Game that has been played for centuries.</p>
             </div>
            </div>
            
            <p className="text-light text-xl text-left">With a complex set of rules that can be difficult to understand for beginners. One of the most intriguing aspects of chess is the origin and story behind each move. In this article, we will explore some of the most famous chess moves and their fascinating histories.</p>
        </article>

        <article className="shadow-md shadow-secondary">
            <h2 className="text-center text-secondary font-bold font-fuzzy-bubbles text-3xl">Chess Moves</h2>

            <iframe className="w-100% h-1/2 mt-2 mb-1"
              src="https://www.youtube.com/embed/6Ly7c0uNuUw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
            </iframe>

            <p className="text-light text-xl text-center">
              The pawn's double move was introduced in the 15th century to make the game more dynamic. The Queen's Gambit involves sacrificing a pawn to gain control of the board and has become one of the most widely used opening strategies. The Sicilian Defense, named after the Italian island of Sicily, was first played in the 16th century and is a popular counter-attack. The Ruy Lopez, named after a Spanish bishop, is another popular opening move. The Knight's Tour is a puzzle that has fascinated mathematicians and chess players alike for centuries. Understanding the history and origins of famous chess moves can help players develop their own strategies and improve their gameplay.
            </p>
        </article>

        <article className="shadow-md shadow-tertiary">
            <div className="flex">
             <div className="m-1">
               <h2 className="text-center text-secondary font-bold font-fuzzy-bubbles text-3xl">ShoGi</h2>
            
               <p className="text-light text-xl text-right">A traditional Japaness spin off of western chess</p>
             </div>

             <iframe className="w-60% h-1/2 m-2"
              src="https://www.youtube.com/embed/4RdZ_PzK-fg" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
              </iframe>
            </div>
            
            <p className="text-light text-xl text-right">Two-player strategy game that has been played for centuries in Japan. It is similar to Western chess, but with different rules and pieces. The objective is to capture the opponent's king, but players can also use captured pieces as their own. Shogi is known for its complex and intricate gameplay, with many possible moves and strategies. It is played professionally in Japan and has gained popularity around the world. Shogi is a fascinating game that requires both skill and strategy to master.</p>
        </article>

    </section> );
}
 
export default Articles;