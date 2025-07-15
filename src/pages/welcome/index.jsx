

function Welcome()
{
    return <div>
        <div class="flex items-center justify-center h-screen ">
        <div class="bg-white p-8 rounded-lg shadow-lg text-center w-80">
          <h2 class="text-2xl font-bold mb-4 text-gray-800">Welcome!</h2>
          <a className="mt-5 min-w-[200px] px-4 py-3 border border=[#333] bg-black text-sm text-white font-semibold rounded-2xl" href="/products">Shop In</a>
        </div>
      </div>
    </div>
}

export default Welcome;