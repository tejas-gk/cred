import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Header from '../components/common/header/index'
import ProductShowcase from '../components/ProductShowcase/index'
import FeelSpecial from '../components/FeelSpecial/index'
import '../common/styles/animations.css'
import MobileScroll from '../components/MobileScroll/index'
export default function Homepage() {
  return (
    <div>
      <Header />
       <HeroSection />
       <ProductShowcase />
        <FeelSpecial 
        title="feel special more often."
        subtitle="exclusive rewards for paying your bills"
        description="every time you pay your credit card bills on CRED, you receive
        CRED coins. you can use these to win exclusive rewards or get
        special access to curated products and experiences. on CRED, good
        begets good."
        backgroundImage='https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg.jpg'
        backgroundColor='--bg-red'
        />
         <FeelSpecial 
        title="feel special more often."
        subtitle="exclusive rewards for paying your bills"
        description="every time you pay your credit card bills on CRED, you receive
        CRED coins. you can use these to win exclusive rewards or get
        special access to curated products and experiences. on CRED, good
        begets good."
        backgroundImage='https://web-images.credcdn.in/_next/assets/images/home-page/money-matters-bg.jpg'
        backgroundColor='--white'
        />

      
       <MobileScroll />
       <FeelSpecial 
        title="feel special more often."
        subtitle="exclusive rewards for paying your bills"
        description="every time you pay your credit card bills on CRED, you receive
        CRED coins. you can use these to win exclusive rewards or get
        special access to curated products and experiences. on CRED, good
        begets good."
        backgroundImage='https://web-images.credcdn.in/_next/assets/images/home-page/security-bg.jpg'
        backgroundColor='--white'
        />

<FeelSpecial 
        title="feel special more often."
        subtitle="exclusive rewards for paying your bills"
        description="every time you pay your credit card bills on CRED, you receive
        CRED coins. you can use these to win exclusive rewards or get
        special access to curated products and experiences. on CRED, good
        begets good."
        backgroundImage='https://web-images.credcdn.in/_next/assets/images/home-page/trust-bg.jpg'
        backgroundColor='--white'
        />
    </div>
  )
}
