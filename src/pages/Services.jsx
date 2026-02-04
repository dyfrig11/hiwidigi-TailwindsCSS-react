import React from 'react';
import Footer from '../components/Footer';

function Services(){
  return(
    <main className="font-sans bg-white">
      <div className="container mx-auto px-6 lg:px-8 py-20 md:py-32">
        {/* Menggunakan max-w-3xl untuk membuat kolom teks lebih sempit dan mudah dibaca */}
        <div className="max-w-3xl mx-auto">
          
          {/* === BAGIAN 1: FUNCTION + FEELING === */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Function + Feeling
            </h2>
            <div className="mt-12 space-y-8 text-xl md:text-2xl text-gray-400 leading-loose">
              <p>
                We believe things should work. That someone should make the effort to think it through, that the thing does the thing it’s supposed to do, in the simplest way possible.
              </p>
              <p>
                But also, just as importantly, that it actually feels like people made it. That we feel the care that was put into making it, the connection from the creators to the person who interacts with the creation.
              </p>
              <p>
                So, on every project we start with two questions. What does it do? We call that <strong className="text-gray-800">Function</strong>.
              </p>
              <p>
                And, how does using it make people feel? We call that <strong className="text-gray-800">Feeling</strong>.
              </p>
              <p>
                And then we start creating.
              </p>
            </div>
          </div>

          {/* Pemisah antar bagian */}
          <hr className="my-20 border-gray-200" />

          {/* === BAGIAN 2: WHAT DO YOU ACTUALLY DO? === */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              That’s nice. But what do you actually do?
            </h2>
            <div className="mt-12 space-y-10 text-base text-gray-400 leading-relaxed">
              <div>
                <p>
                  <strong className="text-gray-900">Branding.</strong> What is it? Basically, it’s that feeling again. the overall vibe of a company, product, or experience. For over ten years, we’ve helped shape that for some amazing clients. Sure, we design logos (which we like to think of as part of a brand’s voice and tone). But we also create the photos, videos, illustrations how everything moves, flows, and comes to life. We handle all of it.
                </p>
              </div>
              <div>
                <p>
                  <strong className="text-gray-900">Products.</strong> So, what is it exactly? The things we make are mostly digital. you’ll find them behind a URL or tucked inside your phone. An app, a website, or some nifty little tool that does something. You tap a button, get a quick hit of dopamine fun, right? But it’s also about that feeling again. Why do you keep coming back? What makes this one different from the rest? Maybe another app delivers better pizza, but ours feels better to use, maybe it just makes you feel good about your choices. That’s the kind of experience we create for some of the apps you probably use every day.
                </p>
              </div>
              <div>
                <p>
                  <strong className="text-gray-900">Experiences.</strong> So what is it this time? Well, the things we create are usually digital too. It could be an event, an activation. maybe a dome where you ride a sleigh, or a website where you shop for perfume and become part of the story. When there’s something to sell, there’s always a story to tell a reason for people to care. And we’ve crafted plenty of those stories for some of the biggest brands.
                </p>
              </div>
              <div>
                <p>
                  <strong className="text-gray-900">Design, Hosting, SEO, Ecommerce, and whatever else you need!</strong> Worry about <strong className="text-gray-600 font-mono">revision limit? </strong> haha, it's <strong className="text-gray-600 font-mono">unlimited.</strong>
                </p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Services;