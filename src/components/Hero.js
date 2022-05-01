import ItemListContainer from "./ItemListContainer"

const Hero = () => {
  return (
    <>
      <div className="hero h-60 bg-sky-500">
        <div className="hero-overlay" style={{ backgroundImage: `url("https://resource.logitechg.com/w_1800,c_limit,f_auto,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/nwnl/nwnl-hero-cut-5.png?v=1")`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: 'center' }}>
        </div>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">ReactStore</h1>
            <p className="mb-5">This is a model eCommerse made with React JS</p>
          </div>
        </div>
      </div>
      <ItemListContainer />
    </>
  )
}

export default Hero
