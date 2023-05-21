const BodyBox = ({randomCuriosities, handlerChangephrase}) => {
    return (
        <>
            <section className='section'>
                <article className='article'>
                    {
                        randomCuriosities
                    }
                </article>
                <button className='changeInfo' onClick={handlerChangephrase}> <i className='bx bx-sync iconChange'></i> </button>
            </section>
        </>
    )
}

export default BodyBox