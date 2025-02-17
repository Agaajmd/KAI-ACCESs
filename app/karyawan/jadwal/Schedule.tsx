
import { ScheduleType } from "@/app/karyawan/types"
import DeleteSchedule from "./deleteSchedule"
import EditSchedule from "./editSchedule"

type Props = {
    item: ScheduleType
}
const showTime = (date: string) => {
    const currenrDate = new Date(date)
    return currenrDate
        .toLocaleTimeString(
            `id-ID`, {
            year: "numeric",
            month: "long",
            day: "2-digit"
        }
        )
}
const Schedule = (myProp: Props) => {
    return (
        <div className="flex flex-wrap w-full border border-gray-300 rounded-xl shadow-lg my-4 bg-white hover:shadow-xl transition-shadow duration-300">
            <div className="w-full md:w-3/12 p-4 flex flex-col">
                <small className="text-xs font-semibold text-sky-600 uppercase">
                    Berangkat dari
                </small>
                <strong className="text-lg text-gray-700">{myProp.item.departured_location}</strong>
                <small className="text-xs font-semibold text-sky-600 uppercase mt-2">
                    Waktu keberangkatan
                </small>
                <strong className="text-lg text-gray-700">{showTime(myProp.item.departured_time)}</strong>
            </div>
            <div className="w-full md:w-3/12 p-4 flex flex-col">
                <small className="text-xs font-semibold text-sky-600 uppercase">
                    Tiba di
                </small>
                <strong className="text-lg text-gray-700">{myProp.item.arrived_location}</strong>
                <small className="text-xs font-semibold text-sky-600 uppercase mt-2">
                    Waktu kedatangan
                </small>
                <strong className="text-lg text-gray-700">{showTime(myProp.item.arrived_time)}</strong>
            </div>
            <div className="w-full md:w-3/12 p-4 flex flex-col">
                <small className="text-xs font-semibold text-sky-600 uppercase">
                    Unit Kereta
                </small>
                <strong className="text-lg text-gray-700">{myProp.item.train_details.name}</strong>
                <small className="text-xs font-semibold text-sky-600 uppercase mt-2">
                    Harga
                </small>
                <strong className="text-lg text-green-600">
                    {myProp.item.price.toLocaleString(`id-ID`, {
                        style: `currency`,
                        currency: `IDR`,
                    })}
                </strong>
                <div className="mt-3 flex space-x-2">
                    <EditSchedule item={myProp.item} />
                    <DeleteSchedule schedule={myProp.item} />
                </div>
            </div>
        </div>

    )
}
export default Schedule