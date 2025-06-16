
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Employee Onboarding</h1>
              <p className="text-sm text-gray-600 mt-1">Complete all steps to finish the onboarding process</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="px-3 py-1">
                Step {currentStep} of {steps.length}
              </Badge>
              <div className="text-sm text-gray-600">
                {Math.round(progress)}% Complete
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Progress Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    onClick={() => handleStepClick(step.id)}
                    className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                      currentStep === step.id
                        ? 'bg-blue-50 border-2 border-blue-200'
                        : completedSteps.includes(step.id)
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                      completedSteps.includes(step.id)
                        ? 'bg-green-500 text-white'
                        : currentStep === step.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {completedSteps.includes(step.id) ? (
                        <CheckIcon className="w-4 h-4" />
                      ) : (
                        step.id
                      )}
                    </div>
                    <span className={`ml-3 text-sm font-medium ${
                      currentStep === step.id
                        ? 'text-blue-700'
                        : completedSteps.includes(step.id)
                        ? 'text-green-700'
                        : 'text-gray-600'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="min-h-[600px]">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Step {currentStep}: {steps[currentStep - 1].title}</span>
                  <Badge variant={completedSteps.includes(currentStep) ? "default" : "secondary"}>
                    {completedSteps.includes(currentStep) ? "Completed" : "In Progress"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CurrentStepComponent 
                  formData={formData} 
                  updateFormData={updateFormData}
                />
                
                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className="flex items-center space-x-2"
                  >
                    <ArrowLeftIcon className="w-4 h-4" />
                    <span>Previous</span>
                  </Button>
                  
                  {currentStep < steps.length ? (
                    <Button
                      onClick={handleNext}
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
                    >
                      <span>Next Step</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => console.log('Submit onboarding', formData)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Complete Onboarding
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;
