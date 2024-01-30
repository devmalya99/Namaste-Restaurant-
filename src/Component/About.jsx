

import React from 'react'
import HEADER from '../Header'

const About = () => {
  return (
    <>
    <HEADER/>
    
    <div className="w-full bg-gray-800 text-white">
    <main className="pt-10 px-4">
      <h2 className="text-4xl font-bold mb-5 text-white">About Us</h2>
      <img className="w-full h-105 object-cover mb-5" src="https://media.glassdoor.com/l/4f/df/94/d4/our-happy-faces-in-yellow.jpg"  alt="Our team at a restaurant" />
      <div className="mb-5">
        
      
      <h2 className="text-3xl mb-2 text-pink-600">The Beginning </h2>
  <section class="section mb-10">
    <p>In the bustling streets of New Delhi, The Golden Spoon was born from a simple dream – to bring the world's best flavors to your doorstep. We're not just a food app; we're your passport to a global culinary adventure, where every meal is a masterpiece, and every bite tells a story.</p>
  </section>

 <h2 className="text-2xl mb-2 text-pink-600"> Aim and Vision </h2> 
  <section class="section mb-10">
    <p>Our journey started with a love for great food and a belief that everyone deserves access to the finest dishes worldwide. The Golden Spoon is your guide through a tapestry of global flavors, carefully curated to satisfy your cravings.</p>
  </section>

<h2 className="text-2xl mb-2 text-pink-600"> The Golden Spoon Experience</h2>

  <section class="section mb-10">
    
    <p>Imagine a team of dedicated food enthusiasts, working to bridge the gap between your taste buds and the world's most delicious dishes. 
    We believe every meal is a celebration, a chance to savor life's moments and create lasting memories. It's not just about delivering food; it's about crafting experiences that transport you to Tokyo's bustling streets, Marrakech's vibrant markets, or Paris's charming bistros
    </p>
  </section>

 

  <h2 className="text-2xl mb-2 text-pink-600">Crafted with Care</h2>
  <section class="section mb-10">
    <p>At The Golden Spoon, we handpick each restaurant and chef to ensure only the most authentic and high-quality dishes reach your table. We collaborate with culinary experts who share our vision, bringing you a symphony of tastes that dance on your palate, leaving you craving more.</p>
  </section>

  <h2 className="text-2xl mb-2 text-pink-600">Commitment to Sustainability </h2>
  <section class="section mb-10">
    
    <p>Our commitment goes beyond providing gastronomic delights. The Golden Spoon is dedicated to sustainability, supporting local farmers, and reducing our carbon footprint. We believe in a world where good food does good – for your taste buds and the planet we all call home.</p>
  </section>

  </div>
      
    </main>

    <footer className="flex items-center justify-center py-4 mt-15 bg-gray-800 text-white">
      <p>&copy; 2023 The Golden Spoon</p>
    </footer>
</div>
  </>
  )
}

export default About