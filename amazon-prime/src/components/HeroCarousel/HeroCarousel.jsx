import './HeroCarousel.css'


export const HeroCarousel = ( props ) => {

    const { heroImagenes } = props
    const heroTitles = [
        { _id: 0, title: `Películas de comedia` },
        { _id: 1, title: `Películas de drama` },
        { _id: 2, title: `Porque viste "Las cosas que decimos, las cosas que...` },
        { _id: 3, title: `Dejará de estar disponible en Prime en los próximos 30 días` },
        { _id: 4, title: `Películas románticas` },
    ]

    


    return (
 
        <>
    

        <div className="Hero-carousel">


            <div className="Hero-carousel-h3">
                title
            </div>


            <div className="Hero-carousel-wrapper">

                {heroImagenes.map(hero =>
                    <Heroimagenes key={hero._id} {...hero} />
                )}


            </div>

        </div>
    </>


    )
}


const Heroimagenes = (props) => {

    const { _id, alt, src } = props

    return (

        <img src={src} alt={alt} className='Hero-film-img' />

    )
}