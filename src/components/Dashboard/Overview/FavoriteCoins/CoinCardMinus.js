import { RiArrowDownSLine } from "react-icons/ri";

function MediumCard({ img, title, total, period, difference }) {
  return (
    <section className="flex flex-col border-2 rounded-3xl w-72 h-72 p-6 border-gray-200">
      <div className="flex items-center gap-4 text-gray-400 w-72">
        <img src={img} alt="" className="w-12" />
        <p>{title}</p>
      </div>
      <h3 className="text-2xl mt-3">{total}</h3>
      <p className="text-xs mt-1 text-gray-400">{period}</p>
      <div className="flex items-center gap-4 text-crypto-red mt-4">
        <div className="bg-crypto-lightred rounded-md">
          <RiArrowDownSLine className="text-2xl " />
        </div>
        <p>{difference}</p>
      </div>
    </section>
  );
}

export default MediumCard;
