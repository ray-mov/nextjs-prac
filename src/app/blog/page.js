import Link from "next/link"

function page() {
  return (
    <main>
      <div>
        <h1 className="text-7xl text-blue-400 font-bold ">Blog Page</h1>
        <ul className="text-yellow-200 hover:text-amber-500">
          <li>
            <Link href="/blog/post-1">Post-1</Link>
          </li>
          <li>
            <Link href="/blog/post-2">Post-2</Link>
          </li>
        </ul>

      </div>
    </main>
  )
}

export default page