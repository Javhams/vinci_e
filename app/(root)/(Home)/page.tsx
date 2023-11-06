import React from "react"
import SearchForm from "@/components/SearchForm"
import Filters from "@/components/Filters"
import { getResources } from "@/sanity/actions"


const Page = async () => {
  const resources = await getResources({
    query: '',
    category: '',
    page: '1'

  })

  console.log(resources)

  return (
    <div>
      <main className='flex-center paddings mx-auto w-full 
        max-w-screen-2x1 flex-col'>
          <section className='nav-padding w-full'>
            <div className='flex-center relative min-h-[274px] 
              w-full flex-col rounded-xl bg-banner bg-cover
              bg-center text-center'>
              <h1 className='sm:heading1 heading2 mb-6 text-center
              text-white'>Vinci_E Corporation</h1>
            </div>
            <SearchForm />
          </section>

          <Filters />
      </main>
   </div>
  )
}

export default Page