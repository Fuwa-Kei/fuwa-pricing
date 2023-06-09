import { FC } from 'react';
import img1 from '../styles/images/image1.png';
import img2 from '../styles/images/image2.png';
import img3 from '../styles/images/image3.png';
import { PriceCard } from './parts/PriceCard';
import '../styles/pricing.css';

interface Props {
  isMonthly: boolean;
}

const Pricing: FC<Props> = ({ isMonthly }) => {
  const beginner = ["Basic sponges", "Different types of pastry bases", "Creams", "Custards", "Simple baked cakes", "...and more"];
  const intermediate = ["Whole cakes", "Individual cakes", "Tarts", "Mousses", "Decoration techniques", "...and more "]
  const pro = ["Chocolate work", "Sugar work", "Entremets", "Decorative cakes", ".....and more"]

  return (
    <div className="priceSection">
      <PriceCard 
        img = {img1}
        title = "Beginner"
        desc = "Perfect for if you are just starting out in your pastry journey, understand different pastries and methods"
        price = {isMonthly ? 8 : 48} 
        details = {beginner}
        time = {isMonthly ? "month" : "year"}
      />

      <PriceCard 
        img = {img2}
        title = "Intermediate"
        desc = "If you already know the basics and want to start creating your own cakes to impress, this is for you "
        price = {isMonthly ? 11 : 66}
        details = {intermediate}
        time = {isMonthly ? "month" : "year"}
      />
      <PriceCard 
        img = {img3}
        title = "Professional"
        desc = "If you are serious and want to learn all the skills and techniques that professionals use for some showstopping creations"
        price = {isMonthly ? 14 : 84}
        details = {pro}
        time = {isMonthly ? "month" : "year"}
      />
    </div>
  )
}

export default Pricing;