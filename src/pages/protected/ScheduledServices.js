import React from 'react';

const ScheduledServices = () => {
    return (
        <section className='min-h-screen'>

            <div className='lg:flex justify-between items-center'>
                <h1 className='uppercase text-3xl font-semibold text-primary'>Schedule Services</h1>

                <div>
                    <button className='btn btn-error text-white capitalize my-5 lg:ml-3'>
                        Balance ($): 0
                    </button>
                </div>

                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>



            <div>
                <div className="overflow-x-auto mt-6">
                    <table className="table table-compact w-full border-2">
                        <thead>
                            <tr>
                                <th>View Project</th>
                                <th>service</th>
                                <th>Client URL</th>
                                <th>Order Net Cost ($)</th>
                                <th>Status</th>
                                <th>Order Placing Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                                <td>Canada</td>
                                <td>Canada</td>
                                <td>12/16/2020</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Zemlak, Daniel and Leannon</td>
                                <td>United States</td>
                                <td>United States</td>
                                <td>12/5/2020</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Carroll Group</td>
                                <td>China</td>
                                <td>China</td>
                                <td>8/15/2020</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Marjy Ferencz</td>
                                <td>Office Assistant I</td>
                                <td>Rowe-Schoen</td>
                                <td>Russia</td>
                                <td>Russia</td>
                                <td>3/25/2021</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    );
};

export default ScheduledServices;