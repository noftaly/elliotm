import Link from 'next/link'

export default function Home() {
  return (
    <div className="my-container">
      <p className="my-4">&emsp;&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fuga labore, beatae commodi voluptas molestias rem temporibus illum et consequuntur, magni voluptatibus! Consequuntur, numquam! Nihil, illum officiis ipsum earum explicabo sunt vitae repudiandae maxime nulla magnam aut eligendi eius exercitationem voluptatem laudantium doloremque velit, minima hic quod? Dolorum nisi labore provident eveniet, ab officia quos fugit ipsam soluta quisquam quibusdam quam officiis expedita deleniti totam repellat? Dolores, debitis natus possimus necessitatibus in saepe eaque, repellendus quia quisquam cupiditate beatae eveniet est omnis sequi, eos temporibus dolorum nulla asperiores ut exercitationem porro aliquam? Placeat consequuntur sapiente illum inventore odio error, neque ullam aliquid ratione, quisquam iure ab, corporis maiores eum magnam totam esse fugiat cumque commodi? Cumque dolorem animi consequatur est.</p>
      <p className="my-4">&emsp;&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fuga labore, beatae commodi voluptas molestias rem temporibus illum et consequuntur, magni voluptatibus! Consequuntur, numquam! Nihil, illum officiis ipsum earum explicabo sunt vitae repudiandae maxime nulla magnam aut eligendi eius exercitationem voluptatem laudantium doloremque velit, minima hic quod? Dolorum nisi labore provident eveniet, ab officia quos fugit ipsam soluta quisquam quibusdam quam officiis expedita deleniti totam repellat? Dolores, debitis natus possimus necessitatibus in saepe eaque, repellendus quia quisquam cupiditate beatae eveniet est omnis sequi, eos temporibus dolorum nulla asperiores ut exercitationem porro aliquam? Placeat consequuntur sapiente illum inventore odio error, neque ullam aliquid ratione, quisquam iure ab, corporis maiores eum magnam totam esse fugiat cumque commodi? Cumque dolorem animi consequatur est.</p>
      <div className="flex w-full">
        <Link href="/projects">
          <p className="
            mx-auto mt-3 px-10 py-2
            font-semibold cursor-pointer
            rounded-full border border-yellow-400
            transition duration-200 ease-in-out transform
            hover:bg-yellow-400 hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
            See my projects
          </p>
        </Link>
      </div>
    </div>
  )
}
