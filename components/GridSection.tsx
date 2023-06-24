import Image from "next/image";
import TitleHeader from "./TitleHeader";
import { DataItemProps } from "@/types";

const GridSection = ({ data, title }: { data: DataItemProps[], title: string }) => {
  return (
    <section className="px-6 py-4 2xl:px-20 sm:px-16">
      <TitleHeader title={title} />

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-2 2xl:grid-cols-3">
        {data.map((item) => (
          <div className="h-auto mt-5" key={item.id} >
            {item.header && <TitleHeader title1={item.header} />}
            {item.content && <p className="opacity-60">{item.content}</p>}
            {item.image && (<Image src={item.image} alt="person" width={item.width || 380} height={item.height || 380} priority className="object-contain " />)}
          </div>
        ))}
      </div>
    </section>
  );


};

export default GridSection;
