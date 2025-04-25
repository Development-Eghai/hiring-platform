import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// All intake fields
const intakeFields = [
  "Position/Role", "Tech Stacks", "JD for each role", "Exeprience Range", "Designation Offered",
  "Target Companies", "Interviewer List/Schedule", "Interviewer Structure/Plan/Process(Interviewing Model)",
  "Tech screening Process Design/Full Loop Feature/Capability", "Interview Status", "Compensation/Benefits",
  "Duration/Timeline", "Place of Job/Location", "Working Model", "Educational Qual Decision",
  "Feedback Share Methods", "Relocation", "Travel Opportunties with %", "Visa Requirements",
  "Domain Knowledge Requirements with Sub-domain", "Cibil Score/Credit Check/Securiy",
  "Valid Working/Education Documentations", "Govt ID Requirements", "Background Verification Requirements",
  "Shift timings", "Shift Allowance", "Diffrently able Role requirements/Gender", "Reference Check Req",
  "Role Type", "Job type", "Communication Need/Language", "Notice Period",
  "Joining Bonus,Variable Pay and Performance Pay,Incentive,Commission,stock option",
  "candidate citizen req", "career gap", "sabbatical hiring req", "screening questions",
  "job health related req", "interview design", "social media req/link", "solicitation requirement",
  "Language Proficiency"
];

// Columns setup
const columns = intakeFields.map((field) => ({
  name: field,
  selector: (row) => row[field] || "-",
  sortable: false,
  wrap: true,
  style: { minWidth: "200px" }
}));

// Action icons
columns.push({
  name: "Action",
  cell: () => (
    <div className="d-flex justify-content-center gap-2" style={{ minWidth: 100 }}>
      <FaEye className="text-info cup" title="Preview" />
      <FaEdit className="text-warning cup" title="Edit" />
      <FaTrash className="text-danger cup" title="Delete" />
    </div>
  ),
  ignoreRowClick: true,
  allowOverflow: true,
  button: true,
  width: "120px"
});

// Generate 120 rows of mock data
const generateMockData = (count = 120) => {
  return Array.from({ length: count }).map((_, i) => {
    const obj = {};
    intakeFields.forEach((field, idx) => {
      obj[field] = `${field.split(' ')[0]} ${i + 1}`;
    });
    return obj;
  });
};

const IntakeChecklistTable = () => {
  const [data] = useState(generateMockData());
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = data.slice((currentPage - 1) * perPage, currentPage * perPage);
  const totalPages = Math.ceil(data.length / perPage);
  
// const [btnfun,setbtnfun]=useState(false)
  return (
    <div className="m-3">
      <div>
       
        {/* <button type='button' className='btn btn-primary' onClick={()=>setbtnfun(!btnfun)} >
          {btnfun ? "executed" : "exectue"}
        </button> */}
      </div>
      {/* {btnfun? */}
      <>
      <div className='row mb-2 '>
        <div className='col-12 d-flex'>
          <div className='col-6 '>
            <h4 className="mb-3">Intake Meeting Checklist</h4>
          </div>
          <div className='col-6  text-end px-3'>
            <Link to="/form" type="button" class="btn btn-primary">+ Planning Form</Link>
          </div>
        </div>
      </div>
      <hr className='py-3 pt-3' />
      <div className="student-table-wrapper">
        <div>
          <h5 className='mb-3 fw-bold'>
            Planning Screen
          </h5>
        </div>
        <div
          className="table-scroll-area"
          style={{
            maxHeight: '800px',
            overflowY: 'auto',
            overflowX: 'auto',
            border: '1px solid #ddd',
            borderRadius: '8px',
            position: 'relative'
          }}
        >

          <DataTable
            columns={columns}
            data={paginatedData}
            fixedHeader
            fixedHeaderScrollHeight="500px"
            noHeader
            noDataComponent={
              <div className="text-center py-4">
                <p className="text-muted mb-1">😕 No records found</p>
                <p className="text-small text-secondary">Try changing filters or adding data</p>
              </div>
            }
            customStyles={{
              headCells: {
                style: {
                  backgroundColor: "#f1f1f1",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                  position: 'sticky',
                  top: 0,
                  zIndex: 2,
                }
              },
              cells: {
                style: {
                  whiteSpace: "nowrap",
                }
              },
            }}
          />
        </div>

        {/* ✅ Pagination Controls Outside */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <label className="me-2">Rows per page:</label>
            <select
              value={perPage}
              onChange={(e) => {
                setPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="form-select form-select-sm"
              style={{ width: '80px', display: 'inline-block' }}
            >
              {[5, 10, 20, 50, 100].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-sm btn-outline-secondary"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-sm btn-outline-secondary"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      </>
      {/* :
      null
            } */}
      



    </div>
  );
};

export default IntakeChecklistTable;
