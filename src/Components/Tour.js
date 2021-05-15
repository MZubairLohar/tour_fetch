import React, {useState} from 'react'

const Tour = ({id,image, name, info, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <section  className = 'single-tour' >
            < img src={image} alt={name} />
            <footer>
                <div className = 'tour-info' >
                    <h4> {name} </h4>
                    <div className = 'tour-price' >
                        <h4> ${price} </h4>
                    </div>
                </div>
                    <p >
                        {readMore? info : `${info.substring(0,200)}...`}
                        <button onClick={()=>{
                            setReadMore(!readMore)
                        }}  >
                            {readMore ? 'show less' : 'show more'}
                        </button>
                    </p>
                <button className = 'rmv-btn' onClick={()=>{
                    removeTour(id)
                }} > Not Interested </button>
            </footer>   
        </section>
    )
}

export default Tour
