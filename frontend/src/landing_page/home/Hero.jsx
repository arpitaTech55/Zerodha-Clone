
function Hero (){
    return(
        <div className='container p-5 mb-5 text-center'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='HeroImage' className='mb-5'/>
            </div>
            <h1 className='mt-6 fs-2'>Invest In Everything</h1>
            <p>Online</p>
            <button style={{width : "20%" , margin : "0 auto"}} className='p=3 btn btn-primary fs-5 mb-5'>Signup Now</button>
        </div>

    );
}

export default Hero;