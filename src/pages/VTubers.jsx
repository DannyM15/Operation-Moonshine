import Bagstard from "../assets/Images/potato.png"
import Kirchse from "../assets/Images/reznya.png"
import Mamobites from "../assets/Images/spider.png"

const Vtubers = () => {
    return (
        <>
            <h2 className="fs-1">Part-Time Super Terrorists</h2>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="container">
                <div className="row">
                    <div className="col-4" ><img src={Bagstard} alt="art representing the person called 'bagstard' " /> </div>
                    <div className="col-6">In Willowbrook, a man named Bagstard always wore a paper bag over his head, causing the townspeople to avoid him. He lived in solitude at the forest's edge, tending to his vibrant garden and leaving baskets of produce for his neighbors. One day, a lost girl named Lily knocked on his door, and he kindly took her in, explaining that the bag helped people see him for who he truly was. After safely guiding Lily back home, the townspeople began to see Bagstard’s true kindness and welcomed him into their community. No longer lonely, Bagstard became a cherished friend, teaching Willowbrook to look beyond appearances. </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-6" >Kirchse was a curious girl who loved exploring the enchanted forest near her village. One day, she stumbled upon a hidden grove filled with sparkling, blue flowers that seemed to hum with magic. Entranced, she picked one, and instantly, the forest transformed around her, revealing hidden paths and secret creatures. With her newfound ability to see the unseen, Kirchse became the protector of the forest, ensuring its magic remained safe. Her adventures became legendary, and she was celebrated as the guardian of the enchanted woods. </div>
                    <div className="col-4"><img src={Kirchse} alt="art representing the person called 'Kirchse' " /> </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-4" ><img src={Mamobites} alt="art representing the person called 'Mamo bites' " /> </div>
                    <div className="col-6">Space Cadet Mamobites was known for her fearless spirit and quick thinking. During a routine patrol, her spacecraft encountered an unexplored, swirling nebula that pulled her into a distant galaxy. Stranded on an alien planet, she discovered an advanced civilization in desperate need of help to fix their failing energy core. Using her technical skills, Mamobites repaired the core, saving the planet from destruction. Grateful, the aliens helped her return home, and Mamobites became a hero, celebrated across galaxies for her bravery and ingenuity. </div>
                </div>
            </div>



        </>
    )
}

export default Vtubers