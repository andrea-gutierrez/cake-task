import {TextCardComponent} from "@/app/admin/dashboard/components/TextCard";


export default function DashboardPage() {
    return <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <TextCardComponent/>
            <TextCardComponent/>
            <TextCardComponent/>
        </div>
        <div></div>
    </>
}