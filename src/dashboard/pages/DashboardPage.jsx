
import { Sidebar } from '../../components/Sidebar';
import { FloatButton } from "../../components/index";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";

export const DashboardPage = () => {

    return (
        <div className=" grid grid-col-1 lg:grid-cols-6">
            {/* SideBar */}
            <Sidebar />
            <FloatButton />
            {/* Content */}
            <div className="col-span-5 scrollbar-none">
                {/* Header */}
                <Header />
                {/* Content */}
                <Content />
            </div>
        </div>
    )
}
