import React from 'react';
import { Link } from 'react-router-dom';

const InterviewScreen = () => {
    const tableInputClass = 'border-0 py-3';

    const feedbackFields = [
        ['Technical Skills', '> 3 and Above'],
        ['PMO Skills', '4 & Above'],
        ['Excel Skills', '> 3 and Above'],
        ['Overall Ratings', '3 and Above'],
        ['Feedback Comment', 'Minimum Comments'],
    ];

    return (
        <div>
            {/* Header */}
            <div className='col-12 d-flex justify-content-between'>
                <div>
                    <Link to='/form' className='btn btn-outline-secondary'>
                        ← Back
                    </Link>
                </div>
                {/* <h5 type='button' className='btn fw-bold btn-success'>
                    Interview Design Screen
                </h5> */}
            </div>

            <hr />

            {/* Interview Details Form */}
            <div className='p-3 px-5 rounded bg-white rounded shadow-sm'>
                <div>
                    <h5 className='fw-bold my-3'>
                        Select number of Rounds
                    </h5>
                </div>
                <form id="myTableForm">
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>Sl.No</th>
                                <th>Field</th>
                                <th>Input Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>Position/Role</td>
                                <td>
                                    <input
                                        type="text"
                                        name="field1"
                                        placeholder="Enter Position/Role"
                                        className={tableInputClass}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Tech Stack</td>
                                <td>
                                    <input
                                        type="text"
                                        name="field2"
                                        placeholder="Enter Tech Stack"
                                        className={tableInputClass}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>No of rounds</td>
                                <td>
                                    <input
                                        type="number"
                                        name="field3"
                                        min="1"
                                        placeholder="Enter no of rounds"
                                        className={tableInputClass}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="text-end mt-3">
                        <button type="submit" className="btn px-5 py-2 btn-primary">Save</button>
                    </div>
                </form>
            </div>

            {/* Feedback Form */}
            <div className='p-3 px-5 rounded bg-white rounded shadow-sm mt-3' >
                <div>
                    <h5 className='fw-bold my-3'>
                        Input the Interview Parameters
                    </h5>
                </div>
                <div className='d-flex col-12 px-3 '>
                    <p className='col-4'>
                        <h6 className="mt-5 ">
                            Interview Parameters /<br />Feedback to be defined for each round
                        </h6>
                    </p>
                    <div className="col-8">
                        <div className="table-wrapper">
                            <form id="myTableFormdown">
                                <table className="custom-table">
                                    <thead>
                                        <tr>
                                            <th className="sub-col">Communication Skills</th>
                                            <th className="sub-col">Input data</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {feedbackFields.map(([label, placeholder], index) => (
                                            <tr key={index}>
                                                <td className="sub-col ">{label}</td>
                                                <td className="sub-col">
                                                    <input
                                                        type={label === 'Overall Ratings' ? 'number' : 'text'}
                                                        placeholder={placeholder}
                                                        className='border-0'
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="text-end mt-3">
                                    <Link  to={"/round-form"} type="submit" className="btn px-5 py-2 btn-primary">Next</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewScreen;
