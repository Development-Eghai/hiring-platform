import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const PlanningForm = () => {
  const initialState = {
    position: '', techStacks: '', jdFile: null, experienceRange: '',
    designation: '', targetCompanies: '', interviewStatus: '',
    compensation: '', location: '', workingModel: '',
    educationDecision: '', relocation: '', travelOpportunities: '',
    visaRequirements: '', domainKnowledge: '', backgroundVerification: '',
    shiftTimings: '', roleType: '', jobType: '',
    communicationLanguage: '', noticePeriod: '', additionalComp: '',
    citizenRequirement: '', careerGap: '', sabbatical: '',
    screeningQuestions: '', jobHealthRequirements: '',
    socialMediaLinks: '', languageProficiency: ''
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [sectionProgress, setSectionProgress] = useState([]);

  const sections = [
    {
      title: '1. Job Overview',
      fields: ['position', 'techStacks', 'jdFile', 'experienceRange', 'designation']
    },
    {
      title: '2. Company Info & Status',
      fields: ['targetCompanies', 'interviewStatus', 'compensation', 'location', 'workingModel']
    },
    {
      title: '3. Education & Mobility',
      fields: ['educationDecision', 'relocation', 'travelOpportunities', 'visaRequirements', 'domainKnowledge']
    },
    {
      title: '4. Compliance & Type',
      fields: ['backgroundVerification', 'shiftTimings', 'roleType', 'jobType', 'communicationLanguage']
    },
    {
      title: '5. Final Details',
      fields: ['noticePeriod', 'additionalComp', 'citizenRequirement', 'careerGap', 'sabbatical', 'screeningQuestions', 'jobHealthRequirements', 'socialMediaLinks', 'languageProficiency']
    }
  ];

  useEffect(() => {
    const newProgress = sections.map(section => {
      const filled = section.fields.filter(field => {
        const value = formData[field];
        return value && (typeof value === 'string' ? value.trim() !== '' : true);
      }).length;
      return Math.round((filled / section.fields.length) * 100);
    });
    setSectionProgress(newProgress);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.position) newErrors.position = 'Position is required';
    if (!formData.techStacks) newErrors.techStacks = 'Tech stack is required';
    if (!formData.jdFile) newErrors.jdFile = 'Please upload a JD file';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Object.values(validationErrors).forEach(msg => toast.error(msg));
      return;
    }


    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {

      payload.append(key, value);
    });

    try {

      const response = await axios.post(
        'https://your-api.com/planning',
        payload,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      toast.success('Form submitted successfully!');
      console.log('API response:', response.data);

      setFormData(initialState);
    } catch (err) {
      console.error(err);
      toast.error('Failed to submit form. Please try again.');
    }
  };


  const formControlClass = (name) => `form-control ${errors[name] ? 'is-invalid' : ''}`;
  const formSelectClass = (name) => `form-select ${errors[name] ? 'is-invalid' : ''}`;

  const renderInput = (label, name, type = 'text', placeholder = '') => (
    <div className="mb-3 col-md-6">
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name] || ''}
        onChange={handleChange}
        className={formControlClass(name)}
        placeholder={placeholder || `Enter ${label}`}
      />
      {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
    </div>
  );

  const renderSelect = (label, name, options) => (
    <div className="mb-3 col-md-6">
      <label className="form-label">{label}</label>
      <select
        name={name}
        value={formData[name] || ''}
        onChange={handleChange}
        className={`${formSelectClass(name)} p-3`}
      >
        <option value="">Select {label}</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
    </div>
  );

  const renderFile = (label, name) => (
    <div className="mb-3 col-md-6">
      <label className="form-label">{label}</label>
      <input
        type="file"
        name={name}
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
        className={formControlClass(name)}
      />
      {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
    </div>
  );

  return (
    <div className="container">
      <div className='col-12 d-flex justify-content-between'>
        <div>
          <Link to='/students' className='btn btn-outline-secondary'>
            ← Back
          </Link>
        </div>
        {/* <h5 type='button' className='btn fw-bold btn-success'>
                          Interview Design Screen
                      </h5> */}
      </div>

     <hr />


      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick />

     <div>
     <form onSubmit={handleSubmit} className="bg-light w-100 border rounded-4 shadow-sm p-4">
        <h2 className="mb-4 text-center text-primary">Hiring Planning Form</h2>
        <div className="accordion" id="planningAccordion">
          {sections.map((section, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={index === 0} aria-controls={`collapse${index}`}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="progress-circle-wrapper small">
                      <svg className="progress-circle" viewBox="0 0 36 36">
                        <path
                          className="circle-bg"
                          d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          strokeWidth="6"
                        />
                        <path
                          className="circle"
                          d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          strokeWidth="6"
                          strokeDasharray={`${sectionProgress[index]}, 100`}
                        />
                      </svg>
                    </div>
                    <span>{section.title}</span>
                  </div>
                </button>
              </h2>
              <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`heading${index}`} data-bs-parent="#planningAccordion">
                <div className="accordion-body row">
                  {section.fields.map((field, i) => {
                    if (field === 'jdFile') return <React.Fragment key={i}>{renderFile('JD File Upload', field)}</React.Fragment>;
                    if (['position', 'experienceRange', 'workingModel', 'relocation', 'backgroundVerification', 'shiftTimings', 'roleType', 'jobType', 'citizenRequirement', 'careerGap', 'sabbatical', 'jobHealthRequirements', 'languageProficiency'].includes(field)) {
                      const optionsMap = {
                        position: ['Developer', 'Designer', 'Manager'],
                        experienceRange: ['0-5', '5-10', '10-15'],
                        workingModel: ['Part', 'Full'],
                        relocation: ['Yes', 'No', 'Decide Later'],
                        backgroundVerification: ['Yes', 'No', 'TBD'],
                        shiftTimings: ['General', 'Day + Night'],
                        roleType: ['Individual Contributor', 'Team Handling', 'Management', 'Leadership'],
                        jobType: ['Full time', 'Part time', 'Contractor'],
                        citizenRequirement: ['Yes', 'No', 'Decide Later'],
                        careerGap: ['Yes', 'No', 'Decide Later'],
                        sabbatical: ['Yes', 'No', 'Decide Later'],
                        jobHealthRequirements: ['Yes', 'No', 'Decide Later'],
                        languageProficiency: ['Beginner', 'Intermediate', 'Proficient']
                      };
                      return <React.Fragment key={i}>{renderSelect(field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()), field, optionsMap[field])}</React.Fragment>;
                    }
                    return <React.Fragment key={i}>{renderInput(field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()), field)}</React.Fragment>;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-end mt-4 mb-4">
          <button type="submit" className="btn   px-5 btn-primary  py-2">
            <i className="bi bi-send me-2"></i> Submit
          </button>
        </div>
        <div className='text-end'>
          <Link to={"/interview-form"} type='button' className='btn btn-primary ' >
            Next form
          </Link>
        </div>
      </form>
     </div>
    </div>
  );
};

export default PlanningForm;
