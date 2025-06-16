
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, UserCheckIcon, FileTextIcon, DownloadIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface RecruiterReviewProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const RecruiterReview: React.FC<RecruiterReviewProps> = ({ formData, updateFormData }) => {
  const [signatureDate, setSignatureDate] = useState<Date>();

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <UserCheckIcon className="w-5 h-5 mr-2" />
          HR & Recruiter Assessment
        </h3>
        <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
          Internal Use Only - HR Access Required
        </Badge>
      </div>

      {/* Candidate Endorsement */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">Candidate Endorsement Form</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Recruiter Name *</Label>
              <Input placeholder="Enter recruiter's name" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Recruiter Employee ID *</Label>
              <Input placeholder="Recruiter's employee ID" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Hiring Manager Name *</Label>
              <Input placeholder="Enter hiring manager's name" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Department/Team *</Label>
              <Input placeholder="Department joining" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Position Applied For *</Label>
              <Input placeholder="Job title/position" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Interview Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !signatureDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {signatureDate ? format(signatureDate, "PP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={signatureDate}
                    onSelect={setSignatureDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assessment Ratings */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-900">Assessment & Ratings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Technical Fitment */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Technical Fitment Assessment *</Label>
            <RadioGroup defaultValue="good" className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="excellent" id="tech-excellent" />
                <Label htmlFor="tech-excellent" className="text-sm">Excellent</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="good" id="tech-good" />
                <Label htmlFor="tech-good" className="text-sm">Good</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="average" id="tech-average" />
                <Label htmlFor="tech-average" className="text-sm">Average</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="poor" id="tech-poor" />
                <Label htmlFor="tech-poor" className="text-sm">Needs Improvement</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Communication Skills */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Communication Skills Rating *</Label>
            <RadioGroup defaultValue="good" className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="outstanding" id="comm-outstanding" />
                <Label htmlFor="comm-outstanding" className="text-sm">Outstanding</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="excellent" id="comm-excellent" />
                <Label htmlFor="comm-excellent" className="text-sm">Excellent</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="good" id="comm-good" />
                <Label htmlFor="comm-good" className="text-sm">Good</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="average" id="comm-average" />
                <Label htmlFor="comm-average" className="text-sm">Average</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="poor" id="comm-poor" />
                <Label htmlFor="comm-poor" className="text-sm">Poor</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Cultural Fit */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Cultural Fit Assessment *</Label>
            <RadioGroup defaultValue="high" className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="culture-high" />
                <Label htmlFor="culture-high" className="text-sm">High Fit</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="culture-medium" />
                <Label htmlFor="culture-medium" className="text-sm">Medium Fit</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low" id="culture-low" />
                <Label htmlFor="culture-low" className="text-sm">Low Fit</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* Notes & Comments */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-yellow-900">Notes & Comments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Recruiter Notes</Label>
            <Textarea
              placeholder="Add any observations, strengths, areas for development..."
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Hiring Manager Comments</Label>
            <Textarea
              placeholder="Hiring manager's feedback and recommendations..."
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Special Instructions/Accommodations</Label>
            <Textarea
              placeholder="Any special requirements, accommodations, or onboarding notes..."
              className="min-h-[80px]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Final Decision */}
      <Card className="bg-purple-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-900">Final Offer Decision</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label className="text-sm font-medium">Final Recommendation *</Label>
            <RadioGroup defaultValue="approved" className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="approved" id="approved" />
                <Label htmlFor="approved" className="text-sm font-medium text-green-700">
                  Approved - Proceed with Onboarding
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="conditional" id="conditional" />
                <Label htmlFor="conditional" className="text-sm font-medium text-yellow-700">
                  Conditional Approval - Pending Documentation
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="rejected" id="rejected" />
                <Label htmlFor="rejected" className="text-sm font-medium text-red-700">
                  Not Approved - Require Further Review
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">HR Representative Signature *</Label>
              <Input placeholder="HR representative name" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Date of Review *</Label>
              <Input type="date" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Export Options */}
      <Card className="bg-gray-50 border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center text-gray-900">
            <FileTextIcon className="w-5 h-5 mr-2" />
            Export & Documentation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="flex items-center space-x-2">
              <DownloadIcon className="w-4 h-4" />
              <span>Download Assessment PDF</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <DownloadIcon className="w-4 h-4" />
              <span>Export Complete Profile</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <FileTextIcon className="w-4 h-4" />
              <span>Generate Offer Letter</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecruiterReview;
