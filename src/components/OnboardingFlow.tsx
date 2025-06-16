
import React, { useState } from 'react';
import { CheckIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import PersonalInformation from './onboarding/PersonalInformation';
import ContactAddress from './onboarding/ContactAddress';
import EducationQualification from './onboarding/EducationQualification';
import EmploymentHistory from './onboarding/EmploymentHistory';
import EmergencyContacts from './onboarding/EmergencyContacts';
import SkillsProficiency from './onboarding/SkillsProficiency';
import EPFInsurance from './onboarding/EPFInsurance';
import DocumentUpload from './onboarding/DocumentUpload';
import RecruiterReview from './onboarding/RecruiterReview';
import ReviewSubmit from './onboarding/ReviewSubmit';

const steps = [
  { id: 1, title: 'Personal Information', component: PersonalInformation },
  { id: 2, title: 'Contact & Address', component: ContactAddress },
  { id: 3, title: 'Education & Qualification', component: EducationQualification },
  { id: 4, title: 'Employment History', component: EmploymentHistory },
  { id: 5, title: 'Emergency Contacts', component: EmergencyContacts },
  { id: 6, title: 'Skills & Proficiency', component: SkillsProficiency },
  { id: 7, title: 'EPF & Insurance', component: EPFInsurance },
  { id: 8, title: 'Document Upload', component: DocumentUpload },
  { id: 9, title: 'HR Review', component: RecruiterReview },
  { id: 10, title: 'Review & Submit', component: ReviewSubmit },
];

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState({});

  const updateFormData = (stepData: any) => {
    setFormData(prev => ({ ...prev, ...stepData }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCompletedSteps(prev => [...new Set([...prev, currentStep])]);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId);
  };

  const progress = (completedSteps.length / steps.length) * 100;
  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
      <div className="bg-white border-bottom px-4 py-3">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h2 fw-bold text-dark mb-1">Employee Onboarding</h1>
              <p className="text-muted mb-0 small">Complete all steps to finish the onboarding process</p>
            </div>
            <div className="d-flex align-items-center">
              <span className="badge bg-outline-secondary me-3 px-3 py-2">
                Step {currentStep} of {steps.length}
              </span>
              <div className="text-muted small">
                {Math.round(progress)}% Complete
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="progress" style={{ height: '8px' }}>
              <div 
                className="progress-bar bg-primary" 
                role="progressbar" 
                style={{ width: `${progress}%` }}
                aria-valuenow={progress} 
                aria-valuemin={0} 
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-4">
        <div className="row g-4">
          {/* Sidebar Navigation */}
          <div className="col-lg-3">
            <div className="card position-sticky" style={{ top: '2rem' }}>
              <div className="card-header">
                <h5 className="card-title mb-0">Progress Steps</h5>
              </div>
              <div className="card-body p-2">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    onClick={() => handleStepClick(step.id)}
                    className={`d-flex align-items-center p-3 rounded mb-2 cursor-pointer transition ${
                      currentStep === step.id
                        ? 'bg-primary bg-opacity-10 border border-primary'
                        : completedSteps.includes(step.id)
                        ? 'bg-success bg-opacity-10 border border-success'
                        : 'bg-light border border-light'
                    }`}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className={`rounded-circle d-flex align-items-center justify-content-center me-3 ${
                      completedSteps.includes(step.id)
                        ? 'bg-success text-white'
                        : currentStep === step.id
                        ? 'bg-primary text-white'
                        : 'bg-secondary text-white'
                    }`} style={{ width: '24px', height: '24px', fontSize: '12px' }}>
                      {completedSteps.includes(step.id) ? (
                        <CheckIcon size={14} />
                      ) : (
                        step.id
                      )}
                    </div>
                    <span className={`small fw-medium ${
                      currentStep === step.id
                        ? 'text-primary'
                        : completedSteps.includes(step.id)
                        ? 'text-success'
                        : 'text-muted'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9">
            <div className="card" style={{ minHeight: '600px' }}>
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">Step {currentStep}: {steps[currentStep - 1].title}</h5>
                <span className={`badge ${completedSteps.includes(currentStep) ? 'bg-success' : 'bg-secondary'}`}>
                  {completedSteps.includes(currentStep) ? "Completed" : "In Progress"}
                </span>
              </div>
              <div className="card-body">
                <CurrentStepComponent 
                  formData={formData} 
                  updateFormData={updateFormData}
                />
                
                {/* Navigation Buttons */}
                <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
                  <button
                    className="btn btn-outline-secondary d-flex align-items-center"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeftIcon size={16} className="me-2" />
                    Previous
                  </button>
                  
                  {currentStep < steps.length ? (
                    <button
                      onClick={handleNext}
                      className="btn btn-primary d-flex align-items-center"
                    >
                      Next Step
                      <ArrowRightIcon size={16} className="ms-2" />
                    </button>
                  ) : (
                    <button
                      onClick={() => console.log('Submit onboarding', formData)}
                      className="btn btn-success"
                    >
                      Complete Onboarding
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;
