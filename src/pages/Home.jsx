import HeroSlider from "../components/HeroSlider"
import ImagesSection from "../components/ImagesSection"
import Collections from "../components/Collections"
import CollectionCard from "../components/CollectionCard"
import TestimonialCarousel from "../components/TestimonialCarousel"
import WattsAppFloatButton from "../components/WattsAppFloatButton"



const Home = () => {
  return (
    <>
     <HeroSlider/>
     <CollectionCard/>
     <ImagesSection/>
     <Collections/>
     <TestimonialCarousel/>
     <WattsAppFloatButton/>
    </>
  )
}

export default Home
