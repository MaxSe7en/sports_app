import Image from 'next/image'
import React from 'react'

type Props = {}

const Featured = (props: Props) => {
  return (

    <>
      <div className="flex flex-col h-screen">


        <nav className="bg-gray-100 border-b border-gray-300">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-indigo-500">SportsZone</a>
            <ul className="flex space-x-4 text-gray-600">
              <li><a href="#">Home</a></li>
              <li><a href="#">Scores</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </nav>

        Hero
        <header className="bg-white border-b border-gray-300">
          <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Latest Sports News</h1>
              <p className="text-gray-600 max-w-lg mb-8">Catch up on the most recent events, scores and stories from the world of sports.</p>
              <a href="#" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">Learn More</a>
            </div>
            <img className="w-80 md:w-96 rounded-md shadow-md" src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="soccer player celebrating" />
          </div>
        </header>

        Content
        <main className="p-4">
          Latest news
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Latest News</h2>

            <div className="space-y-4">
              News item
              <div className="bg-white rounded-md shadow-md p-4">
                <h3 className="text-xl font-semibold mb-2">Title of news article</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nibh sed elit efficitur eleifend.</p>
              </div>

              More news items...no be easy

            </div>

            <a href="#" className="inline-block bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 mt-4">View More News</a>
          </section>

          Scores
          <section>
            Section contents
          </section>

        </main>

        Footer
        <footer className="bg-white border-t border-gray-300 p-4 text-gray-600">
          <div className="container mx-auto text-center">
            Copyright © 2023 SportsZone
          </div>
        </footer>

      </div>


      Dark mode

      <div className="flex flex-col h-screen dark:bg-gray-900">

        Top nav
        <nav className="bg-gray-800 border-b border-gray-700">
          Nav content
        </nav>

        Hero
        <header className="bg-gray-900 border-b border-gray-700">
          Header content
        </header>

        Content
        <main className="p-4 dark:text-gray-300">
          Main content
        </main>

        Footer
        <footer className="bg-gray-800 border-t border-gray-700">
          Footer content
        </footer>

      </div>
       {/* <div className='w-1/2'>
       <Image src={`/assets/result.png`} layout="fill"  objectFit='cover' alt="player png" />  
     </div> */}
    </>


  )
}

export default Featured