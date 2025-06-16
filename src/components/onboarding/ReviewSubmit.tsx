
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircleIcon, AlertCircleIcon, FileTextIcon, DownloadIcon, SendIcon } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface ReviewSubmitProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const ReviewSubmit: React.FC<ReviewSubmitProps> = ({ formData, updateFormData }) => {
  const [declarationAccepted, setDeclarationAccepted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFinalSubmit = async () => {
    if (!declarationAccepted || !termsAccepted) return;
    
    setIsSubmitting(true);
    // Simulate submission process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    
    // Here you would typically send the data to your backend
    console.log('Final submission:', formData);
  };

  const sections = [
    {
      title: 'Personal Information',
      status: 'complete',
      items: ['Full Name', 'Date of Birth', 'Contact Details', 'Government IDs']
    },
    {
      title: 'Contact & Address',
      status: 'complete',
      items: ['Current Address', 'Permanent Address', 'Emergency Contacts']
    },
    {
      title: 'Education & Qualifications',
      status: 'complete',
      items: ['Educational Background', 'Certifications', 'Training Records']
    },
    {
      title: 'Employment History',
      status: 'complete',
      items: ['Current Employment', 'Previous Employment', 'Reference Contacts']
    },
    {
      title: 'Skills & Proficiency',
      status: 'complete',
      items: ['Technical Skills', 'Language Proficiency', 'Skill Ratings']
    },
    {
      title: 'EPF & Insurance',
      status: 'complete',
      items: ['EPF Declaration', 'Insurance Details', 'Family Information']
    },
    {
      title: 'Document Upload',
      status: 'pending',
      items: ['Required Documents: 4/5 uploaded', 'Optional Documents: 2/3 uploaded']
    },
    {
      title: 'HR Review',
      status: 'approved',
      items: ['Technical Assessment: Excellent', 'Communication: Good', 'Cultural Fit: High']
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'complete':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Complete</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>;
      case 'approved':
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Approved</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
      case 'approved':
        return <CheckCircleIcon className="w-5 h-5 text-green-600" />;
      case 'pending':
        return <AlertCircleIcon className="w-5 h-5 text-yellow-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Review & Submit Application</h3>
        <p className="text-sm text-gray-600">
          Please review all information before final submission. Once submitted, changes may require HR approval.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-800">Completed Sections</p>
                <p className="text-2xl font-bold text-green-600">6/8</p>
              </div>
              <CheckCircleIcon className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-800">Pending Items</p>
                <p className="text-2xl font-bold text-yellow-600">2</p>
              </div>
              <AlertCircleIcon className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-800">Overall Progress</p>
                <p className="text-2xl font-bold text-blue-600">90%</p>
              </div>
              <FileTextIcon className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section Review */}
      <Card>
        <CardHeader>
          <CardTitle>Application Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {sections.map((section, index) => (
              <AccordionItem key={index} value={`section-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full mr-4">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(section.status)}
                      <span className="font-medium">{section.title}</span>
                    </div>
                    {getStatusBadge(section.status)}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-2">
                    <ul className="space-y-1">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Declaration & Terms */}
      <Card className="bg-gray-50 border-gray-200">
        <CardHeader>
          <CardTitle>Declaration & Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="declaration"
                checked={declarationAccepted}
                onCheckedChange={(checked) => setDeclarationAccepted(checked as boolean)}
              />
              <div className="space-y-1 leading-none">
                <label
                  htmlFor="declaration"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Information Declaration
                </label>
                <p className="text-xs text-gray-600">
                  I hereby declare that all the information provided in this onboarding form is true, complete, 
                  and accurate to the best of my knowledge. I understand that any false information may result 
                  in termination of employment.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={termsAccepted}
                onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
              />
              <div className="space-y-1 leading-none">
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Terms & Conditions
                </label>
                <p className="text-xs text-gray-600">
                  I accept the company's terms and conditions, policies, and procedures as outlined in the 
                  employee handbook. I consent to the processing of my personal data for employment purposes.
                </p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-900 mb-2">Digital Signature</h4>
            <p className="text-sm text-blue-700 mb-3">
              By clicking "Submit Application", you are providing your digital signature and agreeing to all terms.
            </p>
            <div className="text-xs text-blue-600">
              Submission Date: {new Date().toLocaleDateString()} | 
              Submission Time: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center space-x-2">
                <DownloadIcon className="w-4 h-4" />
                <span>Download PDF Preview</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <FileTextIcon className="w-4 h-4" />
                <span>Save as Draft</span>
              </Button>
            </div>

            <Button
              onClick={handleFinalSubmit}
              disabled={!declarationAccepted || !termsAccepted || isSubmitting}
              className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <SendIcon className="w-4 h-4" />
                  <span>Submit Application</span>
                </>
              )}
            </Button>
          </div>

          {(!declarationAccepted || !termsAccepted) && (
            <p className="text-sm text-red-600 mt-2">
              Please accept the declaration and terms & conditions to proceed with submission.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewSubmit;
