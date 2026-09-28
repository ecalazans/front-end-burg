import { CalendarFold, ClockAlert, ClockCheck, User } from "lucide-react";

type CardPedidoType = {
  id: number;
  name: string;
  date: string;
  orderTime: string;
  deliveredTime?: string;
  totalOrder: number;
};

const CardPedido = ({
  id,
  name,
  date,
  orderTime,
  deliveredTime,
  totalOrder,
}: CardPedidoType) => {
  return (
    <div className="rounded-md bg-[#F2DAAC] p-2">
      <div className="flex justify-between text-[#32343E]">
        <p className="font-bold">#{id}</p>
        <select name="" id="" className="font-bold">
          <option value="" defaultChecked>
            Pendente
          </option>
          <option value="">Retirado</option>
          <option value="">Cancelado</option>
        </select>
      </div>
      <div className="mt-3 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <User size={16} strokeWidth={2.5} />
          <p className="text-xs md:text-sm">{name}</p>
        </div>
        <div className="flex items-center gap-2">
          <CalendarFold size={16} strokeWidth={2.5} />
          <p className="text-xs md:text-sm">{date}</p>
        </div>
        <div className="flex w-full items-center justify-between sm:justify-start sm:gap-4">
          <div className="flex items-center gap-2">
            <ClockAlert size={16} strokeWidth={2.5} />
            <p className="text-xs md:text-sm">{orderTime}</p>
          </div>
          <div className="flex items-center gap-2">
            <ClockCheck size={16} strokeWidth={2.5} />
            <p className="text-xs md:text-sm">
              {deliveredTime ? deliveredTime : "--:--"}
            </p>
          </div>
        </div>

        <div className="mt-2 h-0.5 w-full bg-[#32343E]"></div>

        <p className="text-right font-bold text-[#32343E]">R${totalOrder}</p>
      </div>
    </div>
  );
};

export default CardPedido;
