import React from 'react'
import { Link } from 'react-router-dom'

const RoundForm = () => {
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
                                <th>Interview Stage</th>
                                <th>Round 1</th>
                                <th>Round 2</th>
                                <th>Round 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>Interview Type</td>
                                <td>
                                   Select 
                                </td>
                                <td>
                                   Select 
                                </td>
                                <td>
                                   Select 
                                </td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Interview Place / Source</td>
                                <td>
                                   Select 
                                </td>
                                <td>
                                   Select 
                                </td>
                                <td>
                                   Select 
                                </td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>Screening Type</td>
                                <td>
                                   Select 
                                </td>
                                <td>
                                   Select 
                                </td>
                                <td>
                                   Select 
                                </td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>Interviewing Model</td>
                                <td>
                                   Select 
                                </td>
                                <td>
                                   Select 
                                </td>
                                <td>
                                   Select 
                                </td>
                            </tr>
                            <tr>
                                <td>5.</td>
                                <td>Interview Parameters</td>
                                <td>
                                   Select 
                                </td>
                                <td>
                                   Select 
                                </td>
                                <td>
                                   Select 
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="text-end mt-3">
                        <button type="submit" className="btn px-5 py-2 btn-primary">Submit</button>
                    </div>
                </form>
            </div>

          
        </div>
    )
}

export default RoundForm