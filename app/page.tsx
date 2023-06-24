import { AboutUs, Accordion, Banner, GridSection } from '@/components'
import { getHeaderData, getLoremData } from '@/constants'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <GridSection title={"lorem ipsum"} data={getHeaderData} />
      <div className="md:hidden 2xl:flex">
        <AboutUs />
      </div>
      <Banner />
      <GridSection title={"lorem ipsum dolor set"} data={getLoremData} />
      <Accordion />
    </main>
  )
}
