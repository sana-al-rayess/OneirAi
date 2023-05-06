import './adminsideleft.css';
import Bar from "../../images/bar.png";
import Pie from "../../images/pie.webp";
import Line from "../../images/linechart.png";
import Polar from "../../images/polar.png";
import { Link } from "react-router-dom";

const AdminSideLeft = () => {


    return (
        <div className="admin-left">
            <div className='admin-panel'>
                <div className="admin-title"> <h1>Admin Panel</h1></div>
                <div className='chart-box'>
                    <div className="chart-row1">
                        <div className="pie-ad">
                            <h3 className='yellow'>Statistics</h3>
                            <p1>View statistics in Bar Charts</p1>
                            <Link to="/admin/barchart">
                                <img className="chart-img-bar" src={Bar} alt="image" />
                            </Link>
                        </div>

                        <div className="pie-ad">
                            <h3 className='yellow'>Statistics</h3>
                            <p1>View statistics in Pie Charts</p1>

                            <Link to="/admin/piechart">
                                <img className="chart-img-pie" src={Pie} alt="image" />
                            </Link>
                        </div>

                    </div>

                    <div className="chart-row1">
                        <div className="pie-ad">
                            <h3 className='yellow'>Statistics</h3>
                            <p1>View statistics in Polar Charts</p1>
                            <Link to="/admin/polarchart">
                                <img className="chart-img-line" src={Polar} alt="image" />
                            </Link>
                        </div>

                        <div className="pie-ad">
                            <h3 className='yellow'>Statistics</h3>
                            <p1>View statistics in Line Charts</p1>
                            <Link to="/admin/linechart">
                                <img className="chart-img-line" src={Line} alt="image" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminSideLeft;