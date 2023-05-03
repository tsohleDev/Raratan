import Label from "../game_form/formLabel";
import { useEffect, useState } from "react";
import styles from '../../styles/Home.module.css'


const GameForm = () => {

    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        oneSecond()
    }, [])

    const labelAndPlaceholder = [
        {label: 'GamE', placeholder: 'Type of game', type: 'text'},
        {label: 'GamE Name', placeholder: 'Enter game name', type: 'text'},
        {label: 'GamE Password', placeholder: 'Enter game password', type: 'password'},
        {label: 'Opponent', placeholder: 'Enter Opponent Username', type: 'text'},
    ]

    function oneSecond(): void {
        setAnimate((animate) => !animate)
        console.log(animate);
        

        if (animate) {
            setTimeout(oneSecond, 5000);
            return;
        } else {
            setTimeout(oneSecond, 2000);
        }
    }

    return ( 
        <section>
            <div className="flex flex-col border-b-2 border-secondary">
               <div className="flex justify-center">
                    <h4 className="pt-10 mr-5">
                        <span className={`${styles.jumbotron} inline-block`}>T</span>
                        <span className={`${styles.jumbotron} inline-block`}>o</span>
                        <span className={`${styles.jumbotron} inline-block`}>p</span>
                    </h4>

                    <h4 className="pt-10 ml-5">
                        <span className={`${styles.jumbotron} inline-block`}>T</span>
                        <span className={`${styles.jumbotron} inline-block`}>o</span>
                        <span className={`${styles.jumbotron} inline-block`}>p</span>
                    </h4>
               </div>

               <h4 className="pt-5 text-center">
                    <span className={`${styles.hideAnimation} inline-block mr-3`}>AmA</span>
                    <span className={`${styles.hideAnimation} inline-block mr-3`}>ToP</span>
                    <span className={`${styles.hideAnimation} inline-block`}>7</span>
               </h4>
            </div>

            <form className="mt-2 flex flex-col" onSubmit={() => console.log('hello')}>
                <button className="self-end bg-light h-10 w-20 mr-2 rounded-lg shadow-md shadow-tertiary bg-opacity-50 active:bg-opacity-80" type="submit">
                 <span className="material-symbols-outlined mg-auto p-auto text-tertiary text-4xl">
                   fast_forward
                 </span>
                </button>
                {labelAndPlaceholder.map((item) => (
                    <Label key={item.label} label={item.label} type={item.type} placeholder={item.placeholder} />
                ))}
            </form>
        </section>
     );
}
 
export default GameForm;